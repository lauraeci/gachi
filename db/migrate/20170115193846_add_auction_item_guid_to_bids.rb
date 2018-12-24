class AddAuctionItemGuidToBids < ActiveRecord::Migration[5.1]
  def change
    add_column :bids, :auction_item_guuid, :string
  end
end
