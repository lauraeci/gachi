require 'test_helper'

class LootBuilderGroupsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @loot_builder_group = loot_builder_groups(:one)
  end

  test "should get index" do
    get loot_builder_groups_url, as: :json
    assert_response :success
  end

  test "should create loot_builder_group" do
    assert_difference('LootBuilderGroup.count') do
      post loot_builder_groups_url, params: { loot_builder_group: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show loot_builder_group" do
    get loot_builder_group_url(@loot_builder_group), as: :json
    assert_response :success
  end

  test "should update loot_builder_group" do
    patch loot_builder_group_url(@loot_builder_group), params: { loot_builder_group: {  } }, as: :json
    assert_response 200
  end

  test "should destroy loot_builder_group" do
    assert_difference('LootBuilderGroup.count', -1) do
      delete loot_builder_group_url(@loot_builder_group), as: :json
    end

    assert_response 204
  end
end
