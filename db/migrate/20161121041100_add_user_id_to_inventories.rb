class AddUserIdToInventories < ActiveRecord::Migration[5.1]
  def change
    add_column :inventories, :user_id, :integer
  end
end
