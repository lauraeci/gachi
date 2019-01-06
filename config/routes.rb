Rails.application.routes.draw do


  namespace :gachi do
    resources :builders
    resources :loot_builder_groups
    resources :auction_items
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

    resources :loot_specs
    resources :games
    resources :loot_types
    resources :loots
    resources :loot_combination_result_sets
    resources :loot_combinations
    resources :loot_outcomes
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
