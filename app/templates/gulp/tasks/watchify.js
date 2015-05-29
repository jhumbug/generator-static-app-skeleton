'use strict';

var gulp           = require('gulp');
var browserifyTask = require('./browserify');

gulp.task('watchify', ['clean'], function(callback) {
  // Start browserify task with devMode === true
  browserifyTask(callback, true);
});
