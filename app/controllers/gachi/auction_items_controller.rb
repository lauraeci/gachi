class Gachi::AuctionItemsController < ApplicationController
  before_action :set_auction_item, only: [:show, :update, :destroy]

  # GET /auction_items
  def index
    @auction_items = AuctionItem.all

    render json: @auction_items
  end

  # GET /auction_items/1
  def show
    render json: @auction_item
  end

  # POST /auction_items
  def create
    @auction_item = AuctionItem.new(auction_item_params)

    if @auction_item.save
      render json: @auction_item, status: :created, location: @auction_item
    else
      render json: @auction_item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /auction_items/1
  def update
    if @auction_item.update(auction_item_params)
      render json: @auction_item
    else
      render json: @auction_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /auction_items/1
  def destroy
    @auction_item.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_auction_item
      @auction_item = AuctionItem.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def auction_item_params
      params.fetch(:auction_item, {})
    end
end
