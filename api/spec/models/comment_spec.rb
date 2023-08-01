require 'rails_helper'

RSpec.describe Comment, type: :model do
  subject { build(:comment) }

  describe 'associations' do
    it { is_expected.to belong_to(:user) }
    it { is_expected.to belong_to(:parent) }
    it { is_expected.to belong_to(:issue).optional }
    it { is_expected.to have_many(:replies) }
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

  describe 'issue callback' do
    subject(:comment) { build(:comment, parent:) }

    let(:original_issue) { create(:issue) }

    before do
      comment.save!
    end

    describe 'when parent is another comment' do
      let(:parent) { create(:comment, parent: original_issue) }

      it "sets the issue to the parent comment's issue" do
        expect(comment.issue).to eq(original_issue)
      end
    end

    describe 'when parent is the original issue' do
      let(:parent) { original_issue }

      it 'sets the issue to the original issue' do
        expect(comment.issue).to eq(original_issue)
      end
    end
  end
end
