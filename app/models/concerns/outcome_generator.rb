module OutcomeGenerator
  include ActiveSupport::Concern

  def generate_random_loot(loot_combination_id)
    n = Random.new
    random_roll = n.rand(100)

    logger.info "Random Roll: " + random_roll.to_s

    result_loot = nil

    l = LootCombination.find_by_id loot_combination_id

    return nil unless l

    result_set = l.loot_combination_result_sets

    bins = []

    bins << {loot_id: result_set.first.loot_id, value: 0}

    if random_roll == 0
      return result_set.first.loot_id
    end

    sum = 0
    result_set.each do |r|
      sum += r.rarity
      bins << {loot_id: r.loot_id, value: sum}
    end

    if sum != 100
      raise "Loot combination results sets rarity must sum up to 100"
    end

    last = bins.last
    bins << {loot_id: last[:loot_id], value: 100}

    logger.info bins

    bins.each_with_index do |bin, index|
      if index === bins.length
        boundary = bins.length
      else
        boundary = index + 1
      end

      logger.info bin

      result_loot = is_in_bin(random_roll, bin, bins, boundary, index)
      return result_loot if result_loot
    end

    return result_loot
  end

  private

  def is_in_bin(random_roll, bin, bins, boundary, index)
    loot_id = nil
    lower_bound = bin[:value]
    upper_bound = bins[boundary][:value]

    if random_roll > lower_bound && random_roll <= upper_bound
      loot_id = bins[index + 1][:loot_id]
    end

    puts "#{lower_bound} > #{random_roll} <= #{upper_bound} : #{loot_id}"
    return loot_id
  end
end