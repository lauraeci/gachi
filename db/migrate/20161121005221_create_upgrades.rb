class CreateUpgrades < ActiveRecord::Migration[5.1]
  def change
    create_table :upgrades do |t|
      t.integer :cost
      t.string :name

      t.timestamps
    end
  end
end
