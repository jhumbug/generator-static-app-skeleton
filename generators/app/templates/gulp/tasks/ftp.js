var gulp = require('gulp');
var sftp = require('gulp-sftp');

var config = require('../config').deploy;
var configDev = config.dev;
var configStaging = config.staging;
var configProduction = config.production;

gulp.task('ftp:dev', ['markup', 'images', 'fonts', 'minifyCss', 'uglifyJs'], function() {
	return gulp.src(config.src)
        .pipe(sftp(configDev));
});

gulp.task('ftp:staging', ['markup', 'images', 'fonts', 'minifyCss', 'uglifyJs'], function() {
	return gulp.src(config.src)
        .pipe(sftp(configStaging));
});

gulp.task('ftp:production', ['markup', 'images', 'fonts', 'minifyCss', 'uglifyJs'], function() {
	return gulp.src(config.src)
        .pipe(sftp(configProduction));
});
