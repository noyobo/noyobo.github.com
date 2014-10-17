'use strict';

var gulp = require('gulp')
var copy = require('gulp-copy')
var concat = require('gulp-concat')
var minifyCSS = require('gulp-minify-css')
var markdown = require('markdown-creator')
var YAML = require('yamljs')
var fs = require('fs')
var del = require('del')


var npmTHead = ['Package Name', '']
var npmTemp = '\
[![npm version](http://img.shields.io/npm/v/{name}.svg)](https://www.npmjs.org/package/{name}) \
[![npm download](http://img.shields.io/npm/dm/{name}.svg)](https://www.npmjs.org/package/{name}) \
[![npm engines](http://img.shields.io/node/v/{name}.svg)](https://www.npmjs.org/package/{name})'

gulp.task('npm', function() {
  var yamlData = YAML.load('./lib/npm.yml')
  fs.writeFileSync('npm.md', '---\nlayout: default\ntitle: About\npermalink: /npm\n---\n')
  fs.appendFileSync('npm.md', markdown.title('My NPM packages', 2))
  var npmTbody = []
  for (var i = 0; i < yamlData.length; i++) {
    var item = yamlData[i];
    var l = markdown.link(item, 'https://github.com/noyobo/' + item);
    var n = npmTemp.replace(/\{name\}/g, item)
    npmTbody.push([l, n])
  };
  fs.appendFileSync('npm.md', markdown.table(npmTHead, npmTbody))
})
gulp.task('clean', function(cb) {
  del(['build/**'], function(err) {
    cb(err)
  })
})
gulp.task('copy', ['clean'], function() {
  return gulp
    .src(['./assets/img/*', './assets/js/*'])
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
gulp.task('default', ['build', 'npm'])
