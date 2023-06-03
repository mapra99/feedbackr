require 'rails_helper'

RSpec.describe Api::V1::ProfilesController, type: :request do
  describe 'GET #show' do
    let(:user) { create(:user, password: 'superpass', password_confirmation: 'superpass') }
    let(:expected_payload) do
      {
        'email' => user.email,
        'first_name' => user.first_name,
        'last_name' => user.last_name,
        'username' => user.username
      }
    end

    before do
      access_token = sign_in(user, 'superpass')
      get '/api/v1/profile.json', headers: { 'Authorization' => "Bearer #{access_token}" }
    end

    it 'returns 200 status' do
      expect(response).to be_successful
    end

    it 'returns the user object' do
      expect(JSON.parse(response.body)).to include(expected_payload)
    end
  end
end
