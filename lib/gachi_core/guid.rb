# require 'securerandom'
require 'uuidtools'

module GachiCore
  class Guid
    attribute_reader :guid

    def initialize
      @guid = UUIDTools::UUID.random_create
    end
  end
end