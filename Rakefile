APP_FILE = 'app.rb'
APP_CLASS = 'App'

require 'sinatra/assetpack/rake'

namespace :build do
  desc 'browserify js'
  task :js do
    `browserify js/index.js > js/app.js`
  end

  desc 'compile sass'
  task :css do
    `bundle exec compass compile`
  end

  desc 'browserify js and compile sass'
  task :all => [:js, :css] do
  end

  desc 'build and stick around and watch for changes'
  task :watch do
    `watchify js/index.js -o js/app.js`
    `bundle exec compass watch`
  end
end
