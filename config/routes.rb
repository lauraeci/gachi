Rails.application.routes.draw do
  post 'auth_user' => 'authentication#authenticate_user'
  devise_for :users
  resources :users

  namespace :api do
    resource :auctions do
      resources :bids do
        resources :retractions
      end
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
