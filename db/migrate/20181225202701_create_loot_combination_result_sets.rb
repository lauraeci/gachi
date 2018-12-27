class CreateLootCombinationResultSets < ActiveRecord::Migration[5.2]
  def change
    create_table :loot_combination_result_sets do |t|
      t.integer :loot_combinations_id
      t.integer :rarity
      t.integer :cost
      t.integer :loot_id
      t.timestamps
    end
  end
end
