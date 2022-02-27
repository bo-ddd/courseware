### day8  Javascript基础面试题

1. js的基本数据类型有哪些？
   1. `Undefined`,`Null`,`Boolean`,`Number`,`String`

2. js的数据类型有几种？分别是什么？
   1.  分两种， 一种是基本数据类型，另外一种是引用数据类型

3. 引用类型包含哪些？
   1. `Object`,`Function`,`Array`,`Date`

4. Symbol的应用场景？
   1. Symbol是一个常量，一般应用于模块化听项目
   1. 用变量接收symbol的值，在当前模块化中使用；

5. undefined、null的区别？
   1. undefined是未定义， null是空
   2. 比如写vue时，data中的对象，一般声明都是null，而不是undefined的

6. parseFloat，parseInt的使用场景？
   1. 通常会在计算价格的时候都会用parseFloat来写
   2. parseFloat应用于项目中的价格计算
   3. parseInt应用于将服务端传过来的字符串格式的数字转换成数字
   4.  例如：服务端传的是 orderId:'1'     前端用 parseInt(orderId)
   4.  场景二： 或者服务端要的是数字，但是input框中拿到的数字是字符串格式类型的，这时候就应该用parseInt或者parseFlat转一下；

7. js的小数计算不准确的原因是什么，项目中如何解决？
   1. 为了解决计算机无限不循环小数的问题，js底层针对数字进行了内存划分，在某种情况下，就会导致出现计算不准确的问题；
   2. 通常情况下，我们在项目中的价格计算中，因为都是小数，所以通常，我们会把价格的值 放大100倍，计算完毕后在缩小100倍；
   3. 例： 比如购物车页面的商品价格统计就会遇到小数问题

8. 如何保留两们小数？
   1. toFixed(2)

9. json文件中格式定义的注意事项？
   1. json中的key必须用双引号，不然会报错

10. 字符串常见算法？  非常重要 非常重要 非常重要

11. ==和===的区别？

    相等 和 全等

12. typeof运算各种值？
    1. typeof 'hello word'
    2. typeof 13
    3. typeof null
    4. typeof undefined
    5. typeof function
    6. typeof array

13. 如何判断某个变量是什么类型？(项目中都是用这条语句来判断类型的，几乎没有人用typeof)
    1.  Objet.prototype.toString.call(obj).slice(8.-1);  // String Function Object Number
    2. Array.isArray(obj)  //判断arr;

14. 判断对象是否一个空对象？
    1. Object.keys(obj).length

15. 校验是否为空数组？ 
    1. Array.isArray(obj) && !obj.length
    2. arr instanceof Array && arr.length===0

16. switch在项目中的应用场景？
    1. switch 的判断语句都是等值，如果不等值，就应该用if;
    2. res.data.status == 1 或者  res.data.msg == 'succes' //  用if 多语句判断

17. 原型链的理解？
    1. prototype是什么？  
    2. **——proto——** 和 prototype 的区别及作用是什么？
    3. this指向相关的问题

18. 构造函数的项目应用？
    1.  动画类？  解析服务端的数据，统一处理；

19. 构造函数的具体使用规则 ？
    1.  把属性声明在constructor中，把方法声明到prototype中；

20. 原型链的顶层是 null;  

21. Vue数据双向绑定的底层实现原理？
    1. Object.definePropery

22. 说一下对Object.defineProperty的了解？
    1. Vue底层就是用defineProperty来实现的
    2. 该方法中提供一个setter和getter方法来兼听数据的变化
    3. 起到了数据劫持的作用
    4. 除此之外此方法还可以设置数据是否可枚举，是否可访问等操作 

23. 一个被new的函数内发生了什么事情?
    1. Object.create(null);

24. var obj = {}    Object.create(null)这两种写法有什么区别？

25. 原型链解决的问题？
    1. 工厂模式带来的问题，使用原型链可以解决；

26.  数组中常用的方法？  （6种以上）

    1. map  生成一个新数组
    2. filter  过滤并返回一个复合条件的新数组
    3. forEach 循环没有返回值
    4. find 查找一个复合条件的值；
    5. push
    6. shift 
    7. unshift 
    8. pop

27.  怎样求数组中的最大值与最小值?

28. 怎么求出数组中重复的最少的值？

29. 怎样求出数组中最大，且没有重复的值？

30. 数组变量的方式有哪些？

31. for循环和forEach的区别是什么？

    1.  for循环可以中断循环，forEach不可以；

32. array中indexOf和find的什么区别？

    1. 一个是es5，一个是es6;

33. 怎样获取数组中最多的元素?

    1. 桶排      桶排序

34. arguments是什么？应用场景？

    1. arguments是方法体中一个字带变量，该变量是一个伪数组，他接收的是形参个数的集合；
    2. 在vue中会用一个$bus的仓库，其中emit底层实现方案就是用到了arguments,因为他要接收无限个参数；
    3. 例如：bus.emit('onclick',param1,param2,param3,param4....)

