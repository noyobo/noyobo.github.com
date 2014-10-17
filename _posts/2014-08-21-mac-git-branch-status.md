---
layout: post
title: "Mac bash 显示当前Git分支名与状态"
description: "Mac bash显示当前Git分支名与状态,提示用户文件位置与提交情况,仿github客户端提示."
tags: [git]
keywords: bash,git,git_shell
category: git
---

Mac 的终端显示很不友好, 用惯了 Window 下的 Github shell 客户端. 切换到Mac使用起来不是很习惯


先上效果图:

![git 终端效果](https://raw.githubusercontent.com/noyobo/noyobo.github.com/master/images/2014-08-21-11.15.29.png)

主要实现

*   显示当前路径
*   显示当前所在分支
*   显示当前修改状态
    *   `=` 表示一个干净的分支
    *   `~` 表示文件有改动
    *   `*` 表示文件有增加或删除 但未 commit
    *   `+` 表示有新文件
    *   `#` 表示已commit 但未 push

通过网上搜索和自己根据实际需要修改的代码如下:

[.bash_profile](https://gist.github.com/noyobo/968ec2650386b59b4638)

```bash
function parse_git_dirty {
    local git_status=$(git status 2> /dev/null | tail -n1) || $(git status 2> /dev/null | head -n 2 | tail -n1);
    if [[ "$git_status" != "" ]]; then
        local git_now; # 标示
        if [[ "$git_status" =~ nothing\ to\ commit || "$git_status" =~  Your\ branch\ is\ up\-to\-date\ with ]]; then
            git_now="=";
        elif [[ "$git_status" =~ Changes\ not\ staged || "$git_status" =~ no\ changes\ added ]]; then
            git_now='~';
        elif [[ "$git_status" =~ Changes\ to\ be\ committed ]]; then #Changes to be committed
            git_now='*';
        elif [[ "$git_status" =~ Untracked\ files ]]; then
            git_now="+";
        elif [[ "$git_status" =~ Your\ branch\ is\ ahead ]]; then
            git_now="#";
        fi
        echo "${git_now}";
    fi
}

function git_branch {
    ref=$(git symbolic-ref HEAD 2> /dev/null) || return;
    echo "("${ref#refs/heads/}") ";
}


PS1="[\[\033[1;32m\]\w\[\033[0m\]] \[\033[0m\]\[\033[1;36m\]\$(git_branch)\[\033[0;31m\]\$(parse_git_dirty)\[\033[0m\]$ "

```

> 还是推荐使用 zsh, 很强大
> PS: [https://github.com/robbyrussell/oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)
