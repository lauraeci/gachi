class RemoveLootIdFromLoot < ActiveRecord::Migration[5.0]
  def change
    remove_column :loots, :loot_id
  end
end
