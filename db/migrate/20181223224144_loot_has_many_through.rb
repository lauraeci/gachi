class LootHasManyThrough < ActiveRecord::Migration[5.0]
  def change
    add_column :loot_types, :loot_id, :integer
    add_column :loot_types, :lootspec_id, :integer
  end
end
