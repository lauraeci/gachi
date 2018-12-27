require 'test_helper'

class LootCombinationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @loot_combination = loot_combinations(:one)
  end

  test "should get index" do
    get loot_combinations_url, as: :json
    assert_response :success
  end

  test "should create loot_combination" do
    assert_difference('LootCombination.count') do
      post loot_combinations_url, params: { loot_combination: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show loot_combination" do
    get loot_combination_url(@loot_combination), as: :json
    assert_response :success
  end

  test "should update loot_combination" do
    patch loot_combination_url(@loot_combination), params: { loot_combination: {  } }, as: :json
    assert_response 200
  end

  test "should destroy loot_combination" do
    assert_difference('LootCombination.count', -1) do
      delete loot_combination_url(@loot_combination), as: :json
    end

    assert_response 204
  end
end
