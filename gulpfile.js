'use strict';

var gulp = require('gulp')
var copy = require('gulp-copy')
var concat = require('gulp-concat')
var minifyCSS = require('gulp-minify-css')
var fs = require('fs')
var del = require('del')

gulp.task('clean', function(cb) {
  del(['build/**'], function(err) {
    cb(err)
  })
})
gulp.task('copy', ['clean'], function() {
  return gulp
    .src(['./assets/img/**/*', './assets/js/**/*'])
    .pipe(copy('dist/', {
      prefix: 1
    }))
})
gulp.task('css', ['copy'], function() {
  return gulp
    .src(['./assets/css/*'])
    .pipe(concat('all.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'))
})
gulp.task('build', ['copy', 'css'])
gulp.task('default', ['build'])
