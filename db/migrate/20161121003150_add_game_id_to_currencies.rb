class AddGameIdToCurrencies < ActiveRecord::Migration[5.1]
  def change
    add_column :currencies, :game_id, :integer
  end
end
