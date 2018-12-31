class AddCombinedWithLootIdToLootCombinations < ActiveRecord::Migration[5.2]
  def change
    add_column :loot_combinations, :combined_with_loot_id, :integer
    remove_column :loot_combinations, :loot_combination_result_sets_id, :integer
  end
end
