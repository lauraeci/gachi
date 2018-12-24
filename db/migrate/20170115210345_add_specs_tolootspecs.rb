class AddSpecsTolootspecs < ActiveRecord::Migration[5.1]
  def change
    add_column :lootspecs, :lvl, :integer
    add_column :lootspecs, :max_value, :integer
    add_column :lootspecs, :loot_builder_group_id, :integer
    add_column :lootspecs, :profit, :integer
    add_column :lootspecs, :used_in_id, :integer
    add_column :lootspecs, :unlocked_at_lvl, :integer
    add_column :lootspecs, :special, :boolean
    add_column :lootspecs, :special_loot_builder_group_id, :integer
  end
end
