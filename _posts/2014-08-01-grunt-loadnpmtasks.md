---
layout: post
title: "便捷加载 grunt 依赖"
description: "快速简介grunt.loadNpmTrasks"
tags: [grunt]
category: grunt
keywords: grunt,grunt-loadNpmTasks
---


## 笨重的 grunt.loadNpmTasks

grunt 经常书写以下 `loadNpmTasks`, 我自己往往在 `--save-dev` 后忘记去修改 gruntfile.js
`$ grunt` 后报错的做挫败感;

```javascript
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-shell');
grunt.loadNpmTasks('grunt-exec');
grunt.loadNpmTasks('grunt-sass');
```

## matchdep

可以批量处理依赖根据你的过滤条件

`$ npm install --save-dev matchdep` 首先安装到你的项目中

在 `gruntfile.js` 替换大片 `grunt.loadNpmTasks` 如下
```javascript
// 批量执行 grunt.loadNpmTasks
require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
```

> 更多使用方法, 可参照 [https://www.npmjs.org/package/matchdep](https://www.npmjs.org/package/matchdep)

## load-grunt-tasks

也可以批量加载以来关系, 同样支持过滤

> 改写上面的代码如下

```javascript
require('load-grunt-tasks')(grunt, {pattern: 'grunt-*'});
```

同样很便捷

> 更多使用方法, 可参照 [https://www.npmjs.org/package/load-grunt-tasks](https://www.npmjs.org/package/load-grunt-tasks)