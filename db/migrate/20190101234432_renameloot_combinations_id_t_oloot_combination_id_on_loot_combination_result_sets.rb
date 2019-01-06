class RenamelootCombinationsIdTOlootCombinationIdOnLootCombinationResultSets < ActiveRecord::Migration[5.2]
  def change
    rename_column :loot_combination_result_sets, :loot_combinations_id, :loot_combination_id
  end
end
