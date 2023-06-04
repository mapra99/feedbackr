class Comment < ApplicationRecord
  include Uuidable

  belongs_to :user
  belongs_to :parent, polymorphic: true
  has_many :comments, as: :parent, dependent: :destroy

  validates :content, presence: true

  def comments_count
    total = 1

    comments.each do |comment|
      total += comment.comments_count
    end

    total
  end
end
