module Api
  module V1
    class IssuesController < BaseController
      def index
        return head :bad_request if params[:product_slug].blank?

        issues = Issue.includes(:issue_category, :user).where(product:)

        render json: ::V1::IssuesBlueprint.render(issues)
      end

      private

      def product
        @product ||= Product.friendly.find(params[:product_slug])
      end
    end
  end
end
