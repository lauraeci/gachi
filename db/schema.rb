# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_12_25_213754) do

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name"
    t.integer "record_id"
    t.string "record_type"
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "filename"
    t.string "content_type"
    t.text "metadata"
    t.text "checksum"
    t.integer "byte_size"
  end

  create_table "auction_items", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "auctions", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "game_id"
    t.datetime "started_at"
    t.datetime "ended_at"
    t.integer "highest_bid_id"
    t.string "auction_item_guuid"
  end

  create_table "bids", force: :cascade do |t|
    t.integer "auction_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.decimal "amount", precision: 5, scale: 2
    t.string "auction_item_guuid"
  end

  create_table "builders", force: :cascade do |t|
    t.integer "builder_limit"
    t.integer "loot_slot_count"
    t.string "name"
    t.string "description"
    t.integer "unlocked_at_lvl"
    t.integer "unlocked_at_special_rules_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "currencies", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "game_id"
    t.string "name"
  end

  create_table "currency_rates", force: :cascade do |t|
    t.integer "currency_id"
    t.integer "amount"
    t.decimal "rate", precision: 5, scale: 2
  end

  create_table "events", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "game_id"
  end

  create_table "games", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "inventories", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "item_type"
    t.integer "item_id"
    t.integer "user_id"
    t.index ["item_type", "item_id"], name: "index_inventories_on_item_type_and_item_id"
  end

  create_table "keys", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "loot_type"
    t.integer "loot_id"
    t.integer "game_id"
    t.index ["loot_type", "loot_id"], name: "index_keys_on_loot_type_and_loot_id"
  end

  create_table "loot_builder_groups", force: :cascade do |t|
    t.integer "loot_spec_id"
    t.integer "count"
    t.integer "total_time_mins"
    t.integer "special_id"
    t.string "special_type"
    t.integer "builder_id"
    t.integer "unlocked_at_lvl"
    t.integer "unlocked_at_special_rules_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "loot_combination_result_sets", force: :cascade do |t|
    t.integer "loot_combinations_id"
    t.integer "rarity"
    t.integer "cost"
    t.integer "loot_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "loot_combinations", force: :cascade do |t|
    t.integer "loot_combination_result_sets_id"
    t.integer "loot_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "lootSpecs", force: :cascade do |t|
    t.decimal "rarity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "lvl"
    t.integer "max_value"
    t.integer "loot_builder_group_id"
    t.integer "profit"
    t.integer "used_in_id"
    t.integer "unlocked_at_lvl"
    t.boolean "special"
    t.integer "special_loot_builder_group_id"
    t.string "name"
  end

  create_table "loot_types", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.integer "loot_id"
    t.integer "loot_spec_id"
  end

  create_table "loots", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "game_id"
    t.string "name"
    t.integer "rarity_index"
  end

  create_table "money", force: :cascade do |t|
    t.integer "amount"
    t.integer "currency_id"
    t.integer "user_id"
    t.integer "game_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "rewards", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "game_id"
  end

  create_table "skills", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "game_id"
  end

  create_table "stores", force: :cascade do |t|
    t.integer "game_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tiers", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "upgrades", force: :cascade do |t|
    t.integer "cost"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "game_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "game_id"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
