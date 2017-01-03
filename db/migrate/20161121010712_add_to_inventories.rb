class AddToInventories < ActiveRecord::Migration[5.1]
  def change
    add_reference :inventories, :item, polymorphic: true
  end
end
