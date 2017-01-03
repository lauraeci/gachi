class Currency < ApplicationRecord
  belongs_to :game
  has_many :currency_rates
end
