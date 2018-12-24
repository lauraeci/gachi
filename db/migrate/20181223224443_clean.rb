class Clean < ActiveRecord::Migration[5.0]
  def change
    remove_column :loot_types, :image_url
    remove_column :lootspecs, :loot_type_id
    remove_column :lootspecs, :loot_type
    add_column :lootspecs, :picture, :string
  end
end
