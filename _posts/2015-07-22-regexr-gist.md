---
layout: post
title: regexr 要点
description: 正则学习过程中的一些笔记
tags: regexr
category: js
keywords: regexr
date: 2015-07-22 22:41:46
---

正则表达式学习笔记
===============

区分如下变量及运算符

```js
aaa && a === 11 && $abca == 1 || aasdfas && a !== 22 && (a + 1)
```

RegExr:

1. `/(?:([-\+\*\%\/\&\=\|\!]+)|([^-\+\*\%\/\&\=\|\!\(\)\s]+))/g`
  * 使用 `|` 运算符分别匹配
    * 不够灵活, 需要枚举运算符 
