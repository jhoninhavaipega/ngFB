var gulp = require('gulp'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    iife = require("gulp-iife");

gulp.task('concat', function() {
  return gulp.src('./src/**/*.js')
    .pipe(iife())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('watch', function() {
  gulp.watch('./src/**/*.js', ['concat']);
});

gulp.task('default', ['concat', 'watch']);