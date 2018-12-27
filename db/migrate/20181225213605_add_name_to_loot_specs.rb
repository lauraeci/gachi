class AddNameToLootSpecs < ActiveRecord::Migration[5.2]
  def change
    add_column :loot_specs, :name, :string
  end
end
