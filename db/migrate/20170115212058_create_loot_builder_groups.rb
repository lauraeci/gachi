class CreateLootBuilderGroups < ActiveRecord::Migration[5.1]
  def change
    create_table :loot_builder_groups do |t|
      t.integer :loot_spec_id
      t.integer :count
      t.integer :total_time_mins
      t.integer :special_id
      t.string :special_type
      t.integer :builder_id
      t.integer :unlocked_at_lvl
      t.integer :unlocked_at_special_rules_id
      t.timestamps
    end
  end
end
