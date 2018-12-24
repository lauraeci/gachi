require 'test_helper'

class BuildersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @builder = builders(:one)
  end

  test "should get index" do
    get builders_url, as: :json
    assert_response :success
  end

  test "should create builder" do
    assert_difference('Builder.count') do
      post builders_url, params: { builder: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show builder" do
    get builder_url(@builder), as: :json
    assert_response :success
  end

  test "should update builder" do
    patch builder_url(@builder), params: { builder: {  } }, as: :json
    assert_response 200
  end

  test "should destroy builder" do
    assert_difference('Builder.count', -1) do
      delete builder_url(@builder), as: :json
    end

    assert_response 204
  end
end
