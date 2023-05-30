Rails.application.routes.draw do
  use_doorkeeper scope: 'api/v1/oauth'
  devise_for :users, path: 'api/v1/users'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1, defaults: { format: :json } do
      resource :health, only: [:show]
      resource :profile, only: [:show]
    end
  end
end
