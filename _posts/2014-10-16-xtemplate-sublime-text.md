---
layout: post
title: "Xtemplate Sublime Text 语法高亮及自动完成插件"
description: "Xtemplate Sublime Text 语法高亮及自动完成插件"
tags: [sublime]
keywords: sublime,xtemplate
category: software
date: 2014-10-16 16:46:05
---

## 特点 {#tedian}

### 支持 [Xtemplate Syntax][5] 自动完成

![auto completions](https://cloud.githubusercontent.com/assets/1292082/4594591/0a629d9c-5091-11e4-8acf-6755f2631f98.gif)

输入 `x` 开始匹配  详细匹配的列表 查看 [SNIPPETS.md][6]

### 支持常用 HTML 标签快捷输入

![HTML TAGS](https://cloud.githubusercontent.com/assets/1292082/4593753/20460dd6-5089-11e4-9b76-3c2ca0f379d9.gif)

详细匹配的列表 查看 [SNIPPETS.md][7]

### 支持常用 HTML 属性自动完成

![HTML ATTR](https://cloud.githubusercontent.com/assets/1292082/4601450/79ebf5fa-50ff-11e4-99c6-288161b5c986.png)

详细匹配的列表 查看 [HTML-Attr.YAML-sublime-completions](https://github.com/noyobo/sublime-xtemplate-snippets/blob/master/Completions/SHS-HTML-Attr/HTML-Attr.YAML-sublime-completions)

### 个性配色 扩展 Monokia Color Scheme

语法高亮的颜色取决你正在使用的配色方案.  由于我使用的是  Monokai.   我配置的 [Xtemplate Syntax][5] 的高亮方案 基于 官方 KISSY的 LOGO色 ![logo](http://gtms01.alicdn.com/tps/i1/T1MVbxFoRcXXchhRni-175-68.png)

使用: `Preferences > Color Scheme > Xtemplate > Monokai(Xtemplate)`

插件为 `.no-sublime-package` 类型 你也可以增加属于自己的配色方案.

![color](https://cloud.githubusercontent.com/assets/1292082/4593827/d07ebdce-5089-11e4-994e-35ca8073cdcd.png)

## sublime-xtemplate-snippets

项目基于 [AAAPackageDev][3] Build 使用 Gulp 管理.

`$ gulp doc` 生成 snippets 文档

`$ gulp dev` 复制插件文件到 `Sublime Text Package` 目录. [#L24-L27](https://github.com/noyobo/sublime-xtemplate-snippets/blob/master/gulpfile.js#L24-L27) 用于调试

插件为 `.no-sublime-package` 类型 通过 `Package Control` 安装后 源码都会存放在 `Preferences > Browsse Packages...` 下 感兴趣的同学可以看看

## 最后

第一次开发插件, 也是一个学习实践的过程. 特别是其中对 regex 的使用.

[Xtemplate syntax for Sublime Text][4] 还有很多不足之处. 如果你有更好的方案或者建议, 可以为 [sublime-xtemplate-snippet](https://github.com/noyobo/sublime-xtemplate-snippets) 贡献代码. 或者 issuse

[1]: https://github.com/kissyteam/xtemplate
[3]: https://github.com/SublimeText/AAAPackageDev
[4]: https://sublime.wbond.net/packages/Xtemplate
[5]: https://github.com/kissyteam/xtemplate/blob/master/docs/syntax.md
[6]: https://github.com/noyobo/sublime-xtemplate-snippets/blob/master/SNIPPETS.md#xtemplate
[7]: https://github.com/noyobo/sublime-xtemplate-snippets/blob/master/SNIPPETS.md#html-block
