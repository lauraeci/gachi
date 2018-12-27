require 'test_helper'

class LootSpecsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @loot_spec = loot_specs(:one)
  end

  test "should get index" do
    get loot_specs_url, as: :json
    assert_response :success
  end

  test "should create loot_spec" do
    assert_difference('LootSpec.count') do
      post loot_specs_url, params: { loot_spec: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show loot_spec" do
    get loot_spec_url(@loot_spec), as: :json
    assert_response :success
  end

  test "should update loot_spec" do
    patch loot_spec_url(@loot_spec), params: { loot_spec: {  } }, as: :json
    assert_response 200
  end

  test "should destroy loot_spec" do
    assert_difference('LootSpec.count', -1) do
      delete loot_spec_url(@loot_spec), as: :json
    end

    assert_response 204
  end
end
