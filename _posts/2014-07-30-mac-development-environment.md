---
layout: post
title: "MAC 装机记录"
description: "MAC开发环境搭配, 终端颜色设置"
tags: [mac]
category: mac
keywords: mac,brew,安装sublime
---

## 实用文章
 - [jekyll-quick-start](http://jekyllbootstrap.com/usage/jekyll-quick-start.html)
 - [终端配色](https://github.com/altercation/solarized)
 - [sublime text 3 subl](http://feliving.github.io/Sublime-Text-3-Documentation/osx_command_line.html)

## 装机命令

#### 安装 brew

```javascript
$ sudo su
$ curl -L http://github.com/mxcl/homebrew/tarball/master | tar xz --strip 1 -C /usr/loca
```

#### 安装 sublime text 3

```javascript
import urllib.request,os; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())
```

#### 实用插件

* DocBlockr
* LESS
* HTML-CSS-JS-Prettify
* JSHint-Gutter

#### subl 命令打开 sublime Text

```javascript
$ sudo ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /bin/subl
```

```json
{
	"always_show_minimap_viewport": true,
	"color_scheme": "Packages/Xtemplate/Monokai(Xtemplate).tmTheme",
	"default_line_ending": "unix",
	"draw_white_space": "all",
	"font_size": 14,
	"highlight_line": true,
	"ignored_packages":
	[
		"Vintage"
	],
	"rulers":
	[
		80,
		100
	],
	"show_encoding": true,
	"show_line_endings": true,
	"tab_size": 2,
	"translate_tabs_to_spaces": true,
	"trim_automatic_white_space": true,
	"word_wrap": "auto",
	"wrap_width": 80
}
```
