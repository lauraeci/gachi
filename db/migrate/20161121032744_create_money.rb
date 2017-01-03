class CreateMoney < ActiveRecord::Migration[5.1]
  def change
    create_table :money do |t|
      t.integer :amount
      t.integer :currency_id
      t.integer :user_id
      t.integer :game_id

      t.timestamps
    end
  end
end
