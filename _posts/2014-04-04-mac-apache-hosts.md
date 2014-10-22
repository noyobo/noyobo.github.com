---
layout: post
title: mac apache 设置虚拟主机
tags: javascript
keywords: mac apache
description: mac apache 设置虚拟主机
category: mac
---

`$ sudo vim /etc/hosts.ac`

修改hosts绑定。避免重启后恢复

`$ sudo vim /et/hosts`

同步修改 hosts。


`$ sudo vi /etc/apache2/httpd.conf`

`#Include /private/etc/apache2/extra/httpd-vhosts.conf`

`#LoadModule php5_module libexec/apache2/libphp5.so` 载入PHP

去掉# 保存

`$ sudo vi /etc/apache2/extra/httpd-vhosts.conf`

增加虚拟主机记录
示例：

```bash
<VirtualHost *:80>
    ServerAdmin noyobo@gmail.com
    DocumentRoot "/Users/noyobo/home"
    ServerName home.xiami.com
    ErrorLog "/private/var/log/apache2/home.xiami.com-error_log"
    CustomLog "/private/var/log/apache2/home.xiami.com-access_log" common
    <Directory "/Users/noyobo/home" >
        Options FollowSymLinks Indexes MultiViews
        AllowOverride All
        Order allow,deny
        Allow from all
        Require all granted  # 如果遇到 403 尝试开启
    </Directory>
</VirtualHost>
```

```
$ sudo apachectl stop
$ sudo apachectl start
```
