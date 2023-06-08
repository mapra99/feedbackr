require 'rails_helper'

RSpec.describe Api::V1::IssuesController, type: :request do
  let(:user) { create(:user, password: 'passwd', password_confirmation: 'passwd') }
  let(:product) { create(:product) }

  describe 'GET #index' do
    let(:product_slug) { product.slug }

    before do
      access_token = sign_in(user, 'passwd')
      create_list(:issue, 5, product:)

      get "/api/v1/issues.json?product_slug=#{product_slug}", headers: { 'Authorization' => "Bearer #{access_token}" }
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

  describe 'GET #show' do
    let(:issue) { create(:issue, product:) }

    before do
      access_token = sign_in(user, 'passwd')
      get(
        "/api/v1/issues/#{issue.uuid}.json",
        headers: { 'Authorization' => "Bearer #{access_token}" }
      )
    end

    it 'returns http success' do
      expect(response).to have_http_status(:success)
    end
  end
end
