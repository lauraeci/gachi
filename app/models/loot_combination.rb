class LootCombination < ApplicationRecord
  include ImageFinder
  has_many :loot_combination_result_sets

  def loot_image
    image_for(self.loot_id)
  end

  def combined_with_loot_image
    image_for(self.combined_with_loot_id)
  end
end
