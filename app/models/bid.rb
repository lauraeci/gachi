class Bid < ApplicationRecord
  belongs_to :auction
  belongs_to :user

  def max_bid?
    auction.bids.maximum(:amount)
  end
end
