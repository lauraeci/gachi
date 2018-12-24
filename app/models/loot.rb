class Loot < ApplicationRecord
  belongs_to :game
  has_many :lootspecs,  through: :loot_types
end
