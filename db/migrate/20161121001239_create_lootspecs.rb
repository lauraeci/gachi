class CreateLootspecs < ActiveRecord::Migration[5.1]
  def change
    create_table :lootspecs do |t|
      t.integer :loot_type_id
      t.string :loot_type
      t.decimal :rarity

      t.timestamps
    end
  end
end
