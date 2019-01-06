class LootCombinationResultSet < ApplicationRecord
  include ImageFinder

  belongs_to :loot_combination
  has_one :loot

  def loot_image
    image_for(self.loot_id)
  end
end
