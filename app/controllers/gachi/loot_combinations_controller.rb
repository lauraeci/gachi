class Gachi::LootCombinationsController < ApplicationController
  before_action :set_loot_combination, only: [:show, :update, :destroy]

  # GET /loot_combinations
  def index
    @loot_combinations = LootCombination.all
  end

  # GET /loot_combinations/1
  def show
  end

  # POST /loot_combinations
  def create
    @loot_combination = LootCombination.new(loot_combination_params)
    @loot_combination.combined_with_loot_id = params[:combined_with_loot_id]
    @loot_combination.loot_id = params[:loot_id]

    if @loot_combination.save
      render json: @loot_combination, status: :created, location: gachi_loot_combinations_url(@loot_combination)
    else
      render json: @loot_combination.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /loot_combinations/1
  def update
    if @loot_combination.update(loot_combination_params)
      render json: @loot_combination
    else
      render json: @loot_combination.errors, status: :unprocessable_entity
    end
  end

  # DELETE /loot_combinations/1
  def destroy
    @loot_combination.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_loot_combination
      @loot_combination = LootCombination.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def loot_combination_params
      params.fetch(:loot_combination, {})
    end
end
