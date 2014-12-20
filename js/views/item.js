var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone');
Backbone.$ = $;

module.exports = ItemView = Backbone.View.extend({
  tagName: 'li',
  initialize: function() {
    _.bindAll(this, 'render');
  },
  render: function() {
    $(this.el).html('<span>'+this.model.get('part1')+' '+this.model.get('part2')+'</span>');
    return this;
  }
});
