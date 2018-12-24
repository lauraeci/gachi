class Gachi::LootSpecsController < ApplicationController

  def index
    @loot_spec = LootSpec.all
    render json: @loot_spec, status: :ok
  end

  def show
    @loot_spec = LootSpec.find(params[:id])
    render json: @loot_spec, status: :ok
  end

  def create
    @loot_spec = LootSpec.new(loot_spec_params)
    @loot_spec.author = User.find(1)

    if @loot_spec.save
      render json: @loot_spec, status: :created
    else
      render status: :internal_server_error
    end
  end

  def update
    @loot_spec = LootSpec.find(params[:id])

    if @loot_spec.update(loot_spec_params)
      render json: @loot_spec, status: :created
    else
      render status: :internal_server_error
    end
  end

  def destroy
    @loot_spec = LootSpec.find(params[:id])
    @loot_spec.delete

    render status: :ok
  end

  private

  def loot_spec_params
    params.require(:lootSpec).permit(:name, :title, :body, :reference, :picture)
  end
end
