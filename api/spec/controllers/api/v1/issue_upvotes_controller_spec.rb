require 'rails_helper'

RSpec.describe Api::V1::IssueUpvotesController, type: :request do
  describe 'POST #create' do
    let(:issue) { create(:issue) }
    let(:user) { create(:user, password: 'passwd', password_confirmation: 'passwd') }

    describe 'when user has not upvoted the issue' do
      before do
        access_token = sign_in(user, 'passwd')
        post(
          '/api/v1/issue_upvotes.json',
          params: { issue_uuid: issue.uuid },
          headers: { 'Authorization': "Bearer #{access_token}" }
        )
      end

      it 'returns a 201 status code' do
        expect(response.status).to eq(201)
      end

      it 'creates an issue upvote' do
        expect(IssueUpvote.count).to eq(1)
      end
    end

    describe 'when the user has already upvoted the issue' do
      before do
        create(:issue_upvote, issue:, user:)
        access_token = sign_in(user, 'passwd')
        post(
          '/api/v1/issue_upvotes.json',
          params: { issue_uuid: issue.uuid },
          headers: { 'Authorization': "Bearer #{access_token}" }
        )
      end

      it 'returns a 422 status code' do
        expect(response.status).to eq(422)
      end
    end
  end

  describe 'DELETE #destroy' do
    let(:issue) { create(:issue) }
    let(:user) { create(:user, password: 'passwd', password_confirmation: 'passwd') }

    describe 'when user has not upvoted the issue' do
      before do
        access_token = sign_in(user, 'passwd')
        delete(
          "/api/v1/issue_upvotes/#{issue.uuid}.json",
          headers: { 'Authorization': "Bearer #{access_token}" }
        )
      end

      it 'returns a 422 status code' do
        expect(response.status).to eq(422)
      end
    end

    describe 'when the user has already upvoted the issue' do
      before do
        create(:issue_upvote, issue:, user:)

        access_token = sign_in(user, 'passwd')
        delete(
          "/api/v1/issue_upvotes/#{issue.uuid}.json",
          headers: { 'Authorization': "Bearer #{access_token}" }
        )
      end

      it 'returns a 204 status code' do
        expect(response.status).to eq(204)
      end

      it 'deletes the issue upvote' do
        expect(IssueUpvote.count).to eq(0)
      end
    end
  end
end
