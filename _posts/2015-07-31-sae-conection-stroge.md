---
layout: post
title: sae wordpress 无法上传的权限问题 
description: 解决无法建立目录 wp-content/uploads 有没有上级目录的写权限的问题;
tags: wordpress
category: note
keywords: sae,wordpress
date: 2015-07-31 19:44:24
---

## 前言

今天折腾 sae 云应用中心, 感觉官方提供的 wordpress 程序略显版本太低, 去 [http://wordpress.org/](http://wordpress.org/) 下载了中文最新版 4.2.2, 创建一个版本, 上传, 升级数据库一气呵成; 心里满是欢喜;

结果尝试上传图片的时候,居然得到这样的提示

`无法建立目录 wp-content/uploads/2015/07. 有没有上级目录的写权限？`

难道需要使用官方的低版本的 wordpress ? *(心里一万只草泥马奔过)*

先 Google 看看有没有人解决了这个问题. 

看到有人分享过了这方面的内容 [WordPress中uploads目录替换为SAE的Storage方法](http://jingyan.baidu.com/article/54b6b9c0f563022d583b47ae.html?st=3&os=1&bd_page_type=1&net_type=&ssid=&from=&rst=5)

按照此步骤, 亲测可用, 摘录如下, 以做备录

### 1. 确认已存在 Srorage 服务

![image](https://cloud.githubusercontent.com/assets/1292082/9006819/23df1bf0-37be-11e5-8605-282e1282f540.png)

图中 Domain Name 即为 Storage 的名字, 请牢记~

### 2. 创建 storage.php 文件

在代码版本的根目下创建 `storage.php`, 内容如下:

```php
<?php
/** SAE Storage Domain */
define('SAE_STORAGE', wordpress); // 这对应你的 Domain Name
/** File Upload Dir */ 
define('SAE_DIR','saestor://'.SAE_STORAGE.'/uploads');
/** File URL PATH */ 
define('SAE_URL', 'http://' . $_SERVER['HTTP_APPNAME'] . '-'.SAE_STORAGE.'.stor.sinaapp.com/uploads');
?>
```

### 3. 修改wp-includes/functions.php文件

首行添加 `include( ABSPATH . '/storage.php' ); `

代码片段如下:

```
/**
 * Main WordPress API
 *
 * @package WordPress
 */
include( ABSPATH . '/storage.php' );      //添加这一行。调用SAE的Storage文件域名设置
require( ABSPATH . WPINC . '/option.php' );
```

#### 3.1 修改 `wp_mkdir_p` 方法代码

行号 `1468` 左右

```php
function wp_mkdir_p( $target ) {
	// $wrapper = null;

	// Strip the protocol.
	/* 注释掉此代码块
	if( wp_is_stream( $target ) ) {
		list( $wrapper, $target ) = explode( '://', $target, 2 );
	}

	// From php.net/mkdir user contributed notes.
	$target = str_replace( '//', '/', $target );

	// Put the wrapper back on the target.
	if( $wrapper !== null ) {
		$target = $wrapper . '://' . $target;
	}*/
	// 增加的代码
	if (substr ( $target, 0, 10 ) == 'saestor://') {
    return true;
	}
	$target = str_replace ( '//', '/', $target );
	// 增加的代码

```

#### 3.2 定义 `$dir` 为 `storage.php` 里设置的地址

查找 `$basedir = $dir;` 在此行代码上设置添加如下代码:

```php
  $dir = SAE_DIR;
	$url = SAE_URL;
```

#### 3.3 在 `send_frame_options_header` 方法前添加如下代码块:

```php
// for Storage begin
if ( !function_exists('utf8_encode') ) {
    function utf8_encode($str) {
        $encoding_in = mb_detect_encoding($str);
        return mb_convert_encoding($str, 'UTF-8', $encoding_in);
    }
}
//for Storage end
```

### 4. 修改 wp-admin/includes/file.php 

```php
/*** 注释如下代码 ***/
// Set correct file permissions.
$stat = stat ( dirname ( $new_file ) );
$perms = $stat ['mode'] & 0000666;
@ chmod ( $new_file, $perms );
```

### 5. 提交代码

所有修改都完成了

```bash
svn add --force * --auto-props --parents --depth infinity -q
svn ci -m '修改上传到 storage'
```


