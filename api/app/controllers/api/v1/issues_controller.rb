module Api
  module V1
    class IssuesController < BaseController
      def index
        return head :bad_request if params[:product_slug].blank?

        issues = Issue.includes(:issue_category, :user, :issue_upvotes).where(product:)

        render json: ::V1::IssuesBlueprint.render(issues, current_user:)
      end

      private

      def product
        @product ||= Product.friendly.find(params[:product_slug])
      end
    end
  end
end
