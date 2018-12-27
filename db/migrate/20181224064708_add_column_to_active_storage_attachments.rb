class AddColumnToActiveStorageAttachments < ActiveRecord::Migration[5.2]
  def change
    add_column :active_storage_attachments, :name, :string
    add_column :active_storage_attachments,  :record_id, :integer
    add_column :active_storage_attachments, :record_type, :string
  end
end
