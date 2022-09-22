# nvm

## 简介
在实际的前端开发过程中，可能会经常遇见 node.js 的版本问题，不同的项目需要使用不同的 node.js 版本。

直接安装的话，只能安装和使用 node.js 的一个版本。可以使用 nvm 来安装和管理不同版本的 node.js。

nvm 是 Mac 下的 node.js 管理工具。可以通过 nvm 安装和切换不同版本的 node.js。在 Windows 下面，可以使用 nvmw 或者 nvm-windows

> 如果有安装过node，最好进行卸载，因为自己安装的，nvm控制不了，会出现一些意想不到的报错，先安装nvm，再使用nvm命令安装需要的版本即可！

## Windows 下 nvm 安装
```
    安装步骤如下：（亲测可用）
    到 github 上面下载。下载地址：https://github.com/coreybutler/nvm-windows/releases
    下载完 nvm-setup.zip 之后解压，解压出来一个 nvm-setup.exe 文件
    双击安装
    打开 cmd ，输入 nvm 验证是否安装成功

    备注：
    nvm-noinstall.zip ：绿色免安装版，但使用时需进行配置。
    nvm-setup.zip ：安装版，推荐使用
    node.js 安装路径（就是以后下载的不同版本 node.js 的安装路径，推荐不要放在 C 盘，不要有空格、特殊字符等）
```

## 常用命令
```
nvm ls ：列出所有已安装的 node 版本
nvm list ：列出所有已安装的 node 版本
nvm list available ：显示所有可下载的版本
nvm install latest：安装最新版 node
nvm install [node版本号] ：安装指定版本 node
nvm uninstall [node版本号] ：删除已安装的指定版本
nvm use [node版本号] ：切换到指定版本 node
nvm current ：当前 node 版本
nvm unalias [别名] ：删除已定义的别名
```

最好的安装的时候就把安装目录修改，不要在C盘，不要在C盘，不要在C盘。。。（重要的事情说三遍！！！）
