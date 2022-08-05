### 总结

1. 响应式的底层原理是基于什么实现的？

   ```javascript
   //答：vue2.0是基于 Object.defineProperty
   //vue3.0是基于 new Proxy()
   ```

2. 你知道vue2.0 和 v3.0的区别是什么？

   ```javascript
   // 答： 一个是基于 Object.defineProperty;
   // 另一个是 Proxy()来实现的；  proxy:代理的意思  
   vue3 使用组合式api, 使用什么方法就可以按需引入这个方法,因此打包体积较小，速度更快，
   vue2 采用声明式,所以vue2中所有的方法都挂载在Vue实例上，体积较大
   vue3 底层是用ts来写的,对ts的支持更加的友好;
   ```

3. vue-cli中如何解决跨域？ or  在开发时如何解决跨域？

   ```javascript
   //答： 在vue.config.js中 配置proxy;
   ```

4. 在开发的时候是配置vue.config.js，那你项目上线时是怎么解决跨域的？

   ```javascript
   //后端解决；  or  后端设置请求头解决跨域；
   ```

5. vue中的钩子函数有哪些？      or      vue中生命周期有哪些？

   ```javascript
   //beforeCreate  
   //created 
   //beforeMounte 
   //mounted 
   //beforeUpdate 
   //updated 
   //beforeActive  
   //activated  
   //beforeDestroy 
   //destroyed
   ```

6. 通常情况下，打开页面时需要的逻辑写到哪个钩子函数中？

   ```javascript
   //created 或者 mounted
   ```

7. created 和 mounted的区别？ 

   ```javascript
   //created是挂载了this.data
   //mounted : 渲染了dom;
   ```

8. v-bind的作用及理解？

   ```javascript
   //给元素属性绑定动态的值
   //v-bind的简写方式是 :
   ```

9. 说一下元素的自定义属性（自定义指令）实现原理是什么？

   ```html
   答： 获取当前元素的attribute属性，看看是否为v-开头，如果是，就利用正则表达式，取值并写出对应的逻辑；
   ```

10. mvvm中的vm是什么意思？ or     说一下对数据双向绑定的理解？

    ```javascript
    答： vm 指的是数据变视图变， 视图变数据变；  
    ```

11. v-bind 和 v-model的区别？

    ```html
    v-model作用于form表单，应用于视图改变数据；  比如在使用elment-ui中，几乎所有的input框 下拉框  多选框，单选框绑定的值都是v-model;
    v-bind 是绑定动态的值   是数据变这个值变；
    ```

12. 


1. 用户打开页面，生成一个随机数 0-100
2. 用户在input框中输入数字，点击确定
3. 对比随机数，如果大/小了，就提示用户 “刚才你猜低/高了！”， 并且将input框中的值清空
4. 如果用户猜了10次，还没有猜对，则提示用户，游戏结束 Game Over


姓名 年龄  上学时长  
js html  css 时长 
现在会些什么

1. 贾佳佳   19  12  js6  htmlcss3 
2. 高小亮   17  24(48)  10js  htmlcss14
3. 朱鑫鹏   20  5(3线下)  js2  htmlcss1
4. 申少杰   22  8       js7  htmlcss1
5. 宋巍     24  12（请了6个月假）  js2  htmlcss4
6. 段林君   19  12  js6  htmlcss3 
7. 马烙烜   24  5   htmlcss2 js2 自学vue  promise
8. 朱江艳   19  10    htmlcss3-4  js7
9. 周永峰   17  16   htmlcss6+  js3-4
10. 刘方建  22  6  js2 htmlcss1  
11. 张良    18  24(还有24)  js20+   htmlcss2-3
12. 王瑞坤  19  12+   js6+  htmlcss9
13. 王鹏程  26  5+   js2   htmlcss2  1自学vue;
14. 李小洋  18  12+  js6   htmlcss3  vue1
<!-- vue  v-if v-show  v-text v-bind  v-model  -->

<!-- 数组 字符串 -->
let str = 'hello world';
<!-- 翻转字符串 -->
let res = fn(str) //dlrow olleh 
console.log(res)  //dlrow olleh

<!-- map 入参  返回值  -->
var arr = [1,23,12,3,12312];
let res = arr.map(item=>1)
<!-- console.log(res) // [undefined,undefined,undefined,undefined,undefined] -->
console.log(res)  // 1   [1,1,1,1,1]
<!-- filter find -->
<!-- filter : 找到所有满足需求的数据，重新生成一个新的数组 -->
<!-- find： 找到符合要求的那一项 -->


