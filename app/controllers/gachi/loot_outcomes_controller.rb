class Gachi::LootOutcomesController < ApplicationController
  before_action :set_loot_outcome, only: [:show, :update, :destroy]

  # GET /loot_outcomes
  # GET /loot_outcomes.json
  def index
    @loot_outcomes = LootOutcome.all
  end

  # GET /loot_outcomes/1
  # GET /loot_outcomes/1.json
  def show
  end

  # POST /loot_outcomes
  # POST /loot_outcomes.json
  def create
    @loot_outcome = LootOutcome.new(loot_outcome_params)
    loot_combination_id = params[:loot_combination_id]
    @loot_outcome.generate_loot_outcome(loot_combination_id)
    logger.info("#{loot_combination_id}: #{@loot_outcome.loot_id}")

    if @loot_outcome.save
      render :show, status: :created, location: gachi_loot_outcomes_path(@loot_outcome)
    else
      render json: @loot_outcome.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /loot_outcomes/1
  # PATCH/PUT /loot_outcomes/1.json
  def update
    if @loot_outcome.update(loot_outcome_params)
      render :show, status: :ok, location: @loot_outcome
    else
      render json: @loot_outcome.errors, status: :unprocessable_entity
    end
  end

  # DELETE /loot_outcomes/1
  # DELETE /loot_outcomes/1.json
  def destroy
    @loot_outcome.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_loot_outcome
      @loot_outcome = LootOutcome.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def loot_outcome_params
      params.fetch(:loot_outcome, {})
    end
end
