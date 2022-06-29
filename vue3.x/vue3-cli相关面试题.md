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

   答：在项目中，通常会在<span>main.js</span>中导入一个<span>common.css</span>来初始化项目的默认样式及声明公共样式，以便在项目中的每个页面进行使用。

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
   答：后台管理被统称为cms，是面向B端(2b or toB or tob  or 'to business')用户的系统，包含了增删改查，上传，下载，导出，echats图片，及权限管理相关的功能。
   ```

7. 说一下对2b和2c的理解？

   ```html
   答：1. 2b 指的是 to business ，指的是面向商户；
   2. 2c 指的是 to client , 指的是面向客户；
   项目使用的人群不一样；
   注： 并不是PC端就是2b的项目， 移动端也可以有toB的项目，只是比较少；
   ```

8. 说一下在项目中toB和toC的项目有什么区别？

   ```html
   答： 1. toB的项目，要求样式标准不高，业务逻辑能力要求较强，不需要优化太多的客户体验，应该以功能点出发；
   2. toC的项目，要求更高的样式要求，及客户体验感为主；
   ```

9. 说一下在cms中，项目所用的技术栈有哪些？

   ```html
   答： 
   ```

   