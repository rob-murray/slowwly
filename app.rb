require 'sinatra'
require 'sinatra/base'

Dir.glob('./app/{controllers,models}/*.rb').each { |file| require file }

module Slowly
  class App < Sinatra::Application
    configure :production do
      # ...
    end

    configure :development, :test do
      set :raise_errors, true
      set :show_exceptions, true
    end

    use Slowly::RootController
    use Slowly::DelayController
  end
end
