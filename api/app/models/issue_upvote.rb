class IssueUpvote < ApplicationRecord
  belongs_to :user
  belongs_to :issue

  validates :issue_id, uniqueness: { scope: :user_id, message: 'has been already upvoted by user' }
end
