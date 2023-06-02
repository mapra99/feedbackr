class Issue < ApplicationRecord
  include Uuidable

  belongs_to :user
  belongs_to :product
  belongs_to :issue

  validates :title, presence: true
  validates :detail, presence: true
end
