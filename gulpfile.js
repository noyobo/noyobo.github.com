'use strict';

var gulp = require('gulp')
var copy = require('gulp-copy')
var rename = require('gulp-rename')
var concat = require('gulp-concat')
var minifyCSS = require('gulp-minify-css')
var less = require('gulp-less')
var fs = require('fs')
var del = require('del')

var pathConfig = {

}

gulp.task('clean', function(cb) {
  del(['dist/**'], function(err) {
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
gulp.task('less', ['copy'] ,function(){
  return gulp
    .src(['./assets/less/*.less', '!./assets/less/_*.less'])
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(rename('all.css'))
    .pipe(gulp.dest('dist/css'))
})
gulp.task('watch', function(){
  gulp.watch('assets/**/*', ['build'])
  // gulp.watch('assets/**/*.less', ['less'])
})
gulp.task('build', ['copy', 'less'])
gulp.task('default', ['build'])
