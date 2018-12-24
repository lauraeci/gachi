class AddlootIdtolootType < ActiveRecord::Migration[5.0]
  def change
    add_column :loot_types, :loot_id, :integer
  end
end
