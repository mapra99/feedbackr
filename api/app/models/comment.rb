class Comment < ApplicationRecord
  include Uuidable

  belongs_to :user
  belongs_to :parent, polymorphic: true
  has_many :comments, as: :parent, dependent: :destroy

  validates :content, presence: true
end
