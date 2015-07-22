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

### 顺序环视

```js
abc ab abd
```

**`/a(?=bc)/g`** 匹配上述文本中的字母 `a`, 顺序环视, 其中`(?=bc)` 表示匹配 `bc` 的文本位置

顺序环视会检查子表达式 `(?=bc)` 能否匹配成功, 但它只寻找能够匹配的位置, 而不会真正占用这些字符

> 测试工具: http://regexr.sinaapp.com/
