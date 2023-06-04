class IssueCategory < ApplicationRecord
  validates :name, presence: true

  has_many :issues, dependent: :destroy
end
