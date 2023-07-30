class Issue < ApplicationRecord
  include Uuidable

  STATUSES = {
    suggestion: 'suggestion',
    planned: 'planned',
    in_progress: 'in_progress',
    live: 'live'
  }.freeze

  belongs_to :user
  belongs_to :product
  belongs_to :issue_category
  has_many :comments, as: :parent, dependent: :destroy
  has_many :issue_upvotes, dependent: :destroy

  validates :title, presence: true
  validates :detail, presence: true
  validates :status, presence: true, inclusion: { in: STATUSES.values }

  def comments_count
    comments.map(&:comments_count).sum
  end

  def upvoted_by?(user)
    issue_upvotes.exists?(user_id: user.id)
  end
end
