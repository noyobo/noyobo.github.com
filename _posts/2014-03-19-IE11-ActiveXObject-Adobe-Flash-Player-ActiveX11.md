---
layout: post
title: IE11获取FlashPlayer Versions 的问题
tags: javascript
keywords: IE11,ShockwaveFlash,Flash,ActiveXObject
description: IE11浏览器 Adebo Flash Player 11 ActiveX 检测安装
category: html
---

最近在做的一个项目中.要使用到动态插入 swf 节点. 用到 [swfObject](https://github.com/swfobject/swfobject)  [kissy](http://docs.kissyui.com/)

microsoft 对 ActiveXObject 兼容的解释: http://msdn.microsoft.com/zh-cn/library/ie/dn423948(v=vs.85).aspx

>从 IE11 开始，navigator 对象支持 plugins 和 mimeTypes 属性。 此外，window.ActiveXObject 属性从 DOM 中隐藏。 （这意味着你不能再使用该属性检测 IE11。）

看上去很美好,意思就是我在检测 Flash是否已经安装 就可以使用 `navigator.plugins["Shockwave Flash"].description`来检测 IE11下的 Flash 版本;

可是实际情况是什么呢?

在IE11浏览器下 点击[demo](http://jsfiddle.net/noyobo/hEPb7/11/)查看

当你电脑环境安装的是

## Adebo Flash Player 11 ActiveX ##

那么你将看到的结果是

```javascript
undefined
navigator.appName; //Netscape
navigator.userAgent; //Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E; rv:11.0) like Gecko
typeof window.ActiveXObject; //undefined
typeof window.ActiveXObject === "undefined"; //true
!!window.ActiveXObject; //false
window.ActiveXObject === undefined; //false
window.ActiveXObject === void 0; //false
window.ActiveXObject == undefined; //true
window.ActiveXObject == void 0; //true
typeof navigator.plugins; //object
typeof navigator.plugins["Shockwave Flash"]; //undefined
navigator.mimeTypes.length; //0
TypeError: Unable to get property 'description' of undefined or null reference
typeof(new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")); //object
(new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version"); //WIN 11,6,602,168
```

`window.ActiveXObject` 如官方描述,已经隐藏了. 但是还是可以 `new window.ActiveXObject`

`(navigator.plugins["Shockwave Flash"]).description` 运行报错 `TypeError: Unable to get property 'description' of undefined or null reference`

我们再看看 电脑环境安装的是

## Adebo Flash Player 12 ActiveX ##

你将看到的结果是

```javascript
12.0.0
navigator.appName; //Netscape
navigator.userAgent; //Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E; rv:11.0) like Gecko
typeof window.ActiveXObject; //undefined
typeof window.ActiveXObject === "undefined"; //true
!!window.ActiveXObject; //false
window.ActiveXObject === undefined; //false
window.ActiveXObject === void 0; //false
window.ActiveXObject == undefined; //true
window.ActiveXObject == void 0; //true
typeof navigator.plugins; //object
typeof navigator.plugins["Shockwave Flash"]; //object
navigator.mimeTypes.length; //2
(navigator.plugins["Shockwave Flash"]).description; //Shockwave Flash 12.0 r0
typeof(new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")); //object
(new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version"); //WIN 12,0,0,77
```

这和官方描述的吻合了.

实际遇到的问题:
先看看 [swfObject](https://github.com/swfobject/swfobject) 源码里是怎么判断的[#L5](https://github.com/swfobject/swfobject/blob/562fe358216edbb36445aa62f817c1a56252950c/swfobject/src/swfobject.js#L51)

```javascript
if (typeof nav.plugins !== UNDEF && typeof nav.plugins[SHOCKWAVE_FLASH] === OBJECT) {
    d = nav.plugins[SHOCKWAVE_FLASH].description;
    // nav.mimeTypes["application/x-shockwave-flash"].enabledPlugin indicates whether plug-ins are enabled or disabled in Safari 3+
    if (d && (typeof nav.mimeTypes !== UNDEF && nav.mimeTypes[FLASH_MIME_TYPE] && nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin)) {
        plugin = true;
        ie = false; // cascaded feature detection for Internet Explorer
        d = d.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
        playerVersion[0] = toInt(d.replace(/^(.*)\..*$/, "$1"));
        playerVersion[1] = toInt(d.replace(/^.*\.(.*)\s.*$/, "$1"));
        playerVersion[2] = /[a-zA-Z]/.test(d) ? toInt(d.replace(/^.*[a-zA-Z]+(.*)$/, "$1")) : 0;
    }
}
else if (typeof win.ActiveXObject !== UNDEF) {
    try {
        var a = new ActiveXObject(SHOCKWAVE_FLASH_AX);
        if (a) { // a will return null when ActiveX is disabled
            d = a.GetVariable("$version");
            if (d) {
                ie = true; // cascaded feature detection for Internet Explorer
                d = d.split(" ")[1].split(",");
                playerVersion = [toInt(d[0]), toInt(d[1]), toInt(d[2])];
            }
        }
    }
    catch (e) {}
}
```

直接无效了

jplayer 里的检测方法是[#L2866](https://github.com/happyworm/jPlayer/blob/3c9abf5527dc0f8f5e6179e79c4d51155afc107c/jquery.jplayer/jquery.jplayer.js#L2866)

```javascript
_getFlashPluginVersion: function() {
	// _getFlashPluginVersion() code influenced by:
	// - FlashReplace 1.01: http://code.google.com/p/flashreplace/
	// - SWFObject 2.2: http://code.google.com/p/swfobject/

	var version = 0,
		flash;
	if(window.ActiveXObject) {
		try {
			flash = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
			if (flash) { // flash will return null when ActiveX is disabled
				var v = flash.GetVariable("$version");
				if(v) {
					v = v.split(" ")[1].split(",");
					version = parseInt(v[0], 10) + "." + parseInt(v[1], 10);
				}
			}
		} catch(e) {}
	}
	else if(navigator.plugins && navigator.mimeTypes.length > 0) {
		flash = navigator.plugins["Shockwave Flash"];
		if(flash) {
			version = navigator.plugins["Shockwave Flash"].description.replace(/.*\s(\d+\.\d+).*/, "$1");
		}
	}
	return version * 1; // Converts to a number
}
```

也挂了.

再看看 kissy的
[#L20](https://github.com/kissyteam/kissy/blob/6d0dd81216c17908b6c0bfdc2ea4f6a8717797c7/src/swf/src/swf/ua.js#L20)

```javascript
function getFlashVersion() {
    var ver,
        SF = "ShockwaveFlash";
    // for NPAPI see: http://en.wikipedia.org/wiki/NPAPI
    if (navigator.plugins && navigator.mimeTypes.length) {
        ver = (navigator.plugins["Shockwave Flash"] || 0).description;
    }
    // for ActiveX see:	http://en.wikipedia.org/wiki/ActiveX
    else if (win.ActiveXObject) {
        try {
            ver = new win.ActiveXObject(SF + "." + SF).GetVariable("$version");
        } catch (ex) {
            // S.log("getFlashVersion failed via ActiveXObject");
            // nothing to do, just return undefined
        }
    }
    // 插件没安装或有问题时，ver 为 undefined
    if (!ver) {
        return undefined;
    }
    // 插件安装正常时，ver 为 "Shockwave Flash 10.1 r53" or "WIN 10,1,53,64"
    return getArrayVersion(ver);
}
```

## 结论 ##
在 IE11 并且 **Adebo Flash Player 11 ActiveX** 的时候.

```javascript
typeof navigator.plugins["Shockwave Flash"]; //undefined
```

## 解决方案 ##
以swfobject为例

```javascript
if (typeof nav.plugins !== UNDEF && typeof nav.plugins[SHOCKWAVE_FLASH] === OBJECT) {
    //some code
}
else if (typeof win.ActiveXObject !== UNDEF) {
    //some code
}
else{ // IE 11 ActiveXObject == undefined
	try {
        var a = new win.ActiveXObject(SHOCKWAVE_FLASH_AX);
        if (a) { // a will return null when ActiveX is disabled
            d = a.GetVariable("$version");
            if (d) {
                d = d.split(" ")[1].split(",");
                playerVersion = [toInt(d[0]), toInt(d[1]), toInt(d[2])];
            }
        }
    }
    catch (e) {}
}
```

如果你有更好的解决办法, 也欢迎留言交流:)
