class Api::BidsController < ApplicationController

  before_action :authenticate_request!

  def index
    @bids = Bid.all
  end


  # GET /bids/new
  def new
    @bid = auction.bids.new
  end

  # POST /bids
  # POST /bids.json
  def create
    @bid = auction.bids.new(bid_params)
    @bid.user = current_user

    is_max_bid = @bid.max_bid?

    if @bid.save
      render :show, status: :created, json: (@bid.attributes.merge('highest_bid' => is_max_bid)).to_json
    else
      render json: @bid.errors, status: :unprocessable_entity
    end
  end

  protected

  def auction
    @game = current_user.game
    @auction ||= Auction.where("DATE(?) BETWEEN DATE(started_at) AND DATE(ended_at)", Date.today).where(game_id: @game.id).first
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def bid_params
    params.permit(:amount)
  end
end