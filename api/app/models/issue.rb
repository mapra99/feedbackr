class Issue < ApplicationRecord
  include Uuidable

  belongs_to :user
  belongs_to :product

  validates :title, presence: true
  validates :detail, presence: true
end
