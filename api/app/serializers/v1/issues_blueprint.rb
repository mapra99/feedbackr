module V1
  class IssuesBlueprint < Blueprinter::Base
    identifier :uuid
    fields :title, :detail, :status, :created_at, :updated_at, :comments_count

    association :issue_category, blueprint: IssueCategoriesBlueprint, name: :category
    association :user, blueprint: UsersBlueprint

    view :extended do
      association :comments, blueprint: CommentsBlueprint do |issue|
        issue.comments.oldest_first
      end
    end
  end
end
