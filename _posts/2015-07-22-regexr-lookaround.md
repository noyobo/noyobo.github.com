---
layout: post
title: 正则表达式 - 环视功能
description: 正则表达式里的环视功能
tags: regexr
category: js
keywords: regexr
date: 2015-07-22 23:47:47
---

## lookaround 环视功能

环视结构不匹配人和自负, 只匹配文本中的特定位置

### 顺序环视(从左到右)

```js
abcd ab abd
```

**`/a(?=bc)/g`** 匹配上述文本中的字母 `a`, 顺序环视, 其中`(?=bc)` 表示匹配 `bc` 的左文本位置, 也就是  `a^bcd` **^** 的位置

顺序环视会检查子表达式 `(?=bc)` 能否匹配成功, 但它只寻找能够匹配的位置, 而不会真正占用这些字符

### 逆序环视(从右到左)

> Note: 与顺序环视相反, JavaScript 不支持 逆序环视 !

**`/(?<=bc)d/g`** 匹配上述文本中的字母 `d`, 逆序环视, 其中`(?<=bc)` 表示匹配 `bc` 的右文本位置, 也就是  `abc^d` **^** 的位置

## 实战

使用环视功能实现 JavaScript 数字三位分割

```js
var money = '1234567890';
money = money.replace(/(\d)(?=(\d\d\d)+$)/g, function($1) {
    return $1 + ',';
})
console.log(money);
```

## 参考

> 测试工具: http://regexr.sinaapp.com/
