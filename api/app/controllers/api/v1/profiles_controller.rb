module Api
  module V1
    class ProfilesController < Api::V1::BaseController
      def show
        respond_with current_resource_owner
      end
    end
  end
end
