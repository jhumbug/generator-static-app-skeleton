var Backbone = require('backbone');

var <%= camelCasedAppname %>Model = require('./models/<%= sluggedAppname %>');

module.exports = Backbone.Collection.extend({
    model: <%= camelCasedAppname %>Model,

    url: '',

    initialize: function() {
        this.on('reset', function (col) {
           
        });
    },

    parse: function(response, options)  {
        return response;
    }
});