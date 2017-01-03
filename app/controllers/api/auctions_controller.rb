class Api::AuctionsController < ApplicationController

  before_action :authenticate_request!

  def index
    @auctions = Auction.all
    render json: @actions, status: :success
  end

  def show
    @auction = Action.find(params[:id])
  end

  def create
    if @auction.save
      render json: @auction, status: :success
    end
  end
end