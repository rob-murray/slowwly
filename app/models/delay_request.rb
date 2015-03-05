require 'uri'
require_relative '../slowwly'

module Slowwly
  class DelayRequest
    include Virtus.model

    attribute :url, String
    attribute :delay, Integer, strict: true, default: Slowwly.default_delay

    def delay_secs
      delay / 1000
    end

    # this seems like an hack to use the default when coercion fails
    def delay=(value)
      super(value) rescue Slowwly.default_delay
    end

    def url=(value)
      return unless value
      escaped_url = URI.unescape(value)
      super escaped_url.sub(/:\//, '://')
    end
  end
end
