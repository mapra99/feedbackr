module Api
  module V1
    class ProfilesController < Api::V1::BaseController
      def show
        render json: ::V1::UsersBlueprint.render(current_resource_owner)
      end
    end
  end
end
