require 'rails_helper'

RSpec.describe Api::V1::ProductsController, type: :controller do
  xdescribe 'GET #show' do
    let(:product) { create(:product, name: 'My Product') }
    let(:response_payload) { JSON.parse(response.body) }
    let(:expected_payload) do
      {
        name: 'My Product',
        slug: 'my-product'
      }
    end

    before do
      get :show, params: { slug: product.slug }
    end

    it 'returns http success' do
      expect(response).to have_http_status(:success)
    end

    it 'returns the expected JSON' do
      expect(response_payload).to eq(expected_payload)
    end
  end
end
