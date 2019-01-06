json.extract! loot_combination_result_set, :loot_id, :loot_combination_id, :id, :rarity, :created_at, :updated_at
json.url gachi_loot_combination_result_set_url(loot_combination_result_set, format: :json)
json.loot_image_url url_for(loot_combination_result_set.loot_image)