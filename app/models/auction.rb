class Auction < ApplicationRecord
  belongs_to :game
  has_many :bids

  def highest_bid(bid)
    highest_bid_id = bid.id
    save
  end
end
