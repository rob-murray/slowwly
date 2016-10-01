# frozen_string_literal: true
require "sinatra"
require "sinatra/base"
require "sinatra/content_for"
require "virtus"

Dir.glob("./app/{controllers,models}/*.rb").each { |file| require file }

module Slowwly
  class App < Sinatra::Application
    configure :production do
      # ...
    end

    configure :development, :test do
      set :raise_errors, true
      set :show_exceptions, true
    end

    configure do
      set :root, File.dirname(__FILE__)
      set :public_folder, proc { File.join(root, "public") }
    end

    use Slowwly::RootController
    use Slowwly::DelayController
  end
end
