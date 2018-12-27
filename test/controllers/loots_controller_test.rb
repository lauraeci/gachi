require 'test_helper'

class LootsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @loot = loots(:one)
  end

  test "should get index" do
    get loots_url, as: :json
    assert_response :success
  end

  test "should create loot" do
    assert_difference('Loot.count') do
      post loots_url, params: { loot: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show loot" do
    get loot_url(@loot), as: :json
    assert_response :success
  end

  test "should update loot" do
    patch loot_url(@loot), params: { loot: {  } }, as: :json
    assert_response 200
  end

  test "should destroy loot" do
    assert_difference('Loot.count', -1) do
      delete loot_url(@loot), as: :json
    end

    assert_response 204
  end
end
