# 5分钟上手webpack

## 为什么要用webpack?
webpack可以打包js文件，可以起到项目工程化和项目模块化的目的,现在市场上的前端项目都是基于打包工具完成的,目前市场上webpack占比80%+ 

## webpack的核心
1. 配置webpack.config.js文件;

## 如何配置webpack.config.js
1. webapck接收几个重要的参数, entry, output, module, plugins

entry: 你想打包哪个文件;

output: 你准备把文件打包到哪里去;

module:  配置loader

plugins: 扩展webpack的功能

## loader的作用?
在js中默认只支持导入js和json文件,为了在js中导入一些图片,css, html文本, ts, 此时就需要用到loader;

## 常用的loader
css:   style-loader,  css-loader

img:   webpack5中自带的 asset, 如果不是webpack5,  file-loader

html:  html-loader

ts:   ts-loader

## 如何下载loader?
npm install --save-dev  <xxx-loader>

例:
``` 
    // css 
    npm install --save-dev style-loader css-loader
```

## 配置如何启动
package.json
```json
    {
        "scripts":{
            "dev": "webpack server",
            "serve": "webpack server",
        }
    }
```

## 如何启动项目?
```
    npm run dev
```
or
```
    npm run serve
```
