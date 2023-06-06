require 'rails_helper'

RSpec.describe IssueCreator do
  subject(:creator) { described_class.new(params, product, user) }

  let(:params) do
    {
      title: 'title',
      detail:
      category:
    }
  end

  let(:detail) { 'detail' }
  let(:category) { 'category' }
  let(:product) { create(:product) }
  let(:user) { create(:user) }

  describe '#call' do
    before do
      create(:issue_category, name: 'category')
      creator.call
    end

    it 'creates an issue' do
      expect(creator.issue).to be_persisted
    end

    it 'is successful' do
      expect(creator.success?).to be(true)
    end

    describe 'when the category does not exist' do
      let(:category) { 'something' }

      it 'does not create an issue' do
        expect(creator.issue).not_to be_persisted
      end

      it 'is not successful' do
        expect(creator.success?).to be(false)
      end
    end

    describe 'when the issue had validation errors' do
      let(:detail) { nil }

      it 'does not create an issue' do
        expect(creator.issue).not_to be_persisted
      end

      it 'is not successful' do
        expect(creator.success?).to be(false)
      end
    end
  end
end
