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
end
