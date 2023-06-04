require 'rails_helper'

RSpec.describe Api::V1::CommentsController, type: :request do
  describe 'POST #create' do
    let(:user) { create(:user, password: 'passwd', password_confirmation: 'passwd') }
    let(:issue) { create(:issue) }

    let(:params) do
      {
        content: 'This is a comment',
        parent_uuid: issue.uuid,
        parent_type: 'Issue'
      }
    end

    before do
      access_token = sign_in(user, 'passwd')
      post '/api/v1/comments', params:, headers: { 'Authorization': "Bearer #{access_token}" }
    end

    it 'returns http success' do
      expect(response).to have_http_status(:success)
    end

    it 'creates a comment' do
      expect(issue.comments.count).to eq(1)
    end
  end
end
