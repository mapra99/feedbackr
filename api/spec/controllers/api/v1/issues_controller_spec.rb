require 'rails_helper'

RSpec.describe Api::V1::IssuesController, type: :controller do
  xdescribe 'GET #index' do
    let(:product) { create(:product) }
    let(:product_slug) { product.slug }

    before do
      create_list(:issue, 5, product:)

      get :index, params: { slug: product.slug }
    end

    it 'returns http success' do
      expect(response).to have_http_status(:success)
    end

    describe 'when product_slug is not present' do
      let(:product_slug) { nil }

      it 'returns http bad_request' do
        expect(response).to have_http_status(:bad_request)
      end
    end
  end
end
