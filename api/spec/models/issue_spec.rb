require 'rails_helper'

RSpec.describe Issue do
  subject { build(:issue) }

  describe 'validations' do
    it { is_expected.to validate_presence_of(:title) }
    it { is_expected.to validate_presence_of(:detail) }
    it { is_expected.to validate_presence_of(:status) }
    it { is_expected.to validate_inclusion_of(:status).in_array(Issue::STATUSES.values) }
  end

  describe 'associations' do
    it { is_expected.to belong_to(:user) }
    it { is_expected.to belong_to(:product) }
    it { is_expected.to belong_to(:issue_category) }
    it { is_expected.to have_many(:comments) }
    it { is_expected.to have_many(:issue_upvotes) }
  end

  describe 'uuid' do
    subject(:issue) { build(:issue) }

    before do
      issue.save!
    end

    it 'generates a uuid' do
      expect(issue.uuid).to be_present
    end
  end

  describe '#upvoted_by?' do
    subject(:upvoted_by?) { issue.upvoted_by?(user) }

    let(:issue) { create(:issue) }
    let(:user) { create(:user) }

    before do
      create(:issue_upvote, issue:, user:)
    end

    it 'returns true if the user has upvoted the issue' do
      expect(upvoted_by?).to eq(true)
    end

    context 'when the user has not upvoted the issue' do
      subject(:upvoted_by?) { issue.upvoted_by?(another_user) }

      let(:another_user) { create(:user) }

      it 'returns false' do
        expect(upvoted_by?).to eq(false)
      end
    end
  end
end
