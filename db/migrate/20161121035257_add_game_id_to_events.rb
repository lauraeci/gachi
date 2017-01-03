class AddGameIdToEvents < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :game_id, :integer
  end
end
