class AddRemoveColumnPictureFromLootSpecs < ActiveRecord::Migration[5.2]
  def change
    remove_column :loot_specs, :picture
  end
end
