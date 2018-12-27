require 'test_helper'

class LootCombinationResultSetsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @loot_combination_result_set = loot_combination_result_sets(:one)
  end

  test "should get index" do
    get loot_combination_result_sets_url, as: :json
    assert_response :success
  end

  test "should create loot_combination_result_set" do
    assert_difference('LootCombinationResultSet.count') do
      post loot_combination_result_sets_url, params: { loot_combination_result_set: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show loot_combination_result_set" do
    get loot_combination_result_set_url(@loot_combination_result_set), as: :json
    assert_response :success
  end

  test "should update loot_combination_result_set" do
    patch loot_combination_result_set_url(@loot_combination_result_set), params: { loot_combination_result_set: {  } }, as: :json
    assert_response 200
  end

  test "should destroy loot_combination_result_set" do
    assert_difference('LootCombinationResultSet.count', -1) do
      delete loot_combination_result_set_url(@loot_combination_result_set), as: :json
    end

    assert_response 204
  end
end
