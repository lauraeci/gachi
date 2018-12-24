class Gachi::LootBuilderGroupsController < ApplicationController
  before_action :set_loot_builder_group, only: [:show, :update, :destroy]

  # GET /loot_builder_groups
  def index
    @loot_builder_groups = LootBuilderGroup.all

    render json: @loot_builder_groups
  end

  # GET /loot_builder_groups/1
  def show
    render json: @loot_builder_group
  end

  # POST /loot_builder_groups
  def create
    @loot_builder_group = LootBuilderGroup.new(loot_builder_group_params)

    if @loot_builder_group.save
      render json: @loot_builder_group, status: :created, location: @loot_builder_group
    else
      render json: @loot_builder_group.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /loot_builder_groups/1
  def update
    if @loot_builder_group.update(loot_builder_group_params)
      render json: @loot_builder_group
    else
      render json: @loot_builder_group.errors, status: :unprocessable_entity
    end
  end

  # DELETE /loot_builder_groups/1
  def destroy
    @loot_builder_group.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_loot_builder_group
      @loot_builder_group = LootBuilderGroup.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def loot_builder_group_params
      params.fetch(:loot_builder_group, {})
    end
end
