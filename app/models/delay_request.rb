require 'uri'

module Slowly
  class DelayRequest
    attr_reader :delay, :url

    def initialize(delay, url)
      parse_delay(delay)
      parse_url(url)
    end

    def delay_secs
      delay / 1000
    end

    def to_s
      "<#{self.class.name}: delay: #{delay}, url: #{url}>"
    end

    private

    def parse_delay(value)
      @delay = Integer(value) rescue Slowly.default_delay
    end

    def parse_url(url)
      escaped_url = ::URI.unescape(url)
      @url = escaped_url.sub(/:\//, '://')
    end
  end
end
