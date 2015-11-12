---
layout: post
title: ANSI escape code 语法颜色笔记 
description: 用于现实命令行界面的颜色语法;
tags: ANSI
category: note
keywords: colors,syntas highlight
date: 2015-11-13 00:04:13
---

## 色值代码列表

* `30-37` 设置文本颜色
  * `black`: 30
  * `red`: 31
  * `green`: 32
  * `yellow`: 33 
  * `blue`: 34
  * `magenta`: 35
  * `cyan`: 36
  * `white`: 37
* `40–47` 设置文本背景颜色
* `39` 重置文本颜色
* `49` 重置背景颜色
* `1` 加粗文本 / 高亮
* `22` 重置加粗 / 高亮
* `0` 重置所有文本属性（颜色，背景，亮度等）为默认值

## 运行以下代码感受下吧

```js
console.log('\x1B[30m文字颜色\x1B[0m重置文字颜色');
console.log('\x1B[31m文字颜色\x1B[0m重置文字颜色');
console.log('\x1B[32m文字颜色\x1B[0m重置文字颜色');
console.log('\x1B[33m文字颜色\x1B[0m重置文字颜色');
console.log('\x1B[34m文字颜色\x1B[0m重置文字颜色');
console.log('\x1B[35m文字颜色\x1B[0m重置文字颜色');
console.log('\x1B[36m文字颜色\x1B[0m重置文字颜色');
console.log('\x1B[37m文字颜色\x1B[0m重置文字颜色');

console.log('\x1B[40m背景颜色\x1B[0m重置背景颜色');
console.log('\x1B[41m背景颜色\x1B[0m重置背景颜色');
console.log('\x1B[42m背景颜色\x1B[0m重置背景颜色');
console.log('\x1B[43m背景颜色\x1B[0m重置背景颜色');
console.log('\x1B[44m背景颜色\x1B[0m重置背景颜色');
console.log('\x1B[45m背景颜色\x1B[0m重置背景颜色');
console.log('\x1B[46m背景颜色\x1B[0m重置背景颜色');
console.log('\x1B[47m背景颜色\x1B[0m重置背景颜色');

console.log('\x1B[30;1m加粗效果\x1B[0m重置加粗效果');
console.log('\x1B[31;1m加粗效果\x1B[0m重置加粗效果');
console.log('\x1B[32;1m加粗效果\x1B[0m重置加粗效果');
console.log('\x1B[33;1m加粗效果\x1B[0m重置加粗效果');
console.log('\x1B[34;1m加粗效果\x1B[0m重置加粗效果');
console.log('\x1B[35;1m加粗效果\x1B[0m重置加粗效果');
console.log('\x1B[36;1m加粗效果\x1B[0m重置加粗效果');
console.log('\x1B[37;1m加粗效果\x1B[0m重置加粗效果');

```

<img width="250" alt="2015-11-13 00 27 14" src="https://cloud.githubusercontent.com/assets/1292082/11123967/6c12de6c-899d-11e5-9f40-72735ab26fb1.png">

