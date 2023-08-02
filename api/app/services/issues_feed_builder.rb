class IssuesFeedBuilder
  attr_reader :product, :sort_params, :issues, :filter_params

  def initialize(product:, sort_params: nil, filter_params: nil)
    @product = product
    @sort_params = sort_params
    @filter_params = filter_params
  end

  def call
    @issues = Issue.includes(:issue_category, :user, :issue_upvotes)
    @issues = filtered_by_product if product.present?
    @issues = sorted
    @issues = filtered

    issues
  end

  private

  def filtered_by_product
    issues.where(product:)
  end

  def sorted
    return issues.latest_first if sort_params.blank?

    case sort_params[:sort_by]
    when 'upvotes'
      issues.sort_by_upvotes(sort_params[:sort_direction])
    when 'comments'
      issues.sort_by_comments(sort_params[:sort_direction])
    else
      raise StandardError, 'Invalid sort params'
    end
  end

  def filtered
    return issues if filter_params.blank? || filter_params[:category].blank?

    issues.filter_by_categories(filter_params[:category].split(','))
  end
end
