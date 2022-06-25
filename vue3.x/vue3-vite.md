### vue3 + vite

```javascript
1. npm install -g @vue/cli  //全局安装vue-cli命令

//注：
yarn global add @vue/cli
# 或
npm install -g @vue/cli
// 目前市场上，这种包管理工具一共有两个 一个是 npm  另一个是 yarn
// 比较快的是 yarn ,以后遇到这个yarn知道是干啥的就行；
// 知识点： 
// 1. 如果 npm install  中 有 -g   --global 等词，则可以忽略文件夹进行安装
//  -g  --global  是全局的意思
// 2.  npm install -g @vue/cli 在全局安装完以后，会自动在终端中生成一个 vue 开头的关键字
// vue create project-name
// 3. 在npm中，除了-g，常用的有 --save-dev  和 --save 
// --save-dev  ===  -S
// --save === -s
// --global === -g
// 如果你下载的包不包含这些关键字，则默认为 --save
// npm install jquery --save   ===    npm install jquery
// 4. 什么时候用--save ？ 什么时候用--save-dev?
// 5. 在你项目中引入的包都需要用--save,
// 相反，如果项目中页面上不需要引用的包，就必须用--save-dev;
// 6. 用npm install 下载的包 可以通过 package.json中的 dependencies 和 devDependencies；
```

2. 项目启动流程

   ```javascript
   1. cd <project-name>
   2. npm install
   3. npm run dev  
   //在之后的过程中，只需要 npm run dev 就可以启动项目，前两个步骤只是在第一次进公司时拉项目时才用；
   ```

3. 进入App.vue页面
   1. 删除 template，及style中无用的样式；

4. 做项目时，要引入common.css

   1. 注：common.css负责全局的公共的样式

   2. 步骤流程：

      1. 在src目录中创建 common.css  

      2. 在main.js中导入这个全局样式

         ```javascript
         import './common.css'
         ```

5. 安装路由

   1.  npm install vue-router@4

6. 配置路由

   1. 在src文件夹下新建一个router文件夹

   2. 在router文件夹下创建一个index.js

   3. 在index.js中写上

      ```javascript
      import { createRouter, createWebHashHistory } from 'vue-router'
      import Home from '../views/Home.vue';
      
      const routes = [
          {
              path:'/',  // path是路径  
              redirect:'/home',  //重定向   如果访问/结尾，就重定向到/home页面去；   
          },
          {
              path:'/home',
              component:Home
          }
      ]
      
      const router = createRouter({
          // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
          history: createWebHashHistory(),
          routes, // `routes: routes` 的缩写
      })
      
      export default router;
      ```

   4. 在src文件夹下创建views文件夹

   5. 在views文件夹创建Home.vue文件，Home文件如下：

      ```vue
      <template>
          <div>this is home page</div>
      </template>
      ```

   6. 在app.js中导入配置的router文件

      ```javascript
      import { createApp } from 'vue'
      import App from './App.vue'
      import './common.css'
      import router from './router';  // 导入router文件
      
      
      const app = createApp(App)
      app.use(router);  // use方法挂载router
      app.mount('#app');
      ```

   7. 在App.vue中加入router-view组件

      ```vue
      <template>
        <router-view></router-view>
      </template>
      ```

   8. 路由配置已完成啦！