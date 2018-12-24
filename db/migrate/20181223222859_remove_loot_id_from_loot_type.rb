class RemoveLootIdFromLootType < ActiveRecord::Migration[5.0]
  def change
    remove_column :loot_types, :loot_id, :integer
  end
end
