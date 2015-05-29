'use strict';

var gulp      = require('gulp');
var config    = require('../config').minify;
var minifyCSS = require('gulp-minify-css');
var size      = require('gulp-filesize');

gulp.task('minifyCss', ['less'], function() {
  return gulp.src(config.cssSrc)
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest(config.cssDest))
    .pipe(size());
})
