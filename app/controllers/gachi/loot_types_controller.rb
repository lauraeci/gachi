class Gachi::LootTypesController < ApplicationController
  before_action :set_loot_type, only: [:show, :update, :destroy]

  # GET /loot_specs
  def index
    @loot_types = LootType.all

    render json: @loot_types
  end

  # GET /loot_specs/1
  def show
    render json: @loot_type
  end

  # POST /loot_specs
  def create
    @loot_type = LootType.new(loot_type_params)

    if @loot_type.save
      render json: @loot_type, status: :created, location: @loot_type
    else
      render json: @loot_type.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /loot_specs/1
  def update
    if @loot_type.update(loot_type_params)
      render json: @loot_type
    else
      render json: @loot_type.errors, status: :unprocessable_entity
    end
  end

  # DELETE /loot_specs/1
  def destroy
    @loot_type.destroy
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_loot_type
    @loot_type = LootType.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def loot_type_params
    params.fetch(:loot_type, {})
  end
end
