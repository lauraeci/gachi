class AddReferenceToLoot < ActiveRecord::Migration[5.1]
  def change
    add_reference :loots, :loot, polymorphic: true
  end
end
