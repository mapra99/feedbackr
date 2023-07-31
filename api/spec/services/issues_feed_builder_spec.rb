require 'rails_helper'

RSpec.describe IssuesFeedBuilder do
  subject(:service) { described_class.new(product:, sort_params:) }

  let(:product) { create(:product) }

  describe '#call' do
    subject(:result) { service.call }

    before do
      create(:issue, upvotes_count: 10, comments_count: 5, product: product)
      create(:issue, upvotes_count: 5, comments_count: 10, product: product)
    end

    context 'when sort params are not present' do
      let(:sort_params) { nil }

      it 'returns issues sorted by created_at desc' do
        expect(result.pluck(:created_at)).to eq result.pluck(:created_at).sort.reverse
      end
    end

    context 'when sorting by upvotes' do
      let(:sort_params) { { sort_by: 'upvotes', sort_direction: 'desc' } }

      it 'returns issues sorted by upvotes desc' do
        expect(result.pluck(:upvotes_count)).to eq [10, 5]
      end
    end

    context 'when sorting by comments' do
      let(:sort_params) { { sort_by: 'comments', sort_direction: 'desc' } }

      it 'returns issues sorted by comments desc' do
        expect(result.pluck(:comments_count)).to eq [10, 5]
      end
    end
  end
end
