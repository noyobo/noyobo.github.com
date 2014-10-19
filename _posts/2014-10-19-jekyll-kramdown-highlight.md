---
layout: post
title: "jekyll kramdown 语法高亮配置"
description: ""
category: jekyll
tags: [blog]
keywords: jekyll,kramdown,jekyll语法高亮,config.yml
---

## 像写github一样写博客

上一个[版本](https://github.com/noyobo/noyobo.github.com/blob/730dfe8c9433a6327b11c98cb34c8e97e23e9005/_config.yml), 写博客 代码高亮使用的是

```yaml
markdown: rdiscount
pygments: true
```

不能不能很好的支持和 github 一样的代码块写法 总是要写 `{ % highlight javascript % }` 这样的标记

导致这github 上完全没法看,比如: [点我](https://github.com/noyobo/noyobo.github.com/blob/0.0.0/_posts/2014-03-19-IE11-ActiveXObject-Adobe-Flash-Player-ActiveX11.md)

这次重构博客, 花心思研究了一番. 详细的 [_config.yml](http://jekyllrb.com/docs/configuration/#default-configuration) 说明.

## redcarpet

经过测试推荐如下两种配置:

```yaml
highlighter: pygments
markdown: redcarpet
redcarpet:
  extensions:
    - fenced_code_blocks
    - no_intra_emphasis
    - strikethrough
    - autolink
    - tables
```

这种配置可以 按照  <code>```</code> 这样的方式, 自动链接,代码块 等基本功能都可以满足了.

## karkdown

```yaml
highlighter: pygments
markdown: kramdown  # [ maruku | rdiscount | kramdown | redcarpet ]
kramdown:
  input:         GFM
  auto_ids:      true
  auto_id_prefix:'id-'
  # footnote_nr:   1
  # entity_output: as_char
  # toc_levels:    1..6
  # smart_quotes:  lsquo,rsquo,ldquo,rdquo
  # use_coderay:   true

  # coderay:
  #   coderay_wrap:              div
  #   coderay_line_numbers:      inline
  #   coderay_line_number_start: 1
  #   coderay_tab_width:         2
  #   coderay_bold_every:        10
  #   coderay_css:               style
```

注释为默认配置, 不过 github 没有 `coderay` 服务, 后面都可以不用

[kramdown configuration](http://kramdown.gettalong.org/options.html)

主要看

```yaml
kramdown:
  input:         GFM  # 没有这个配置 代码块不会生效
```

[kramdown syntax](http://kramdown.gettalong.org/syntax.html)

标题功能还可以自定义 ID, 否则自动生成ID, 都看过 github 上的标题自动锚点功能就知道

```html
Hello        {#id}
-----

# Hello      {#id}

# Hello #    {#id}
```

使用 **kramdown** 就可以做到, 但是没有生成 `a` 标记...... 后续再通过其他途径实现吧

## highlightjs

只需要引入就好了

```html
<script src="/dist/js/highlight.pack.js"></script>
<script> hljs.initHighlightingOnLoad(); </script>
```
选择自己喜欢的一个 *style* 自己还可以改良一下, 比如我现在的 背景是隔行换色的.  方便阅读

> highlightjs 没有显示行号的功能

隔行换色代码如下:

```css
.post-content pre {
    border-radius: 3px;
    border: 1px solid #111;
    padding: 0.8em 1em;
    font: 14px/22px Consolas, Monaco, 'Andale Mono', monospace;
    border-radius: 10px;
    background-color: #21221d;
    background-image: -webkit-linear-gradient(#21221d 50%, #272822 50%);
    background-image: -moz-linear-gradient(#21221d 50%, #272822 50%);
    background-image: -ms-linear-gradient(#21221d 50%, #272822 50%);
    background-image: -o-linear-gradient(#21221d 50%, #272822 50%);
    background-image: linear-gradient(#21221d 50%, #272822 50%);
    background-size: 44px 44px;
    background-origin: content-box;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}
```

只要使用 `background-image: linear-gradient`  注意 `background-size: 44px 44px;` 这里表示一个背景块的宽高,所以行高要为 22px  `font: 14px/22px`

就形成了代码背景 隔行换色.

## 最后

文章没有详细的讲解每个选项配置, 有疑问欢迎交流

#### 参考

- https://highlightjs.org/
- http://kramdown.gettalong.org/options.html
- http://jekyllrb.com/docs/home/
- http://jekyllrb.com/docs/configuration/#kramdown
- http://tigefa.readthedocs.org/en/latest/config.html
- http://ben.balter.com/2014/03/13/pages-anchor-links/
