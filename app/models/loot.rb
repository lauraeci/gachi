class Loot < ApplicationRecord
  belongs_to :game
  has_many :lootspecs,  through: :loot_types
  has_one_attached :image
end
