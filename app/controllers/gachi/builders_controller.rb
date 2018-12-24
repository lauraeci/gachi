class Gachi::BuildersController < ApplicationController
  before_action :set_builder, only: [:show, :update, :destroy]

  # GET /builders
  def index
    @builders = Builder.all

    render json: @builders
  end

  # GET /builders/1
  def show
    render json: @builder
  end

  # POST /builders
  def create
    @builder = Builder.new(builder_params)

    if @builder.save
      render json: @builder, status: :created, location: @builder
    else
      render json: @builder.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /builders/1
  def update
    if @builder.update(builder_params)
      render json: @builder
    else
      render json: @builder.errors, status: :unprocessable_entity
    end
  end

  # DELETE /builders/1
  def destroy
    @builder.destroy
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_builder
    @builder = Builder.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def builder_params
    params.fetch(:builder, {})
  end
end
