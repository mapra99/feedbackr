require 'rails_helper'

RSpec.describe Comment, type: :model do
  subject { build(:comment) }

  describe 'associations' do
    it { is_expected.to belong_to(:user) }
    it { is_expected.to belong_to(:parent) }
    it { is_expected.to have_many(:comments) }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:content) }
  end

  describe 'uuid' do
    subject(:comment) { build(:comment) }

    before do
      comment.save!
    end

    it 'generates a uuid' do
      expect(comment.uuid).to be_present
    end
  end

  describe '#total_comments_count' do
    let(:comment) { create(:comment) }

    before do
      child_comments = create_list(:comment, 2, parent: comment)
      child_child_comment = create(:comment, parent: child_comments.first)
      create(:comment, parent: child_child_comment)
    end

    it 'returns the total number of comments' do
      expect(comment.comments_count).to eq(5)
    end
  end
end
