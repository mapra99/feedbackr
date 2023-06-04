require 'rails_helper'

RSpec.describe IssueUpvote, type: :model do
  subject { build(:issue_upvote) }

  describe 'associations' do
    it { is_expected.to belong_to(:issue) }
    it { is_expected.to belong_to(:user) }
  end

  describe 'validations' do
    it { is_expected.to validate_uniqueness_of(:issue_id).scoped_to(:user_id) }
  end
end
