### 面试题

1. 说一下<span>vue-cli</span>中如何配置路由的重定向？

   答：在router文件夹下的<span>index.js</span>中的routes选项中，配置redirect选项

2. 说一下项目中如何使用<span>vue-router</span>?

   ```html
   1. npm install  vue-router 进行下载
   2. 在src文件夹中创建router文件夹,
   3. 在router文件夹下创建index.js
   4. 配置route相关参数后，导出router的实例；
   5. 在main.js中导出该配置，并用Vue中的use方法进行挂载；
   6. 在App.vue中用引入<router-view>标签
   ```

3. 说一下项目中<span>common.css</span>的理解？

   答：在项目中，通常会在<span>main.js</span>中导出一个<span>common.css</span>来初始化项目的默认样式及声明公共样式，以便在项目中的每个页面进行使用。

4. 说一下你在架构<span>vue-cli</span>项目时，都配置过哪些东西？

   ```html
   1. element-ui
   2. vue-router
   3. jquery
   4. vant
   5. axios
   6. vuex
   ```

5.  说一下对于element-ui的理解？

   ```HTML
   答： 1. element-ui是一个ui组件库，适应于 vue 和 react;
       2. element-ui 是用来做后台管理项目的
   ```

6. 说一下什么是后台管理项目？

   ```html
   答：后台管理被统称为cms，是面向B端(2b or toB or tob  or to business)用户的系统，包含了增删改查，上传，下载，导出，echats图片，及权限管理相关的功能。
   ```

   