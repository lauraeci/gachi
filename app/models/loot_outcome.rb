class LootOutcome < ApplicationRecord
  include ImageFinder
  include OutcomeGenerator

  def loot_image
    image_for(self.loot_id)
  end

  def generate_loot_outcome(loot_combination_id)
    self.loot_id = generate_random_loot(loot_combination_id)
  end
end
