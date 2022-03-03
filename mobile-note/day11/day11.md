#### day11

> 今日要点：
>
> 后台项目中，增删改查，上传，下载(图片)，导出excel
>
> 学习目标：
>
> 根据自己的项目模块中的内容，说出增删改查及相关业务逻辑

### 如何判断项目的运行环境？

如何判断当前运行的环境是什么环境？  const isProduction = process.env.NODE_ENV === 'production'

> 注： npm run serve (npm run dev)的时候， 就是开发环境，  你只要 npm run build  ，这个值就是production

#### 说一说你对process.env.NODE_ENV的理解？

该变量是nodejs中，自带的一个设置环境变量的方法

#### 通常在你的项目中， product.env.NODE_ENV 都用来做哪些业务逻辑操作？

答：   根据不同的环境变量，来判断用哪个服务器的接口地址；

####  vue开发环境如何设置跨域

答：  在vue.config.js中设置proxy;

#### 你项目中如何配置环境变量和使用环境

答： 我们会单独针对 axios进行封装，利用process.env.NODE_ENV进行环境区分，针对不同的环境，去访问不同的服务器；

如果这道 题答不出来，代表你的项目根本就没有办法在线上运行；

这道题非常非常的重要

这道题非常非常的重要

这道题非常非常的重要

#####  vue项目中，在开发时，如何设置跨域

答： 会在vue.config.js中的devServe变量中，配置proxy做服务端的代理；

答法二： 会以vue.config.js中设置代理服务器；

> 在开发中，经常会有了些配置文件，比如vue.config.js   api.config.js  webpack.config.js
>
> webpack.pre.config.js   vue.prd.config.js 

#### 你刚说在介绍中说自己是从0到1开发，并且也说了自己进行了项目架构，请你说一下，你在项目中，架构了哪些内容？

1. 技术栈的选择 （elelementui）
2. 配置（动态）路由
3. proxy设置代理
4. api的封装
5. 组件维度的控制 （项目维度）
6. vuex的管理
7. 性能优化     vue.config.js 中配置一些cdn的优化， css压缩 ，图片走gzip压缩

#### 说一下在你的项目中，组件维度是如何把控的？

​	答： 我们会分为两种组件，一种是业务组件，一种是非业务组件

#### 如何配置多环境的环境变量？

在package.json文件中，多配置几个scripts的值就行；

