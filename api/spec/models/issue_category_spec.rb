require 'rails_helper'

RSpec.describe IssueCategory do
  subject { build(:issue_category) }

  describe 'validations' do
    it { is_expected.to validate_presence_of(:name) }
  end

  describe 'associations' do
    it { is_expected.to have_many(:issues) }
  end
end
