---
layout: post
title: jshint hack 记录
tags: javascript, gulp
category: javascript
keywords: jshint
date: 2015-01-20 10:22:36
---

## jshint docs

http://jshint.com/docs/

http://jslinterrors.com/

 `/*jshint expr:true */` or ``/*jshint -W030*/``

>  Expected an assignment or function call and instead saw an expression.

`/*jshint unused:false*/` or `/*jshint -W098 */`

> '{a}' is defined but never used.

`/* global -{a} */` or `/*jshint -W079 */`

> Redefinition of '{a}'

`/*jslint eqeq: true*/`

> Expected '===' and instead saw '=='
