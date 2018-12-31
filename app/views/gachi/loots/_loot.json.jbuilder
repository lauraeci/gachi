json.extract! loot, :id, :rarity_index, :name, :created_at, :updated_at
json.url gachi_loot_url(loot, format: :json)
json.image_url url_for(loot.image) if loot.image.attached?
