# Based on Foundation Compass Template

Fancy foundation goodness, plus sinatra for the server and backbone on the frontend

## Requirements

  * Ruby 1.9+
  * [Node.js](http://nodejs.org)
  * [compass](http://compass-style.org/): `gem install compass`
  * [bower](http://bower.io): `npm install bower -g`

## Quickstart

Bower handles updating foundation.
Compass compiles styles.
Browserify compiles js other than foundation.js and jquery, which are included via browserify-shim. Most js should be installed via npm if possible (for sanity). If you can't, then shim it.

npm install directory and all javascript outside of foundation and jquery are installed into the js folder.

Check out the rake tasks for all of your compiling needs:

```bash
bundle exec rake -T
```

Sinatra-assetpack is used, as well, but that seems to work fairly transparently.

To start up a server run:

```bash
bundle exec rackup
```

## Upgrading

If you'd like to upgrade to a newer version of Foundation down the road just run:

```bash
bower update
```

To upgrade gems and other ruby goodies:

```bash
bundle update
```

## TODO

Clean up the directory structure
Set up app.js to compile into the public folder
