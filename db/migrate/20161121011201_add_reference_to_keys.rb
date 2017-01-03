class AddReferenceToKeys < ActiveRecord::Migration[5.1]
  def change
    add_reference :keys, :loot, polymorphic: true
  end
end
