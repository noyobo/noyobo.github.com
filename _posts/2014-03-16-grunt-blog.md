---
layout: post
title: 使用Grunt构建项目
tags: blog
---

今天花点时间把博客模版更改到使用 grunt 打包静态资源文件。

自己构建 grunt 项目有个初步了解了吧。 http://gruntjs.cn/getting-started/

实践还是检验文档的最佳方式， 平时做的项目都是使用[grunt-clam](https://github.com/yinqiao/grunt-clam)
[generator-kissy-cake](https://github.com/abc-team/generator-kissy-cake)自动创建了。

看这些项目里都的 Gruntfile.js 也可以学到一些写法。

比如，我只项目中经常要对更改的点 做 git commit 。 比较常用的命令
```javascript
exec: {
	commit:{
        command: function(msg){
            var command = 'git commit -m "' + msg + ' '+ grunt.template.today("yyyy-mm-dd HH:MM:ss") + '=>' + grunt.config( 'repoVersion' ) + '"';
            return command;
        }
    },
    add: {
        command: 'git add .'
    }
}

grunt.registerTask( 'commit', function(msg){
    var msg = msg.replace(/\_/g, " ");
    grunt.task.run( ['exec:add', 'exec:commit:' + msg ] );
});
```

这样就可以使用 `grunt commit:add_something`  由于无法直接使用空格， 我采用 replace 处理。

还有  kissy－cake 里的 new_branch 也很有用， 自动修改 version 根据参数创建

```javascript
exec :{
	new_version: {
	    command: function(){
	    var current = grunt.config( 'repoVersion' ) || '0.0.0';
	    var EX = /(\d+)\.(\d+)\.(\d+)/;
	    var ret = EX.exec( current );
	    var newVersion = '';
	    if( grunt.option( 'major' ) ){
	        newVersion = (++ret[1])+'.0.0';
	    }
	    else if( grunt.option( 'patch' ) ){
	        newVersion = ret[1]+'.'+ret[2]+'.'+(++ret[3]);
	    }
	    else {
	        newVersion = ret[1]+'.'+(++ret[2])+'.0';
	    }
	    // 更新abc.json中的version字段
	    FS.writeFileSync( 'abc.json', FS.readFileSync( 'abc.json' ).toString().replace( /"version"\s*:\s*"(\d+\.\d+\.\d+)"/, '"version": "' + newVersion + '"' ));
	        return 'git checkout -b ' + 'daily/' + newVersion;
	    }
	}
}
```

命令 `$ grunt newbranch --patch` 则 version 0.0.1 => 0.0.2  很便捷。 工作中都可以建立自己常用都命令。

针对博客模版， 我建立的 [Gruntfile.js](https://github.com/noyobo/noyobo.github.com/blob/master/Gruntfile.js) 做了简单的压缩，和发布命令， 主要是mac下构建 sass 更方便些。