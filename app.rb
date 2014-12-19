require 'bundler/setup'

$LOAD_PATH << File.expand_path('../', __FILE__)

require 'sinatra/base'
require 'sinatra/reloader'
require 'sinatra/assetpack'

require 'haml'

module Backbone
  class App < Sinatra::Base
    register Sinatra::AssetPack
    assets do
      serve '/js', from: 'js'
      serve '/bower_components', from: 'bower_components'

      js :modernizr, [
        '/bower_components/modernizr/modernizr.js'
      ]

      js :libs, [
        '/bower_components/jquery/dist/jquery.js',
        '/bower_components/foundation/js/foundation.js'
      ]

      js :application, [
        '/js/app.js'
      ]

      js_compression :jsmin
    end

    get '/' do
      haml :index
    end
  end
end
