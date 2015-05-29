'use strict';

var gulp = require('gulp');
var del = require('del');
var argv = require('yargs').argv;
var config = require('../config');
var gutil = require('gulp-util'); 

gulp.task('clean', function (cb) {
	if (argv.clean === true || argv.c) {
		del([
		    config.dest + '/**' //matches everything
		], cb);
	} else {
		gutil.log(gutil.colors.yellow('Exiting without cleaning.'), '(run gulp -c to clean before building)');
		cb();
	}
});
