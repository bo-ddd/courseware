### day12

1.  跳转页面时可以用 this.$router.push进行跳转， 

   ```javascript
   this.$router.push({
       name:'login',   //路由的名称
       query:{
           id:1   // 可以用query方法传参
       }
   })
   
   //上述代码就相当于跳转到
   //http://localhost:8080/login?id=1  
   ```

   

2.  子路由的配置

   1. 就是把页面中的子页面，配置到router/index.js中对应的 路由的 children中；

   ```javascript
   var route = [
       {
           path:'/',
           component:Home,
           children:[
               {
                   path:'/about',
                   name:'about',
                   component: ComponentName
               }
           ]
       }
   ]
   ```

   