module Api
  module V1
    class BaseController < Api::BaseController
      before_action :doorkeeper_authorize!

      private

      def current_resource_owner
        @current_resource_owner ||= doorkeeper_token ? User.find(doorkeeper_token.resource_owner_id) : nil
      end

      def current_user
        current_resource_owner
      end
    end
  end
end
