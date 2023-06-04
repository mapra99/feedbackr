module V1
  class IssuesBlueprint < Blueprinter::Base
    identifier :uuid
    fields :title, :detail, :status, :upvotes, :created_at, :updated_at

    field :already_upvoted do |issue, options|
      issue.upvoted_by?(options[:current_user])
    end

    association :issue_category, blueprint: IssueCategoriesBlueprint, name: :category
    association :user, blueprint: UsersBlueprint
  end
end
