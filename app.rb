require 'sinatra'
require 'sinatra/base'

Dir.glob('./app/{controllers,models}/*.rb').each { |file| require file }

module Slowwly
  class App < Sinatra::Application
    configure :production do
      # ...
    end

    configure :development, :test do
      set :raise_errors, true
      set :show_exceptions, true
    end

    use Slowwly::RootController
    use Slowwly::DelayController
  end
end
