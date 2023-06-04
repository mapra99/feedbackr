require 'rails_helper'

RSpec.describe Api::V1::IssuesController, type: :request do
  describe 'GET #index' do
    let(:user) { create(:user, password: 'passwd', password_confirmation: 'passwd') }
    let(:product) { create(:product) }
    let(:product_slug) { product.slug }

    before do
      access_token = sign_in(user, 'passwd')
      create_list(:issue, 5, product:)

      get "/api/v1/products/#{product_slug}/issues.json", headers: { 'Authorization' => "Bearer #{access_token}" }
    end

    it 'returns http success' do
      expect(response).to have_http_status(:success)
    end

    describe 'when product_slug is not present' do
      let(:product_slug) { 'something' }

      it 'returns http not found' do
        expect(response).to have_http_status(:not_found)
      end
    end
  end
end
