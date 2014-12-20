var Backbone = require('backbone'),
  Item = require('../models/item');

module.exports = Items = Backbone.Collection.extend({
  model: Item
});
