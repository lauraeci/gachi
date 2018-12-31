json.extract! game, :id, :name, :created_at, :updated_at
json.url gachi_game_url(game, format: :json)
