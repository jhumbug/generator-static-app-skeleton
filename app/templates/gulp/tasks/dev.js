'use strict';

var gulp = require('gulp');

// Run this to compress all the things!
gulp.task('dev', ['markup', 'images', 'fonts', 'minifyCss', 'uglifyJs', 'ftp:dev']);
