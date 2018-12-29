json.extract! loot_spec, :id, :created_at, :updated_at
json.url gachi_loot_spec_url(loot_spec, format: :json)
json.image_url url_for(loot_spec.image) if loot_spec.image.attached?
