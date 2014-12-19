APP_FILE = 'app.rb'
APP_CLASS = 'App'

require 'sinatra/assetpack/rake'

desc 'browserify js and compile sass'
task :build do
  `browserify js/index.js > js/app.js`
  `bundle exec compass compile`
end

desc 'build and stick around and watch for changes'
task :watch do
  `watchify js/index.js -o js/app.js`
  `bundle exec compass watch`
end
