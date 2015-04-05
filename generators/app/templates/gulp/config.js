var dest = "./.build";
var app = './app';
var node_modules = './node_modules';
var bower_components = './bower_components';

var url = require('url');
var proxy = require('proxy-middleware');

var ftpConfig = require('./.ftppass');

var proxyOptions = url.parse('http://www.adultswim.com/_default');
proxyOptions.route = '/_default';

module.exports = {
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
                node_modules + '/',
                bower_components + '/'
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
            node_modules + '/font-awesome/fonts/**' //add paths to other libraries if you add them
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
        dev: {
            host: ftpConfig.dev.host,
            user: ftpConfig.dev.username,
            pass: ftpConfig.dev.password,
            remotePath: '/dev/site'
        },
        staging: {
            host: ftpConfig.staging.host,
            user: ftpConfig.staging.username,
            key: ftpConfig.staging.keyLocation,
            remotePath: '/dev/site'
        },
        production: {
            host: ftpConfig.production.host,
            user: ftpConfig.production.username,
            key: ftpConfig.production.keyLocation,
            remotePath: '/dev/site'
        }
    }
};
