class Game < ApplicationRecord
  has_one :currency
  has_many :auctions
  has_one :store
  has_many :events
  has_many :loots
  has_many :keys
  has_many :users
  has_many :rewards
  has_many :money
end
