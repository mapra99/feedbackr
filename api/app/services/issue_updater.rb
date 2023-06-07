class IssueUpdater
  attr_reader :issue, :errors

  def initialize(params, issue, product, user)
    @params = params
    @issue = issue
    @product = product
    @user = user
    @errors = []
  end

  def call
    issue.update(params.slice(:title, :detail, :status))

    assign_category
    return true if issue.save

    @errors = issue.errors.full_messages
    false
  end

  def success?
    errors.blank?
  end

  private

  attr_reader :params, :product, :user

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
