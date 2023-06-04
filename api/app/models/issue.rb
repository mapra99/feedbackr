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

  validates :title, presence: true
  validates :detail, presence: true
  validates :status, presence: true, inclusion: { in: STATUSES.values }
end
