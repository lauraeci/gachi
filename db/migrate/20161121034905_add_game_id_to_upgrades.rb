class AddGameIdToUpgrades < ActiveRecord::Migration[5.1]
  def change
    add_column :upgrades, :game_id, :integer
  end
end
