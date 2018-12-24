class AddRarityColumnToLoots < ActiveRecord::Migration[5.0]
  def change
    add_column :loots, :rarity_index, :integer
  end
end
