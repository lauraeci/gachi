class RenameLootspecsToLootSpecs < ActiveRecord::Migration[5.0]
  def change
    rename_table :lootspecs, :loot_specs
    rename_column :loot_types, :lootspec_id, :loot_spec_id
    remove_column :loots, :lootspecs_id
    remove_column :loots, :loot_type
  end
end
