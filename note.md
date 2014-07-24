# 记录

## 实用文章
 - [jekyll-quick-start](http://jekyllbootstrap.com/usage/jekyll-quick-start.html)
 - [终端配色](https://github.com/altercation/solarized)
 - [sublime text 3 subl](http://feliving.github.io/Sublime-Text-3-Documentation/osx_command_line.html)

## 装机命令

 - 安装 brew

    ```
    $ sudo su
    $ curl -L http://github.com/mxcl/homebrew/tarball/master | tar xz --strip 1 -C /usr/loca
    ```
 - 安装 sublime text 3

    ```
    import urllib.request,os; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())
    ```

  - DocBlockr
  - LESS
  - HTML-CSS-JS-Prettify
  - JSHint-Gutter

 - subl 命令打开 sublime Text

    ```
    $ sudo ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /bin/subl
    ```

