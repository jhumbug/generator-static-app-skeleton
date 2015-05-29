'use strict';

var Backbone = require('backbone');
require('jquery');

var _ = require('lodash');
var key = require('keymaster');

$.<%= camelCasedAppname %> = require('../lib/<%= sluggedAppname %>');

module.exports = Backbone.View.extend({
	el: '#<%= sluggedAppname %>',
    
	template: require('../templates/<%= sluggedAppname %>'),

    initialize: function() {
        this.listenTo(this.model, 'change:<%= sluggedAppname %>', this.render); 

        _.bindAll(this, '<%= camelCasedAppname %>');

        key('enter', 'app', _.bind(this.<%= camelCasedAppname %>, this));

    },

    render: function() {
        console.log(this.model.toJSON());

        this.$el.html(this.template(this.model.toJSON()));

        return this;
    },

    <%= camelCasedAppname %>: function () {
       
    }
});