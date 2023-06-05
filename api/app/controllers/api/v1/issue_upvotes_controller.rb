module Api
  module V1
    class IssueUpvotesController < BaseController
      before_action :validate_params!

      def create
        issue_upvote = IssueUpvote.new(issue:, user: current_user)
        return head :created if issue_upvote.save

        render json: { errors: issue_upvote.errors.full_messages }, status: :unprocessable_entity
      end

      def destroy
        issue_upvote = IssueUpvote.find_by(issue:, user: current_user)
        return head :unprocessable_entity if issue_upvote.blank?

        issue_upvote.destroy
        head :no_content
      end

      private

      def issue
        @issue ||= Issue.find_by(uuid: params[:issue_uuid])
      end

      def validate_params!
        head :bad_request if params[:issue_uuid].blank? || issue.blank?
      end
    end
  end
end
