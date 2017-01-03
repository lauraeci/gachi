class AddStartedAtAndEndedAtToAuctions < ActiveRecord::Migration[5.1]
  def change
    add_column :auctions, :started_at, :datetime
    add_column :auctions, :ended_at, :datetime
    add_column :auctions, :highest_bid_id, :integer
  end
end
