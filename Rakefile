# frozen_string_literal: true
begin
  require "rspec/core"
  require "rspec/core/rake_task"

  desc "Run all specs in spec directory (excluding plugin specs)"
  RSpec::Core::RakeTask.new(:spec)

  task default: :spec
rescue LoadError
  puts "Error loading rspec"
end
