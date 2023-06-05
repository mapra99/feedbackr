require 'rails_helper'

RSpec.describe IssueUpvote, type: :model do
  subject { build(:issue_upvote) }

  describe 'associations' do
    it { is_expected.to belong_to(:issue) }
    it { is_expected.to belong_to(:user) }
  end
end
