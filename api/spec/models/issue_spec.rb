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
    it { is_expected.to have_many(:all_comments).class_name('Comment') }
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

  describe '.latest_first' do
    subject(:latest_first) { described_class.latest_first }

    let!(:issue_1) { create(:issue, created_at: 1.day.ago) }
    let!(:issue_2) { create(:issue, created_at: 2.days.ago) }

    it 'returns issues sorted by created_at desc' do
      expect(latest_first).to eq [issue_1, issue_2]
    end
  end

  describe '.sort_by_upvotes' do
    subject(:sort_by_upvotes) { described_class.sort_by_upvotes(direction) }

    let(:direction) { :desc }

    let!(:issue_1) { create(:issue, upvotes_count: 5) }
    let!(:issue_2) { create(:issue, upvotes_count: 10) }

    it 'returns issues sorted by upvotes desc' do
      expect(sort_by_upvotes).to eq [issue_2, issue_1]
    end
  end

  describe '.sort_by_comments' do
    subject(:sort_by_comments) { described_class.sort_by_comments(direction) }

    let(:direction) { :desc }

    let!(:issue_1) { create(:issue, comments_count: 5) }
    let!(:issue_2) { create(:issue, comments_count: 10) }

    it 'returns issues sorted by comments desc' do
      expect(sort_by_comments).to eq [issue_2, issue_1]
    end
  end
end
