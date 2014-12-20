var Backbone = require('backbone');

module.exports = Item = Backbone.Model.extend({
  defaults: {
    part1: 'hello',
    part2: 'world'
  }
});
