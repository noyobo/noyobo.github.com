---
layout: post
title: 使用github 建立博客
tags: blog
category: git
keywords: github,jekyll,gh-pages
---

Markdown 语法基础文件
============

# 这是H1标题

## 这是H2标题

### 这是H3标题

#### 这是H4标题

##### 这是H5标题

###### 这是H6标题

**blockquote**

> ## This is a header.
>
> 1.   This is the first list item.
> 2.   This is the second list item.
>
> Here's some example code:
>
>     return shell_exec("echo $input | $markdown_script");

**段落**

这是一个普通段落。

<table>
    <tr>
        <td>Foo</td>
    </tr>
</table>

这是另一个普通段落。

**highligh**

`标记`行内标记

```html
<a href='http://google.com/' data-intro='Hello step one!' data-step='1'></a>
```

```javascript
//start the server
var Server = require('tiny-lr').Server;
var server = new Server();
server.listen(options.port, callback);

//notify the server to reload
server.changed({
  body: {
    files: files
  }
});
```

**列表**

*   Red
*   Green
*   Blue

**有序列表**

1.   Red
2.   Green
3.   Blue

$$
\begin{align*}
  & \phi(x,y) = \phi \left(\sum_{i=1}^n x_ie_i, \sum_{j=1}^n y_je_j \right)
  = \sum_{i=1}^n \sum_{j=1}^n x_i y_j \phi(e_i, e_j) = \\
  & (x_1, \ldots, x_n) \left( \begin{array}{ccc}
      \phi(e_1, e_1) & \cdots & \phi(e_1, e_n) \\
      \vdots & \ddots & \vdots \\
      \phi(e_n, e_1) & \cdots & \phi(e_n, e_n)
    \end{array} \right)
  \left( \begin{array}{c}
      y_1 \\
      \vdots \\
      y_n
    \end{array} \right)
\end{align*}
$$

$$ 5 + 5 $$

A simple paragraph with an ID attribute.
{: #para-one}

> A blockquote with a title
{:title="The blockquote title"}
{: #myid}

{:.ruby}
    Some code here
