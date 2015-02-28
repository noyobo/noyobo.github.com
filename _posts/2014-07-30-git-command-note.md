---
layout: post
title: git常用命令记录
description: git更新远程仓库
keywords: github,git
tags: [git]
category: git
---

## fork 同步远程仓库

`$ git remove -v`  查看远程分支

`$ git pull remote master` 同步远程主干到 fork 项目

`$ git merge remote/master` 合并远程主干到 fork 项目

## 修改 commit

`$ git reset --mixed HEAD~1` 恢复到上一次提交

`$ git push origin master -f` 强制推送

## 创建空分支(无历史 commit)

```bash
git checkout --orphan gh-pages
# 创建一个orphan的分支，这个分支是独立的
Switched to a new branch 'gh-pages'
```

