class CreateLoots < ActiveRecord::Migration[5.1]
  def change
    create_table :loots do |t|

      t.timestamps
    end
  end
end
