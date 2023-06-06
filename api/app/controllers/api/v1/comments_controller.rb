module Api
  module V1
    class CommentsController < BaseController
      before_action :validate_params!

      def create
        comment = current_user.comments.build(content: comment_params[:content], parent:)
        return render json: ::V1::CommentsBlueprint.render(comment) if comment.save

        render json: { errors: comment.errors.full_messages }, status: :unprocessable_entity
      end

      private

      def validate_params!
        return head :bad_request if comment_params[:content].blank?
        return head :bad_request if comment_params[:parent_uuid].blank?
        return head :bad_request if comment_params[:parent_type].blank?
        return head :bad_request unless %w[Issue Comment].include?(comment_params[:parent_type])
      end

      def comment_params
        params.permit(:content, :parent_uuid, :parent_type)
      end

      def parent
        @parent ||= comment_params[:parent_type].constantize.find_by(uuid: comment_params[:parent_uuid])
      end
    end
  end
end
