class CreateAuctionItems < ActiveRecord::Migration[5.1]
  def change
    create_table :auction_items do |t|

      t.timestamps
    end
  end
end