<!--  -->

<!-- css  -->
<!-- 未知大小的盒子，水平垂直居中 -->

<!-- 绝对定位 如何实现？-->
<!-- left:50% top:50%  transform:tranlate(-50%, -50%) -->
<!-- 弹性盒 -->
<!-- 网格 -->

<!-- 移动端适配方案 -->
<!-- rem, vh vw, calc  -->

<!-- computed watch的区别？ -->
<!--  -->
var vm = new Vue({
   data:{
      username:'xiaoming'
   }
})

var vm = new Vue({
   data(){
      return {
         username:'xiaoming'
      }
   },
   computed,  // 说一下computed的作用？
   filters,  //说一下filters的作用？
})

<!-- 点餐  电商 -->
<!-- 如何配置路由route -->
<!-- path:'home' -->
<!-- src/views/Home.vue -->
import Home from '@/views/Home.vue';
const routes = [
   {
      path:'/home',
      component: Home
   },
   {
      path:'cart',
      component: ()=> import(/* webpackChunkName cart */,'@/views/Home.vue')
   }
]

<!-- element-ui 引入 -->
<!-- npm install element-ui --save   安装-->  
<!-- import ElementUI from 'element-ui'  main.js -->
<!-- app.use(ElementUI) -->

<!-- --save -->

<!--  -->
let vm = new Vue({

})


<!--  -->
vue   computed  watch 
created mounted
v-if  v-show的区别 
<!-- v-if 动态创建元素  createElement -->
<!-- v-show  display:none -->

<!-- vue -->
<!-- Home.vue -->
<!-- 当打开页面时，调用 user/info 获取用户信息 -->
<!-- 点击页面确定按钮 把 user/info 中的 用户名username 和 age发送给 服务端 /update/user/info -->

<!-- 在created中调用user/info接口，拿到用户信息，存到data中， 在methods中声明一个点击事件的方法，用户点击这个按钮，把 { username,age}  /updata/user/info -->

<!-- axios 请求拦截器和响应拦截器 -->

<!-- 如何配置路由及子路由？ -->
<!-- src/router/index.js   在这个js中有一个routes的变量，该变量是一个数组， 接收的每一项是一个json,  { path,name,component,children } -->


<!-- arr  push shift unshift sort concat toString forEach -->
<!-- concat -->
var arr1 = [1,23,12,312];  
var arr2 = [12,31,23]
var arr3 = arr1.concat(arr2); // [1,23,12,312,12,31,23];
var arr4 = [...arr1,...arr2];
<!--  sort 方法 -->
let arr6 = [
   {
      id:3,
      label:'xiaoming'
   },
   {
      id:1,
      label:'xiaohong'
   }
]
let res = fn(arr6);  //[1,3]  升序排列;


<!-- forEach也不会用   forEach没有返回值 -->
<!-- forEach  item 你不知道是啥   arr[item.id]-->
<!-- sort不会用 -->
<!-- 箭头函数也不会用 -->
<!-- return -->
function fn(arr){
   return arr.sort((a,b)=> a.id - b.id);
}


<!-- Parent.vue -->
<template>
   <div>
      <el-children @cons="handleClick"></el-children>
   </div>
</template>
<script>
   export default {
      methods:{
         handleClick(num){
            conosle.log(num) // 1
         }
      }
   }
</script>

<!-- Chilren.vue -->
<template>
   <div @click="handleClick">按钮</div>
</template>

<script>
   export default {
      handleClick(){
         this.$emit('cons',1)
      }
   }
</script>

<!-- js -->
var vm = new Vue({
   data,
   props, //父传子     子传父$emit
   methods,
   computed,
   watch,
})

<!-- vue 能做出啥东西？ -->
<!-- axios -->
<!-- ajax => xmlhttrequest -->
<!-- axios => axios + promise -->
class Axios{
   constructor(){

   }

   post(url,params){
      return new Promise((resolve,reject)=>{
         this.ajax({
            url,
            params,
            success(res){
               resolve(res);
            },
            fail(err){
               reject(err);
            }
         })
      })
   }

   axios(options){
      let { url, methods = 'POST', success, params = {} } = options;
      let xml = new XMLHttpRequest();
      xml.open(methods, url, true);
      xml.onload = function(){
         if(xml.status == 200){
            success(JSON.parse(xml.reponseText()))
         }
      }
      xml.send(params);
   }
}

