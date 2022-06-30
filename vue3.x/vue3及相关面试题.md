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

