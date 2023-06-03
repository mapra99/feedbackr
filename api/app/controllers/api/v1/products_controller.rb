module Api
  module V1
    class ProductsController < BaseController
      def show
        render json: ::V1::ProductsBlueprint.render(product)
      end

      private

      def product
        @product ||= Product.friendly.find(params[:slug])
      end
    end
  end
end
