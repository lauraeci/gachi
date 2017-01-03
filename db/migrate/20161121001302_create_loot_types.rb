class CreateLootTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :loot_types do |t|

      t.timestamps
    end
  end
end
