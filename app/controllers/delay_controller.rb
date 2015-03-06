require_relative 'base_controller'

module Slowwly
  class DelayController < BaseController
    respond_to_request = lambda do
      set_request_params
      log_request

      sleep request_params.delay_secs
      redirect request_params.url, response_code
    end

    get '/delay/?:delay?/url/*', &respond_to_request
    post '/delay/?:delay?/url/*', &respond_to_request

    private

    attr_reader :request_params

    def set_request_params
      @request_params ||= DelayRequest.new(
        delay: params[:delay],
        url: params[:splat].first
      )
    end

    def log_request
      logger.info "Handle #{request.request_method} request: #{request_params}"
    end

    def response_code
      request.request_method == "GET" ? 302 : 307
    end
  end
end
