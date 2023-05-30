module Api
  module V1
    class HealthsController < Api::V1::BaseController
      skip_before_action :doorkeeper_authorize!

      def show
        render json: { status: 'ok' }
      end
    end
  end
end
