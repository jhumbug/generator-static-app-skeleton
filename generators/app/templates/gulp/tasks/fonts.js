// var changed    = require('gulp-changed');
// var gulp       = require('gulp');
// var imagemin   = require('gulp-imagemin');
// var config     = require('../config').images;
// var browserSync  = require('browser-sync');

// gulp.task('images', function() {
//   return gulp.src(config.src)
//     .pipe(changed(config.dest)) // Ignore unchanged files
//     .pipe(imagemin()) // Optimize
//     .pipe(gulp.dest(config.dest))
//     .pipe(browserSync.reload({stream:true}));
// });

// var gulp       = require('gulp');

// gulp.task('copy', function () {
//     var sourcePaths = [config.appDirectory + 'index-gulp.html', config.bowerDirectory + 'requirejs/require.js', config.bowerDirectory + 'modernizr/modernizr.js']
//     return gulp.src(sourcePaths, { base: config.appDirectory })
//         .pipe(rename(function(path) {
//             path.basename = path.basename.replace('index-gulp', 'index');
//             path.dirname = path.dirname.replace('bower_components\\requirejs', 'scripts');
//             path.dirname = path.dirname.replace('bower_components\\modernizr', 'scripts');
//         }))
//         .pipe(gulp.dest(config.tmpDirectory));
// })

var changed    = require('gulp-changed');
var gulp       = require('gulp');
var config     = require('../config').fonts;
var browserSync  = require('browser-sync');

gulp.task('fonts', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
