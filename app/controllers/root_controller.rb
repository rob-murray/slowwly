require_relative 'base_controller'

module Slowwly
  class RootController < BaseController
    get '/' do
      erb :root
    end
  end
end
