class CreateActiveStorageBlobs < ActiveRecord::Migration[5.2]
  def change
    create_table :active_storage_blobs do |t|
      t.string :filename
      t.string :content_type
      t.text :metadata
      t.text :checksum
      t.integer :byte_size
    end
  end
end
