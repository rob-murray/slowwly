require_relative 'base_controller'
require 'byebug'
module Slowwly
  class DelayController < BaseController
    get '/delay/:delay/*' do |*args|
      set_request_params
      log_request

      sleep request_params.delay_secs
      redirect request_params.url
    end

    post '/delay/:delay/*' do |*args|
      set_request_params
      log_request

      sleep request_params.delay_secs
      redirect request_params.url, 307
    end

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
  end
end
