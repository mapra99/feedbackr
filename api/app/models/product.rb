class Product < ApplicationRecord
  extend FriendlyId

  friendly_id :name, use: :slugged

  validates :name, presence: true

  has_many :issues, dependent: :destroy
end
