'use strict';

var gulp = require('gulp')
var markdown = require('markdown-creator')
var YAML = require('yamljs')
var fs = require('fs')

var npmTHead = ['Package Name', '']
var npmTemp = '\
[![npm version](http://img.shields.io/npm/v/{name}.svg)](https://www.npmjs.org/package/{name})\
[![npm download](http://img.shields.io/npm/dm/{name}.svg)](https://www.npmjs.org/package/{name})\
[![npm download](http://img.shields.io/node/v/{name}.svg)](https://www.npmjs.org/package/{name})'

gulp.task('npm', function() {
  var yamlData = YAML.load('./lib/npm.yml')
  fs.writeFileSync('npm.md', '---\nlayout: default\ntitle: About\npermalink: /npm/\n---\n')
  fs.appendFileSync('npm.md', markdown.title('My NPM packages', 2))
  var npmTbody = []
  for (var i = 0; i < yamlData.length; i++) {
    var item = yamlData[i];
    var n = npmTemp.replace(/\{name\}/g, item)
    npmTbody.push([item, n])
  };
  console.log(npmTbody)
  fs.appendFileSync('npm.md', markdown.table(npmTHead, npmTbody))
})
