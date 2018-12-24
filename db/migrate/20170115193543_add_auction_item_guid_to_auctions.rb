class AddAuctionItemGuidToAuctions < ActiveRecord::Migration[5.1]
  def change
    add_column :auctions, :auction_item_guuid, :string
  end
end
