module Api
  module V1
    class IssuesController < BaseController
      def index
        return head :bad_request if params[:product_slug].blank?
        return head :not_found if product.blank?

        issues = Issue.includes(:issue_category, :user, :issue_upvotes).where(product:)
        render json: ::V1::IssuesBlueprint.render(issues, current_user:)
      end

      def show
        return head :not_found if product.blank? || issue.blank?

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

      private

      def issue
        @issue ||= Issue.includes(:comments, comments: %i[user replies]).find_by(uuid: params[:uuid], product:)
      end

      def product
        @product ||= Product.find_by(slug: params[:product_slug])
      end

      def issue_params
        params.permit(:title, :detail, :category)
      end
    end
  end
end
