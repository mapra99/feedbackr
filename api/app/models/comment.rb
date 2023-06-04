class Comment < ApplicationRecord
  include Uuidable

  belongs_to :user
  belongs_to :parent, polymorphic: true
  has_many :replies, class_name: 'Comment', as: :parent, dependent: :destroy

  validates :content, presence: true

  def comments_count
    total = 1

    replies.each do |reply|
      total += reply.comments_count
    end

    total
  end
end
