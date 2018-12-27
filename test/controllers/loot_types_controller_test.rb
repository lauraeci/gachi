require 'test_helper'

class LootTypesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @loot_type = loot_types(:one)
  end

  test "should get index" do
    get loot_types_url, as: :json
    assert_response :success
  end

  test "should create loot_type" do
    assert_difference('LootType.count') do
      post loot_types_url, params: { loot_type: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show loot_type" do
    get loot_type_url(@loot_type), as: :json
    assert_response :success
  end

  test "should update loot_type" do
    patch loot_type_url(@loot_type), params: { loot_type: {  } }, as: :json
    assert_response 200
  end

  test "should destroy loot_type" do
    assert_difference('LootType.count', -1) do
      delete loot_type_url(@loot_type), as: :json
    end

    assert_response 204
  end
end
