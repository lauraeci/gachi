class CreateCurrencyRates < ActiveRecord::Migration[5.1]
  def change
    create_table :currency_rates do |t|
      t.integer   :currency_id
      t.integer   :amount
      t.decimal   :rate, precision: 5, scale: 2
    end
  end
end