35. 什么是变量提升，什么是函数提升

36. 作用域？

37. 闭包

38. call()函数，apply( )函数，bind( )函数的使用与区别

    1. call ， apply  bind都是改变this指向
    2. call (this，后面的参数是以逗号分隔)      fn(this,1,2,3,4,5,6,7,8,9)
    3. apply(this,[1,2,3,4,5,6,7,8,9])
    4. bind(this) 改变this,指向，但是不调用这个方法；

39. 如何解决回调地域？

40. promise的作用？ 

41. promise.all的作用？

42. await async的使用方法及使用场景？

43. es6新增了哪些内容？

    1. 增加了数组中常用的方法，对象中也加入了一些方法  Object.keys()  Object.assign()
    2. Promise,  await async
    3. class

44.  你说一下Promise和await async的理解吧？

    1. Promise是解决回调地狱的一种方案
    2. axios是基于Promise实现的
    3. 在我们的项目中，通过对服务端接口的封装api.js ，在页面中可以直接用await async来完美的解决异步问题；

45.  构造函数和class的区别？

    1. 构造函数 是es5   class是es6;
    2. 构造函数兼容性好  class不兼容ie8以下；
    3. class继承非常方便， super() 可以继承;   构造函数的继承方案就不完美
    4. 构造函数    Parent.call(this,props);  //  也有一些问题；
    5. Children.prototype = Parent.protoype;
    6. Children.prototype.constructor = Children;

46. 字符串的常用方法？

    1. slice,     应用场景：  判断数据类型的时候  Object.protoype.toString.call().slice(8,-1)
    2. replace  : 应用场景：  158****3615  脱敏数据   脱离第三信息数据
    3. substr 
    4. substring
    5. indexOf    
    6. charat 

47. 谈一下对promise的理解？

    1. 解决回调地狱的问题

48. 你在项目中用到过promise吗？

    1. 几乎不用，因为在我的移动端（或者是PC端）中，我们是利用 axios + await async来解决回调地狱的；
    2. axios底层就是基于promise来封装的，

49.  你项目中用到过axios吗？

    1. 是的，用到过，在公司当中，我们用到了axios， axios是访问服务端的必须条件，如果不访问他，就没有办法和服务端进行交互；

50.  请你说一下axios的理解？

    1. axios是基于Promise的封装，内部封装了ajax,可以解决异步回调地狱的问题；
    2. axios常用方法是 axios.get()   和  axios.post();
    3. 在项目中，通常会把服务端的接口api进行封装，封装到api.js中；
    4. 调用时利用async + await  实现   比如   await api.getUserInfo();

51.   请你谈一下对ajax的理解？

    1. ajax是针对 XmlHttpRequest方法的封装； 
    2. ajax实现了页面局部刷新的问题；

52.   手动封装一个ajax？

    ```javascript
    function ajax(params){
        const { type = 'GET', url, data = {}, success, fail } = params;
        var xhr = new XMLHttpRequest();
        xhr.open('get','www.baidu.com',false);
        xhr.onload = function(){
            if(xhr.status == 200){
                success(JSON.parse(xhr.responseText);
            }
            xhr.send(data)
    }
                           
    //正常的使用
    ajax({
       type:'POST',
       url:'/user/login',
       data:{
           username:'xiaoming',
           password:'999999'
       },
        success:function(res){
            console.log(res);
        },
        fail:function(err){
            console.log(err);
        }
    })
    
    // axios的基本实现方案；    
    class Axios{
        constructor(props){
            
        }
        
        post(url,params = {}){
            return new Promise(function(resolve,reject){
                ajax({
                    url,
                    type:'POST',
                    params,
                    success:function(res){
                        resolve(res);
                    },
                    fail:function(err){
                        reject(err);
                    }
                })
        	})
        }
    }
    
    // axios的使用
    axios.post('/users/info',{
        username:'xiaoming',
        password:"0000000000"
    }).then(res=>{
        console.log(res)  // axios 底层实现原理；
    })
    
    // await  async  ＋ axios 的应用
    (async function(){
        let res = axios.post('/users/info',{
            username:'xiaoming',
            password:"0000000000"
        })
        console.log(res)  //服务端返回的数据；
    })()
    
    // 项目中的应用
    // 1. 创建一个api.js   api.js会统一管理这些接口；
    import Axios from './axios';
    let axios = new Axios();
    const Api = {
        getUserInfo(params = {}){
            return axios.post('user/info',params);
        }
    }
    import default Api;
    
    
    //  Home.vue
    var vm = new Vue({
        async mounted(){
            let userInfo = await Api.getUserInfo({
                username:'xiaomign',
                password:"0000000000"
            });
        }
    })
    ```

    

