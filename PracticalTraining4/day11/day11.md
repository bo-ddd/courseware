### day11

1. 做项目的前置要求

   1. nodejs安装好以后会在终端多两个变量， node   , npm ;
      1. node   js文件名   =  在node环境下运行js
      2. npm      node包管理工具   软件包  
         1. n:  node  
         2.  p: package 包
         3.  m :   manage  管理      

2. npm 和 360软件管理/腾讯安全管家的软件管理的区别？

   1. npm软件管理包，他只能去搜索和下载 前端的插件；
   2. 360软件管理/安全管家，他下载的是应用程序

3. 如何使用？

   1. npm init     声明node环境，会生成一个package.json的文件；
   2. npm install  PACKAGENAME       =>  安装依赖
      1. npm install PACKAGENAME  -g      global 全局安装  通常情况下，如果不是官网让你用-g ，在任何情况下都不要用-g;

4. 项目的目录结构

   ```html
   -| public   是项目上线后的一个文件内容
   -| src     source:源    源代码  就是你开发代码的地方  你开发的所有代码都应该放到这个文件夹中
   	-| assets  静态资源目录文件夹  js/css/imgs/icon/font/
   	-| components 组件
   	-| router   负责跳转页面用的  a页面 跳转到 b页面的功能；
   	-| store   vuex 状态管理  存取变量用的，你们暂时可以理解为存一些全局变量；
   	-| views 视图  写页面的地方；
       
   -| test 单元测试  （几乎没用）
   vue.config.js    //vue的配置文件
   package.json     // 包管理，  如果你想下载其它的依赖，下载完以后就可以通过这个文件进行查看；
   ```

   

5. 项目类型
   1. 单页面应用  （一个项目，如果他从头到尾，都是一个页面，就叫单页面应用）
      1. 目前来说，市场上，用vue做的页面都是单页面 
   2. 多页面应用 （一个项目，只要超过一个页面，就是多页面项目）
6. 要求：
   1. 自己可以手动创建vue-cli项目
   2. 可以实现自己创建公共样式
   3. 知道在哪个地方写页面，写逻辑，写样式；
7. 今天学习内容梳理
   1.  npm  install  安装依赖
   2. npm  uninstall  卸载依赖
   3. npm run serve  启动 vue的项目；
   4. 在HomeView.vue 中写第一个页面，js,css,html都写在一个页面中； 
   5. 样式写在template标签中
   6. js写在script标签中
   7. css写在style中
   8. 每次写项目都需要npm run serve 启动项目后才可以开发；
   9. element-ui不需要懂他是如何写的，只要能粘对就ok;
   10. 用什么组件就去elementui中找；