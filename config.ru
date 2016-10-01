# frozen_string_literal: true
require "rubygems"
require "bundler"
Bundler.require(:default, ENV["RACK_ENV"].to_sym)

require "./app"
require "./app/slowwly"

run Slowwly::App
