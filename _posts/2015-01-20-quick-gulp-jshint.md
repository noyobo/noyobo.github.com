---
layout: post
title: 快速gulp-jshint配置
tags: javascript, gulp
category: gulp
keywords: gulp-jshint
---

## npm modules

`npm i --save-dev gulp-jshint jshint-stylish`

## gulp task
```
var jshint = require('gulp-jshint')
var stylish = require('jshint-stylish')
gulp.task('lint', function() {
  return gulp
    .src(['./lib/*.js','./plugin/*.js', 'index.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter(stylish, {
      verbose: true
    }))
})

```

`.jshintrc`

```json
{
  "node": true,
  "esnext": true,
  "bitwise": true,
  "camelcase": true,
  "curly": true,
  "eqeqeq": true,
  "immed": true,
  "indent": 2,
  "latedef": true,
  "newcap": true,
  "noarg": true,
  "quotmark": "single",
  "regexp": true,
  "undef": true,
  "unused": true,
  "strict": true,
  "trailing": true,
  "smarttabs": true,
  "white": true
}
```
