class CreateBuilders < ActiveRecord::Migration[5.1]
  def change
    create_table :builders do |t|
      t.integer :builder_limit
      t.integer :loot_slot_count
      t.string :name
      t.string :description
      t.integer :unlocked_at_lvl
      t.integer :unlocked_at_special_rules_id
      t.timestamps
    end
  end
end
