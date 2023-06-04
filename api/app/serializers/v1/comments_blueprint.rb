module V1
  class CommentsBlueprint < Blueprinter::Base
    fields :uuid, :content, :created_at, :updated_at
    association :user, blueprint: UsersBlueprint
    association :replies, blueprint: CommentsBlueprint
  end
end
