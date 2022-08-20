> 导读： 在我们开发中，经常会安装一些依赖，比如 npm install xxx,有时会发现非常慢，那这是什么原因呢？

## npm下载慢的原因？
因为当我们npm install下载包时， 我们会从一个 源地址中去下载这个包文件，这个源地址有可能是外的地址，所以就会造成我们下载时非常的慢;

那我们是不是只要切换到一个快点的 下载源，下载速度是不是就可以快点了呢？ 答案确实如此;

## nrm
nrm 是一个 npm 源管理器，允许你快速地在 npm源间切换。

什么意思呢，npm默认情况下是使用npm官方源（使用npm config ls命令可以查看），在国内用这个源肯定是不靠谱的，一般我们都会用淘宝npm源：https://registry.npm.taobao.org/，修改源的方式也很简单，在终端输入：

```
    npm set registry https:/;registry.npm.taobao.org/
```

## nrm的安装
```
    npm install -g nrm
```

## nrm使用

1.查看当前可选的源地址
```
    nrm ls
```
 命令展示效果,星号代表当前使用的源
```
    * npm ---- https://registry.npmjs.org/
      cnpm --- http://r.cnpmjs.org/
      taobao - https://registry.npm.taobao.org/
```

2.查看当前源
```
    npm current
```
命令展示效果
```
    npm
```

3.切换源
```
    nrm use <registry>
```
比如切换taobao源
```
    nrm use taobao
```

4.添加源, 有时候公司内部会有自己的源来下载自己项目中的依赖，所以需要自己手动添加并修改源
```
    npm add <registry> <url>
```
其中，registry为源名，url为源地址。

比如：添加一个公司私有的npm源，源地址为：http://192.168.22.11:8888/repository/npm-public/，源名为cpm（随意取）。
```
    nrm add cpm http://192.168.22.11:8888/repository/npm-public/
```

5.删除源
```
    nrm del <registry>
```
其中，registry为源名。

比如：删除刚才添加的cpm源
```
    npm del cpm
```
测试源速度
```
    nrm test <registry>
```
例:
```
    npm test npm
```

命令展示效果
```
    npm ---- 819ms
```

注: 

1. 常用的命令是切换源  nrm use <registry>