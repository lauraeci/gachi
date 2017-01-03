# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

game = Game.create()
currency = Currency.create(game: game, name: 'Gems')
hundred = CurrencyRate.create(currency: currency, amount: 100, rate: 0.99)
five_hundred = CurrencyRate.create(currency: currency, amount: 550, rate: 4.99)
twelve_hundred = CurrencyRate.create(currency: currency, amount: 1200, rate: 11.88)