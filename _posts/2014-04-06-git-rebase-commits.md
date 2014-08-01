---
layout: post
title: 合并整理 Git commit
tags: [git]
keywords: git,合并commit,git rebase
desc: 使用 git 合并多个提交信息,整理不必要的 git commits.
---

最近做项目使用Git管理代码， 常常是`git commit －m` 后 就执行 `git push`，为了在公司和家里都能开发,实时或许最新代码, 导致 branch 看到的 'git log' 都是杂乱无章的。 不利于浏览.

抽出点时间好好学习下,如何整理 commits .


## git commit ##
`$ git commit -c HEAD -a --amend` 可以让你快速修改上一次 commit message, 这里会替换上一次的 commit message.

但是如果想修改前 第三次 的 commit message 要怎么改呢? `git rebase` 派上用场了

## git rebase -i ##

作用:删除修改 commit，修改 commit message

修改前第三次提交内容
`$ git rebase -i HEAD~3` 得到

{% highlight javascript %}
pick 5eef5f7 index.html 模板文件修改 index.html
pick a3285df Create 2014-04-04-mac-apache-hosts.md
pick f69e8d8 add category git 增加文章 git 分类
# Rebase c854a42..f69e8d8 onto c854a42
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
{% endhighlight %}

看 Commands 的解释

{% highlight javascript %}
p, pick 使用这条 commit
r, reword 使用这条 commit 但是要修改 commit message
e, edit 使用这条 commit 但是要修改 commit messaage // 这里和 reword 使用方法一样, 但 reword 在 :wq 后会直接让你进入修改编辑, edit :wq 后要再使用 git commit --amend 进入修改
s, squash 使用这条 commit, 但是要与上一条 commit 合并, 并保留自身 commit message
f, fixup 与 squash 一样, 但是舍弃 自身 commit message
x, exec 执行命令
{% endhighlight %}

知道使用方法后, 就可以根据需求修改 commits 了. 需要调整先后顺序 调整 pick 的位置即可.
需要 合并多个 commit 使用 吧 `pick` 修改为 `squash` 即可.

如果需要推送到远端 执行
`$ git push --force origin master`


参考资料:

* [http://git-scm.com/book/zh/](http://git-scm.com/book/zh/)
* [git 参考手册](http://gitref.org/zh/creating/)