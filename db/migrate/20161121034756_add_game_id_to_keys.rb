class AddGameIdToKeys < ActiveRecord::Migration[5.1]
  def change
    add_column :keys, :game_id, :integer
  end
end
