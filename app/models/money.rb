class Money < ApplicationRecord
  include Comparable

  belongs_to :user
  belongs_to :currency
  belongs_to :game

  def in_currency(other_currency)

  end

  def <=> (other_money)
    amount <=> other_money.in_currency(currency).amount
  end
end
