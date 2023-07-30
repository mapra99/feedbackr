class Comment < ApplicationRecord
  include Uuidable

  belongs_to :user
  belongs_to :parent, polymorphic: true
  belongs_to :issue, counter_cache: true, optional: true
  has_many :replies, class_name: 'Comment', as: :parent, dependent: :destroy

  validates :content, presence: true

  scope :oldest_first, -> { order(created_at: :asc) }

  before_save :set_issue

  def set_issue
    self.issue = parent.is_a?(Comment) ? parent.issue : parent
  end
end
