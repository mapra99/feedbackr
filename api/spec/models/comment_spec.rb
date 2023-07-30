require 'rails_helper'

RSpec.describe Comment, type: :model do
  subject { build(:comment) }

  describe 'associations' do
    it { is_expected.to belong_to(:user) }
    it { is_expected.to belong_to(:parent) }
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
end
