var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var <%= camelCasedAppname %>View = require('./views/<%= sluggedAppname %>');
var <%= camelCasedAppname %>Model = require('./models/<%= sluggedAppname %>');

module.exports = Backbone.Router.extend({

    routes: {
        '' : 'index'
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
        this.trigger('router:showView', new <%= camelCasedAppname %>View({ model: new <%= camelCasedAppname %>Model() }));
    }

});