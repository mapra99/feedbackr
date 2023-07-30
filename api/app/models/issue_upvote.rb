class IssueUpvote < ApplicationRecord
  belongs_to :user
  belongs_to :issue, counter_cache: :upvotes_count

  validates :issue_id, uniqueness: { scope: :user_id, message: 'has been already upvoted by user' }
end
