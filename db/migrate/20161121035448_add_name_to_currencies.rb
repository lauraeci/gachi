class AddNameToCurrencies < ActiveRecord::Migration[5.1]
  def change
    add_column :currencies, :name, :string
  end
end
