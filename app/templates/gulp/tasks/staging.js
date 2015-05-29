'use strict';

var gulp = require('gulp');

// Run this to compress all the things!
gulp.task('staging', ['markup', 'images', 'fonts', 'minifyCss', 'uglifyJs', 'ftp:staging']);
