'use strict';

var gulp = require('gulp')
var copy = require('gulp-copy')
var concat = require('gulp-concat')
var minifyCSS = require('gulp-minify-css')
var markdown = require('markdown-creator')
var YAML = require('yamljs')
var fs = require('fs')
var del = require('del')

var codeName = 'npm.md';
var npmTHead = ['Package Name', '']
var npmTemp = '\
[![npm version](http://img.shields.io/npm/v/{name}.svg)](https://www.npmjs.org/package/{name}) \
[![npm download](http://img.shields.io/npm/dm/{name}.svg)](https://www.npmjs.org/package/{name}) \
[![npm engines](http://img.shields.io/node/v/{name}.svg)](https://www.npmjs.org/package/{name}) \
[![npm dependencise](https://david-dm.org/{repo}.svg)](https://david-dm.org/{repo}) \
[![build status](http://img.shields.io/travis/{repo}.svg)](https://travis-ci.org/{repo})'

gulp.task('npm', function() {
  var npmArray = YAML.load('./lib/npm.yml').projects;
  fs.writeFileSync(codeName, '---\nlayout: default\ntitle: About\npermalink: /npm/\n---\n')
  fs.appendFileSync(codeName, markdown.title('NPM packages', 2))
  var npmTbody = []
  for (var i = 0; i < npmArray.length; i++) {
    var item = npmArray[i];
    var l = markdown.link(item.name, 'https://github.com/' + item.repo);
    var n = npmTemp.replace(/\{name\}/g, item.name);
        n = n.replace(/\{repo\}/g, item.repo)
        // n = n.split(',')
    npmTbody.push([l, n])
  };
  fs.appendFileSync(codeName, markdown.table(npmTHead, npmTbody));
  // fs.appendFileSync(codeName, fs.readFileSync('./lib/npm-footer.md'));
})
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
gulp.task('default', ['build', 'npm'])
