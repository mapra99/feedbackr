class IssueUpdater
  attr_reader :issue, :errors

  def initialize(params, issue, user)
    @params = params
    @issue = issue
    @user = user
    @errors = []
  end

  def call
    issue.update(params.slice(:title, :detail, :status))

    assign_category
    return false unless success?
    return true if issue.save

    @errors = issue.errors.full_messages
    false
  end

  def success?
    errors.blank?
  end

  private

  attr_reader :params, :user

  def issue_category
    @issue_category ||= IssueCategory.find_by(name: params[:category])
  end

  def assign_category
    if params[:category].present? && issue_category.blank?
      @errors << 'Category not found'
      return false
    end

    issue.issue_category = issue_category
  end
end
