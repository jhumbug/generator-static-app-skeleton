var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var _defaultView = require('./views/_default');
var _defaultModel = require('./models/_default');

module.exports = Backbone.Router.extend({

    routes: {
        ''                		: 'index'
    },


    initialize: function () {
        this.history = [];
        this.on('route', function (name, params) {
            var route = {
                name: name,
                params: params,
                fragment: Backbone.history.fragment
            };
            this.history.push(route);
        }, this);
    },

    /*==============================
    =            Routes            =
    ==============================*/

    // # (/)
    index: function () {
        this.trigger('router:showView', new _defaultView({ model: new _defaultModel() }));
    }

});