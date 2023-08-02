module Api
  module V1
    class IssuesController < BaseController
      before_action :validate_identifiers!, only: %i[show update destroy]

      def index
        return head :bad_request if params[:product_slug].blank?
        return head :not_found if product.blank?

        issues = IssuesFeedBuilder.new(product:, sort_params:, filter_params:).call
        render json: ::V1::IssuesBlueprint.render(issues, current_user:)
      end

      def show
        return head :not_found if issue.blank?

        render json: ::V1::IssuesBlueprint.render(issue, current_user:, view: :extended)
      end

      def create
        creator = IssueCreator.new(issue_params, product, current_user)
        creator.call

        if creator.success?
          render json: ::V1::IssuesBlueprint.render(creator.issue, current_user:)
        else
          render json: { errors: creator.errors }, status: :unprocessable_entity
        end
      end

      def update
        updater = IssueUpdater.new(issue_params, issue, current_user)
        updater.call

        if updater.success?
          render json: ::V1::IssuesBlueprint.render(updater.issue, current_user:)
        else
          render json: { errors: issue.errors }, status: :unprocessable_entity
        end
      end

      def destroy
        issue.destroy
        head :no_content
      end

      private

      def issue
        @issue ||= Issue.includes(:comments, comments: %i[user replies]).find_by(uuid: params[:uuid])
      end

      def product
        @product ||= Product.find_by(slug: params[:product_slug])
      end

      def issue_params
        params.permit(:title, :detail, :category, :status)
      end

      def validate_identifiers!
        return head :not_found if issue.blank?
      end

      def sort_params
        params.permit(:sort_by, :sort_direction)
      end

      def filter_params
        params.permit(:category)
      end
    end
  end
end
