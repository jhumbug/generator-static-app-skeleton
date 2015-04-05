var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var _ = require('lodash');

var key = require('keymaster');

var _defaultRouter = require('../router');

module.exports = Backbone.View.extend({
	el: "#content",

	template: require('../templates/content'),

    initialize: function() {
        this.render();

        this.Router = new _defaultRouter({ app: this });

        //pass view to this from router to render different content areas
        this.listenTo(this.Router, 'router:showView', _.bind(function (view) {
            this.swapContent(view);
        }, this));

        Backbone.history.start();

        key.setScope('app');
    },

    render: function() {
        this.$el.html(this.template());
    },

    swapContent: function (view) {
        view.render();
    }
});