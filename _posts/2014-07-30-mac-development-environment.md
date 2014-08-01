---
layout: post
title: "MAC 装机记录"
desc: "MAC开发环境搭配, 终端颜色设置"
tags: [mac]
---

## 实用文章
 - [jekyll-quick-start](http://jekyllbootstrap.com/usage/jekyll-quick-start.html)
 - [终端配色](https://github.com/altercation/solarized)
 - [sublime text 3 subl](http://feliving.github.io/Sublime-Text-3-Documentation/osx_command_line.html)

## 装机命令

#### 安装 brew

{% highlight javascript %}
$ sudo su
$ curl -L http://github.com/mxcl/homebrew/tarball/master | tar xz --strip 1 -C /usr/loca
{% endhighlight %}

#### 安装 sublime text 3

{% highlight javascript %}
import urllib.request,os; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())
{% endhighlight %}

#### 实用插件

* DocBlockr
* LESS
* HTML-CSS-JS-Prettify
* JSHint-Gutter

#### subl 命令打开 sublime Text

{% highlight javascript %}
$ sudo ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /bin/subl
{% endhighlight %}
