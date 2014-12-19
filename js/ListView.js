var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone');

Backbone.$ = $;

var ListView = Backbone.View.extend({
  el: $('body'),

  initialize: function() {
    _.bindAll(this, 'render');
    this.render();
  },

  render: function() {
    $(this.el).append("<ul><li>hello world</li></ul>");
  }

});

module.exports = ListView;
