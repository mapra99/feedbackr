module Authenticatable
  def sign_in(user, password)
    post(
      '/api/v1/oauth/token',
      params: auth_params(user, password).to_json,
      headers: { 'Content-Type' => 'application/json' }
    )

    result = JSON.parse(response.body)
    result['access_token']
  end

  private

  def test_app
    @test_app ||= Doorkeeper::Application.find_or_create_by(
      name: 'Test App',
      redirect_uri: 'urn:ietf:wg:oauth:2.0:oob',
      scopes: %w[read write],
      uid: 'test_app_uid',
      secret: 'test_app_supersecret'
    )
  end

  def auth_params(user, password)
    {
      client_id: test_app.uid,
      client_secret: test_app.secret,
      grant_type: 'password',
      username: user.email,
      password:
    }
  end
end

RSpec.configure do |config|
  config.include Authenticatable, type: :request
end
