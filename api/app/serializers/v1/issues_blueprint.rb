module V1
  class IssuesBlueprint < Blueprinter::Base
    identifier :uuid
    fields :uuid, :title, :detail, :status, :created_at, :updated_at

    association :issue_category, blueprint: IssueCategoriesBlueprint, name: :category
    association :user, blueprint: UsersBlueprint
  end
end
