class AddToLoot < ActiveRecord::Migration[5.1]
  def change
    add_column :loots, :game_id, :integer
    add_column :loots, :name, :string
    add_column :loots, :lootspecs_id, :integer
  end
end
