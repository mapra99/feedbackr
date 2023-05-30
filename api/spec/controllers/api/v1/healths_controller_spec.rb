require 'rails_helper'

RSpec.describe Api::V1::HealthsController, type: :controller do
  describe 'GET #show' do
    before do
      get :show
    end

    it 'returns http success' do
      expect(response).to have_http_status(:success)
    end

    it 'returns the expected JSON' do
      expect(response.body).to eq({ status: 'ok' }.to_json)
    end
  end
end
