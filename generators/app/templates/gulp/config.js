var dest = './.build';
var app = './app';
var nodeModules = './node_modules';
var bowerComponents = './bower_components';

var _ = require('lodash');

var url = require('url');
var proxy = require('proxy-middleware');

var ftpInfo = null;
try { ftpInfo = require('./.ftppass'); } catch (e) { } 

var proxyOptions = url.parse('http://www.adultswim.com/<%= sluggedAppname %>');
proxyOptions.route = '/<%= sluggedAppname %>';

var config = {
    browserSync: {
        server: {
            middleware: [proxy(proxyOptions)],
            // Serve up our build folder
            baseDir: dest
        },
        port: 8080
    },
    less: {
        src: app + "/styles/app.less",
        watchSrc: app + "/styles/**/*.less",
        dest: dest + "/css/",
        settings: {
            paths: [
                app + '/styles/',
                nodeModules + '/',
                bowerComponents + '/'
            ]
        }
    },
    images: {
        src: app + "/images/**",
        dest: dest + "/images"
    },
    fonts: {
        src: [
            app + "/fonts/**",
            nodeModules + '/font-awesome/fonts/**' //add paths to other libraries if you add them
        ],
        dest: dest + "/fonts"
    },
    markup: {
        src: app + "/index.html",
        dest: dest
    },
    browserify: {
        // A separate bundle will be generated for each
        // bundle config in the list below
        bundleConfigs: [{
            entries: app + '/scripts/app.js',
            dest: dest,
            outputName: 'js/app.js',
            // Additional file extentions to make optional
            extensions: ['.ejs'],
            // list of modules to make require-able externally
            // require: ['jquery', 'lodash', 'keymaster']
        }]
    },
    minify: {
        cssSrc: dest + '/css/*.css',
        jsSrc: dest + '/js/*.js',
        cssDest: dest + '/css/',
        jsDest: dest + '/js/'
    },
    deploy: {
        src: dest + '/**',
        dev: {},
        staging: {},
        production: {}
    }
};

if (ftpInfo) {
    var ftpConfig = {
        deploy: {
            src: dest + '/**',
            dev: {
                host: ftpInfo.dev.host,
                user: ftpInfo.dev.username,
                pass: ftpInfo.dev.password,
                remotePath: '/dev/site'
            },
            staging: {
                host: ftpInfo.staging.host,
                user: ftpInfo.staging.username,
                key: ftpInfo.staging.keyLocation,
                remotePath: '/dev/site'
            },
            production: {
                host: ftpInfo.production.host,
                user: ftpInfo.production.username,
                key: ftpInfo.production.keyLocation,
                remotePath: '/dev/site'
            }
        }
    };

    config = _.extend({}, config, ftpConfig);
}

module.exports = config;