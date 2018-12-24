class AddToLootTypes < ActiveRecord::Migration[5.0]
  def change
    add_column :loot_types, :image_url, :string
    add_column :loot_types, :name, :string
  end
end
