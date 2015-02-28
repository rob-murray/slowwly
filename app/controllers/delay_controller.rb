require_relative 'base_controller'

module Slowly
  class DelayController < BaseController
    get '/delay/:delay/*' do |delay, _rest|
      request = DelayRequest.new(delay, params[:splat].first)
      logger.info "Handle request: #{request}"

      sleep request.delay_secs
      redirect request.url
    end
  end
end
