---
layout: post
title: kclean kmc 文件配置
description: 快速gulp-kclean任务
tags: gulp
category: js
keywords: kclean
date: 2015-04-20 11:03:31
---

## kmc task

```js
var abc = require('./abc.json');
var pkg = abc.group + '/' + abc.name + '/' + abc.version;
var comboSuffix = '-min';
kmc.config({
    packages: [{
        name: pkg,
        base: './src'
    }]
});


function renderKmc(fileName) {
    var comboFiles = fileName.map(function (name) {
        return {
            src: pkg + "/" + name + ".js",
            dest: name + comboSuffix + ".js"
        };
    });
    var cleanFiles = fileName.map(function (name) {
        return {
            src: name + comboSuffix + '.js',
            outputModule: pkg + '/' + name
        };
    });
    return gulp.src([src + '/**/*.js'])
        //转换cmd模块为kissy模块
        .pipe(kmd())
        .pipe(kmc.convert({
            kissy: true
        }))
        //合并文件
        .pipe(kmc.combo({
            deps: 'mods.js',
            files: comboFiles
        }))
        //优化代码
        .pipe(kclean({
            files: cleanFiles
        }))
        .pipe(gulp.dest(dest))
        .pipe(filter(function (file) {
            var files = fileName.map(function (name) {
                return name + comboSuffix + '.js';
            });
            return files.indexOf(file.relative) == -1;
        }))
        .pipe(rename({
            suffix: '-min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest(dest))
        .on('end', function () {
            gulp.start(['uglifyIndex'])
        })
}

gulp.task('uglifyIndex', function () {
    return gulp
        .src(dest + '/index-min.js')
        .pipe(uglify())
        .pipe(gulp.dest(dest))
})


gulp.task('kmc', function () {
    renderKmc(['index']);
});
```
