require_relative 'base_controller'

module Slowly
  class RootController < BaseController
    get '/' do
      erb :root
    end
  end
end
