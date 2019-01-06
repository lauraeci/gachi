json.extract! loot_combination, :id, :loot_id, :combined_with_loot_id, :created_at, :updated_at
json.url gachi_loot_combination_url(loot_combination, format: :json)
json.loot_image_url url_for(loot_combination.loot_image)
json.combined_with_loot_image_url url_for(loot_combination.combined_with_loot_image)