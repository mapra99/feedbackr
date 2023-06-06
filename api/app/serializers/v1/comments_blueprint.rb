module V1
  class CommentsBlueprint < Blueprinter::Base
    identifier :uuid
    fields :content, :created_at, :updated_at
    association :user, blueprint: UsersBlueprint
    association :replies, blueprint: CommentsBlueprint do |comment|
      comment.replies.oldest_first
    end
  end
end
