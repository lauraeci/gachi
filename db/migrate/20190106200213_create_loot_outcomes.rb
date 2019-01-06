class CreateLootOutcomes < ActiveRecord::Migration[5.2]
  def change
    create_table :loot_outcomes do |t|
      t.integer :loot_id
      t.timestamps
    end
  end
end
