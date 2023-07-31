class IssuesFeedBuilder
  attr_reader :product, :sort_params, :issues

  def initialize(product:, sort_params:)
    @product = product
    @sort_params = sort_params
  end

  def call
    @issues = Issue.includes(:issue_category, :user, :issue_upvotes).latest_first
    @issues = filtered_by_product if product.present?
    @issues = sorted if sort_params.present?

    issues
  end

  private

  def filtered_by_product
    issues.where(product:)
  end

  def sorted
    byebug
    if sort_params[:sort_by] == 'upvotes'
      issues.sort_by_upvotes(sort_params[:sort_direction] == 'desc' ? :desc : :asc)
    elsif sort_params[:sort_by] == 'comments'
      issues.sort_by_comments(sort_params[:sort_direction] == 'desc' ? :desc : :asc)
    else
      raise StandardError, 'Invalid sort_by param'
    end
  end
end
