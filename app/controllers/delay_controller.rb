require_relative 'base_controller'

module Slowwly
  class DelayController < BaseController
    get '/delay/:delay/*' do |delay, _rest|
      set_request_params(delay)
      log_request(request_params)

      sleep request_params.delay_secs
      redirect request_params.url
    end

    post '/delay/:delay/*' do |delay, _rest|
      set_request_params(delay)
      log_request(request_params)

      sleep request_params.delay_secs
      redirect request_params.url, 307
    end

    private

    attr_reader :request_params

    def set_request_params(delay)
      @request_params ||= DelayRequest.new(
        delay: delay,
        url: params[:splat].first
      )
    end

    def log_request(request_params)
      logger.info "Handle #{request.request_method} request: #{request_params}"
    end
  end
end
