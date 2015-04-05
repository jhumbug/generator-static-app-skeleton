var Backbone = require('backbone');
var $ = require('jquery');

var _ = require('lodash');
var key = require('keymaster');

$._default = require('../lib/_default');

module.exports = Backbone.View.extend({
	el: "#_default",
    
	template: require('../templates/_default'),

    initialize: function() {
        var self = this;

        this.listenTo(this.model, 'change:_default', this.render); 

        _.bindAll(this, '_default');

        key('enter', 'app', _.bind(this._default, this));

    },

    render: function() {
        console.log(this.model.toJSON());

        this.$el.html(this.template(this.model.toJSON()));

        return this;
    },

    _default: function () {
       
    }
});