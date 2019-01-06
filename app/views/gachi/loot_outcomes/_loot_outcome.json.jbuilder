json.extract! loot_outcome, :id, :loot_id, :created_at, :updated_at
json.url gachi_loot_outcome_url(loot_outcome, format: :json)
json.loot_image_url url_for(loot_outcome.loot_image)
