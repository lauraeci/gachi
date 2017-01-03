class AddGameIdToSkills < ActiveRecord::Migration[5.1]
  def change
    add_column :skills, :game_id, :integer
  end
end
