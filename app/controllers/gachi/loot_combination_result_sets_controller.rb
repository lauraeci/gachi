class Gachi::LootCombinationResultSetsController < ApplicationController
  before_action :set_loot_combination_result_set, only: [:show, :update, :destroy]

  # GET /loot_combination_result_sets
  def index
    @loot_combination_result_sets = LootCombinationResultSet.all
  end

  # GET /loot_combination_result_sets/1
  def show
  end

  # POST /loot_combination_result_sets
  def create
    @loot_combination_result_set = LootCombinationResultSet.new(loot_combination_result_set_params)
    @loot_combination_result_set.rarity = params[:rarity]
    @loot_combination_result_set.loot_combination_id = params[:loot_combination_id]
    @loot_combination_result_set.loot_id = params[:loot_id]

    if @loot_combination_result_set.save
      render json: @loot_combination_result_set, status: :created, location: gachi_loot_combination_result_set_path(@loot_combination_result_set)
    else
      render json: @loot_combination_result_set.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /loot_combination_result_sets/1
  def update
    if @loot_combination_result_set.update(loot_combination_result_set_params)
      render json: @loot_combination_result_set
    else
      render json: @loot_combination_result_set.errors, status: :unprocessable_entity
    end
  end

  # DELETE /loot_combination_result_sets/1
  def destroy
    @loot_combination_result_set.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_loot_combination_result_set
      @loot_combination_result_set = LootCombinationResultSet.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def loot_combination_result_set_params
      params.fetch(:loot_combination_result_set, {})
    end
end
