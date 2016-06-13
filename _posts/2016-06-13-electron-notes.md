---
layout: post
title: electron 学习笔记
tags: blog
category: node
keywords: electron
---

## 全局安装 electron 

```bash
tnpm install -g electron-prebuilt -d
tnpm install -g electron-package
tnpm install -g electron
```

## 使用淘宝镜像

```bash
export ELECTRON_MIRROR=http://npm.taobao.org/mirrors/electron/
```

## 构建命令

```bash
DEBUG=electron-download electron-packager ./ appname --platform=darwin --arch=x64 --version=1.2.2 --overwrite
```
