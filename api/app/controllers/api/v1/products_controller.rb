module Api
  module V1
    class ProductsController < BaseController
      def show
        render jsonapi: product, class: { Product: ::V1::SerializableProduct }
      end

      private

      def product
        @product ||= Product.friendly.find(params[:slug])
      end
    end
  end
end
