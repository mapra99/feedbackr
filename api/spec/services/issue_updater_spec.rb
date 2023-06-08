require 'rails_helper'

RSpec.describe IssueUpdater do
  subject(:updater) { described_class.new(params, issue, user) }

  let(:params) do
    {
      title: 'title',
      detail:,
      category:
    }
  end

  let(:detail) { 'detail' }
  let(:category) { 'category' }
  let(:issue) { create(:issue) }
  let(:user) { create(:user) }

  describe '#call' do
    before do
      create(:issue_category, name: 'category')
      updater.call
    end

    it 'updates the issue title' do
      expect(issue.title).to eq('title')
    end

    it 'updates the issue detail' do
      expect(issue.detail).to eq('detail')
    end

    it 'updates the issue category' do
      expect(issue.issue_category.name).to eq('category')
    end

    it 'is successful' do
      expect(updater.success?).to be(true)
    end

    describe 'when the category does not exist' do
      let(:category) { 'something' }

      it 'is not successful' do
        expect(updater.success?).to be(false)
      end
    end

    describe 'when the params had validation errors' do
      let(:detail) { nil }

      it 'is not successful' do
        expect(updater.success?).to be(false)
      end
    end
  end
end
