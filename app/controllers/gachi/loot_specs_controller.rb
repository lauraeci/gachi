class Gachi::LootSpecsController < ApplicationController
  before_action :set_loot_spec, only: [:show, :update, :destroy]

  # GET /lootSpecs
  def index
    @loot_specs = LootSpec.all

    render json: @loot_specs
  end

  # GET /lootSpecs/1
  def show
    render json: @loot_spec
  end

  # POST /lootSpecs
  def create
    @loot_spec = LootSpec.new(loot_spec_params)

    if @loot_spec.save
      render json: @loot_spec, status: :created, location: gachi_loot_specs_url(@loot_spec)
    else
      render json: @loot_spec.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /lootSpecs/1
  def update
    if @loot_spec.update(loot_spec_params)
      render json: @loot_spec
    else
      render json: @loot_spec.errors, status: :unprocessable_entity
    end
  end

  # DELETE /lootSpecs/1
  def destroy
    @loot_spec.destroy
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_loot_spec
    @loot_spec = LootSpec.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def loot_spec_params
    params.fetch(:loot_spec, {}).permit(:name, :lvl)
  end
end
