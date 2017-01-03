class AddGameIdToRewards < ActiveRecord::Migration[5.1]
  def change
    add_column :rewards, :game_id, :integer
  end
end
