require_relative 'base_controller'

module Slowwly
  class DelayController < BaseController
    get '/delay/:delay/*' do |delay, _rest|
      request_params = DelayRequest.new(delay, params[:splat].first)
      log_request(request_params)

      sleep request_params.delay_secs
      redirect request_params.url
    end

    post '/delay/:delay/*' do |delay, _rest|
      request_params = DelayRequest.new(delay, params[:splat].first)
      log_request(request_params)

      sleep request_params.delay_secs
      redirect request_params.url, 307
    end

    private

    def log_request(request_params)
      logger.info "Handle #{request.request_method} request: #{request_params}"
    end
  end
end
