require 'sprockets'
require 'sprockets/sassc_processor'

project_root = File.expand_path(File.dirname(__FILE__))
assets = Sprockets::Environment.new(project_root) do |env|
  env.logger = Logger.new(STDOUT)
  env.register_transformer 'text/sass', 'text/css', Sprockets::SasscProcessor.new
  env.register_transformer 'text/scss', 'text/css', Sprockets::ScsscProcessor.new
end

assets.append_path(File.join(project_root, 'stylesheets'))

#puts assets.find_asset('application.css')
#puts assets.find_asset('reset.css')
#puts assets.find_asset('base.css')
puts assets.find_asset('base2.css')
