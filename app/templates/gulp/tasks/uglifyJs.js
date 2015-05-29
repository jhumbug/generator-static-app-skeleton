'use strict';

var gulp    = require('gulp');
var config  = require('../config').minify;
var size    = require('gulp-filesize');
var uglify = require('gulp-uglify');

gulp.task('uglifyJs', ['clean', 'browserify'], function() {
  return gulp.src(config.jsSrc)
    .pipe(uglify())
    .pipe(gulp.dest(config.jsDest))
    .pipe(size());
});
