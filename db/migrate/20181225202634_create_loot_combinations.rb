class CreateLootCombinations < ActiveRecord::Migration[5.2]
  def change
    create_table :loot_combinations do |t|
      t.integer :loot_combination_result_sets_id
      t.integer :loot_id
      t.timestamps
    end
  end
end
