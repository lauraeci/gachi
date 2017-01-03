class AmountToBids < ActiveRecord::Migration[5.1]
  def change
    add_column :bids, :user_id, :integer
    add_column :bids, :amount, :decimal, precision: 5, scale: 2
  end
end
