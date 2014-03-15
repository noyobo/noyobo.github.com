---
layout: post
title: npm install 安装过程卡住不动
tags: javascript
---


修改 npm 的安装目录下的 npmrc文件 增加一条 `registry=http://registry.cnpmjs.org`

就可以解决此问题了.

{% highlight javascript %}
prefix=${APPDATA}\npm
registry=http://registry.cnpmjs.org
{% endhighlight %}