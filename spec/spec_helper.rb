require 'rubygems'
require 'coveralls'
require 'codeclimate-test-reporter'

# force the environment to 'test'
ENV['RACK_ENV'] = 'test'

CodeClimate::TestReporter.start
Coveralls.wear!

Dir.glob('./spec/support/{helpers}/*.rb').each { |file| require file }

require_relative '../app'
require_relative '../app/slowwly'
Dir.glob('./app/{controllers,models}/*.rb').each { |file| require file }

require 'sinatra'
require 'rspec'
require 'rack/test'
require 'rspec-html-matchers'

# test environment stuff
Sinatra::Base.set :environment, :test
Sinatra::Base.set :run, false
Sinatra::Base.set :raise_errors, true
Sinatra::Base.set :logging, false

RSpec.configure do |config|
  config.run_all_when_everything_filtered = true
  config.filter_run :focus
  config.include Rack::Test::Methods
  config.include RSpecHtmlMatchers

  # Run specs in random order to surface order dependencies. If you find an
  # order dependency and want to debug it, you can fix the order by providing
  # the seed, which is printed after each run.
  #     --seed 1234
  config.order = 'random'
end

def app
  @app ||= Slowwly::App
end
