---
layout: post
title: mac apache 设置虚拟主机
tags: javascript
keywords: mac apache
description: mac apache 设置虚拟主机
---

`$ sudo vim /etc/hosts.ac`

修改hosts绑定。避免重启后恢复

`$ sudo vim /et/hosts`

同步修改 hosts。


`$ sudo vi /etc/apache2/httpd.conf`

`#Include /private/etc/apache2/extra/httpd-vhosts.conf`

去掉# 保存

`$ sudo vi /etc/apache2/extra/httpd-vhosts.conf`

增加虚拟主机记录
示例：
```xml
  <VirtualHost 127.0.0.1:80>
      ServerAdmin noyobo@gmail.com
      DocumentRoot "/Users/xiamibao/home/gitlab"
      ServerName gitlabswf.xiami.com
      ErrorLog "/private/var/log/apache2/gitlabswf.xiami.com-error_log"
      CustomLog "/private/var/log/apache2/gitlabswf.xiami.com-access_log" common
      <Directory />
          Options Indexes MultiViews
          AllowOverride All
          Order allow,deny
          Allow from all
      </Directory>
  </VirtualHost>
```
