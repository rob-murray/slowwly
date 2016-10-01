# frozen_string_literal: true
require "sinatra"

module Slowwly
  class BaseController < Sinatra::Base
    helpers Sinatra::ContentFor

    configure do
      set :views, "app/views"
      enable :logging
    end

    helpers do
      include Rack::Utils

      alias_method :h, :escape_html

      def render_partial(name, locals = {})
        erb "partials/_#{name}".to_sym, layout: false, locals: locals
      end

      def base_url
        @base_url ||= "#{request.env['rack.url_scheme']}://#{request.env['HTTP_HOST']}"
      end

      def production?
        ENV["RACK_ENV"] == "production"
      end
    end
  end
end