//  接口名 获取用户信息 /user/info  
let axios = new Axios();
axios.post('/user/info',{}).then(res=>{
   console.log(res)  // 服务端返回的结果
})


//如何判断字符串？

<!-- 点餐 -->

Home.vue
<template></template>

<script>
   export default {
      data(){
         return {
            usenrame:'xiaoming'
         }
      }
   }
</script>

<style scoped></style>



var vm = new Vue({

})

<!-- h5 -->
<!-- vant vue vue-router axios  -->
<!-- h5适配  1rem = 30px -->
<!-- html元素加一个font-size = 30px -->

<!-- js常用的数组方法有哪些？ -->
<!-- push pop shift splice sort filter  -->
<!-- sort -->

let arr = [
   {
      id:1,
      number:10
   },
   {
      id:2,
      number:15,
   },{
      id:3,
      number:4
   }
]
let res = fn(arr);  // [4,10,15]
console.log(res)
function fn(arr){
   let res = [];
   for(let i = 0; i < arr.length;i++){
      res.push(arr[i].number);
   }
   res.sort(function(a,b,c){
      return a - b;
   })
}

let obj = [
   {
      id:1,
      label:'xiaoming'
   },
   {
      id:2,
      lable:'xiaohong'
   }
]
let res = fn(obj);
console.log(res) // ['xiaoming','xiaohong']

function fn(arr){
   let res = [];  
   arr.forEach(item=>{
      res.push(item.label);
   })
   return res;
}

function fn(){
   let res = 1;
   return {  num : res };
}

let obj = fn();
console.log(obj.num)  // 1;

let str = fn('hello world').substring(1);  // ello world;
console.log(str)  //ello world;

function fn(str){
   return str;
}



$ajax({
   method:"POST",
   url:'/user/info',
   success(res){
      console.log(res.data);
   }
})
//  js  html css 
// dom bom   
let arr = [12,3,12,3,12,3,1,23,123];
// for xunhuan   找到比10大的数的集合;
let res = fn(arr) 
console.log(res)  //找到比10大的所有的集合

return   for循环
function fn(arr){
   var res = [];
   for( let i = 0; i < arr.length; i++ ){
      if(arr[i] > 10){
         res.push(arr[i]);
      }
   }
   return res;
}

<!-- css 定位有几种 -->
<!-- 绝对定位  -->
<!-- 固定定位  -->
<!-- 双飞翼布局 -->
<!-- 两翼固定宽，中间自适应 -->
<div>
   <div></div>
   <div></div>
   <div></div>
</div>

<!-- js 对json的理解 -->
<!-- json是由什么组成的?  key value  json是由键值   键值对 -->

<!-- this 指向 -->
class Vue{
   constructor(options){
      console.log(options)  //
      this.username = options.data.username;
   }
}


let vm = new Vue({
   data:{
      username:"xiaoming"
   }
})
console.log(vm.username) // xiaoming;

<!-- pc 快餐  h5 电商 -->
<!-- element-ui  v-model  v-text  v-bind v-html -->
<!-- v-model  form表单上的  input  textare -->
<!-- v-bind   <div v-bind:data="arr"> -->
<!-- v-text  {{}} -->

<!-- 布局分为几种 -->
<!-- 网格 -->
<!-- 浮动 -->
<!-- 弹性盒 -->
<!-- table -->
<!-- 定位 -->

<!-- 盒模型 -->
<!-- 说一下应用场景   标准 =>  怪异盒 -->
<!-- 如果一个盒子有固定宽,并且有padding的时候,就需要转怪异盒 -->

<!-- created,mounted -->

<!-- js 属性  方法 -->

<!-- js 函数的种类？ -->
<!-- 普通函数 -->
<!-- function fn(){} -->
<!-- 自执行函数 -->
<!-- function fn(){}() -->
<!-- 箭头函数 -->
<!-- fn()=>{} -->
<!-- 匿名函数的作用？ -->
<!-- function(){} -->


var arr = [1,2,3,41,2,31,2,31,23];
<!-- arr.filter((item,index,arr)=>{  return item > 10}) -->

arr.filter(item=> item > 10);

arr.filter(function(item){
   return item > 10;
})

arr.filter( (item,index,arr)=>{
   return item > 10;
} )

<!-- 函数表达式 -->
<!-- 回调函数 -->
<!-- 高阶函数 -->


<!-- 封装一个方法   封装一个函数 -->
<!-- function fn(){} -->



<!-- 高小亮 -->
<!--  -->


