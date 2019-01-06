module ImageFinder
  include ActiveSupport::Concern

  def image_for(loot_id)
    loot = Loot.find_by_id loot_id
    return loot.image if loot
    return ''
  end
end