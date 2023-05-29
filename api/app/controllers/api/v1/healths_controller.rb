module Api
  module V1
    class HealthsController < Api::V1::BaseController
      def show
        render json: { status: 'ok' }
      end
    end
  end
end
