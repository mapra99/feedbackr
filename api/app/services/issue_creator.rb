class IssueCreator
  attr_reader :issue, :errors

  def initialize(params, product, user)
    @params = params
    @product = product
    @user = user
    @errors = []
  end

  def call
    @issue = build_issue

    if issue_category.blank?
      @errors << 'Category not found'
      return false
    end

    issue.issue_category = issue_category
    return true if issue.save

    @errors = issue.errors.full_messages
    false
  end

  def success?
    errors.blank?
  end

  private

  attr_reader :params, :product, :user

  def build_issue
    Issue.new(
      title: params[:title],
      detail: params[:detail],
      product:,
      user:,
      status: Issue::STATUSES[:suggestion]
    )
  end

  def issue_category
    @issue_category ||= IssueCategory.find_by(name: params[:category])
  end
end
