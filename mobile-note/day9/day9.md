###  day9

> 1. ajax
> 2. http
> 3. 登录模块
> 4. vue

### ajax

概念：  ajax 是 基于 XMLHttpRequest 类封装而成的

ajax的封装 ：

```javascript
//1. XHR 可以理解成一个浏览器
var xhr = new XMLHttpRequest();
// 2. open :打开      xhr.open  打开一个浏览器，输入网址，网址是： www.baidu.com;
xhr.open('GET','www.baidu.com',false);

// 4 onload 服务器的响应，页面是否打开   onload:加载完
xhr.onload = function(){
    //状态码  status:状态   xhr:浏览器    浏览器返回当前页面地址连接的状态
    if(xhr.status == 200){
        //页面已经成功打开，可以写自己的业务逻辑了；
        console.log(xhr.responseText);
    }
}
// 3 send：发送    xhr.send  在浏览器中按下回车，跳转对应的地址；   // 这个地址肯定是需要延迟的，
xhr.send();


$.ajax({
    url:'',
    type:'',
    data:'',
    success:function(res){
        //服务端的接口定义，通常情况下，就是这种结构
        // 服务端的接口，通常95% 都是POST请求
        // 只有在访问一些图片，一些验证码相关的请求时，会是 GET请求；
        
        //服务端返回的数据结构定义格式:
        const res1 = {
            status:1,    //1： 代表成功  0：失败
            message:'该定单提交失败，  该用户名不正确！',
            data:[
                {
                    orderId:1,
                    orderName:''，
                    productList:[
                    
                    ]
                }
            ]
        }
        if(res.status == 1){
            //数据返回成功，在这里写自己的业务逻辑；
        }
    },
    fail:function(err){
        console.log(err);
    }
})

function ajax(params){
    const { url, type = 'GET', data, success, fail } = params;
    //1. XHR 可以理解成一个浏览器
    var xhr = new XMLHttpRequest();
    // 2. open :打开      xhr.open  打开一个浏览器，输入网址，网址是： www.baidu.com;
    xhr.open(POST,url,false);

    // 4 onload 服务器的响应，页面是否打开   onload:加载完
    xhr.onload = function(){
        //状态码  status:状态   xhr:浏览器    浏览器返回当前页面地址连接的状态
        if(xhr.status == 200){
            //页面已经成功打开，可以写自己的业务逻辑了；
            let res = JSON.parse(xhr.responseText);
            success(res)
        }else{
            fail(xhr.responseText)
        }
    }
    // 3 send：发送    xhr.send  在浏览器中按下回车，跳转对应的地址；   // 这个地址肯定是需要延迟的，
    //  data是传给服务端的数据（POST请求）
    xhr.send(data);
}
```

### 你了解过哪些状态码？

​	2xx： 代表成功

​	3xx :   重定向

​    4xx :   客户端错误， 

 	5xx:   服务端问题        路由找到了， 但是服务端写的代码有问题，造成该接口方法报错，就会出现这个状态码；

### 你知道的状态码有哪些？

1. 200 成功
2. 301 302   重定向 
3. 304  未修改 缓存  第一次请求网站的图片时，会去服务器上加载， 加载完以后，浏览器会把当前图片的资源放在C盘的缓存文件夹中，下次用户在访问这个资源时，直接从缓存文件夹中获取，状态码就是304
4. 400 客户端请求的语法错误，服务器无法理解
5. 401  请求要求用户的身份认证     不认可身份 ，未登录 或者登录失效
6. 403   服务器理解请求客户端的请求，但是拒绝执行此请求，没有权限   ，在B端中，只有供应商才可以看到自己店铺的配置相关的内容，假如有一个客户直接进到当前店铺的配置页是不正常的，客户拿到当前供应商店铺的地址，之后服务端进行权限校验，如果没校验通过，就返回403 ,意思是，您没有权限来访问该供应商的店铺配置模块
7. 404  一般情况下，就是前端接口配置地错误，没找到路由，或者没找到到这个接口；   或者说服务端把接口文档的接口名给写错了。
8. 500  服务端错误 
9. 501  服务端错误   

> 注意事项：  状态码必须要答出来，如果答不出来，面试官会认为你不会和服务端连调；
>
> 非常重要
>
> 非常重要
>
> 非常重要

### GET和POST的参数如何拼接

1. get请求是拼接在网址的?后
2. post请求是放到send方法中；

###  项目中是这么用的吗？  这样封装的使用场景在哪里？

答：  之前封装过ajax，但是最后有了jquery，用的就是jquery中的$.ajax()这个方法

咱上边讲的那个，其实是jquery中ajax底层实现的方案；

项目中实计用的ajax 其实是 axios;

#### 你会手写ajax吗？

答：  ajax是基于XmlHttpRequest方法封装的，通过 open  send  onload 方法实现， 其实在xhr中，通过判断 xhr.status == 200 来判断接口是否返回成功；成功以后做自己的逻辑操作；

#### 此ajax封装的方法存在兼容性问题吗？

答： 存在，该方法不兼容ie8及以下浏览器，因为微软已经放弃对ie8的维护，所以没有考虑过此兼容问题；

##### 我们公司就要兼容到ie8？ 你可以实现吗？

答： 这个去网上一查就可以解决， 并且呢，我的开发经验，可以让我在写代码的时候，直接兼容ie8及以下浏览器；

#####  你如何保证你的项目中的兼容性呢？

答： 如果项目中需要兼容到ｉｅ８，那我们可以从css，js，html方面来做兼容；

#####  那你说一下css有哪些兼容性？如何来做？

答：  因为ie8不支持c3相关的新属性，比如flex,grid,showdow ,在我们的项目中可以避免使用这些布局；

#####  你刚才提到了grid布局和flex布局，你觉得他们有什么区别呢？

答：  flex布局适用于xxx， 我们在xxx情况下，用grid ，比如我们的项目中，某个场景中，就用到这些。		



####  说一下Http的理解 ？

```javascript
var params = {
    username:'xiaoming',
    password:999999
}
axios.post('/user/login',params).then(res=>{
    console.log(res);
    //误区：   前端 -》 服务端  =》  前端；
    // 中间少了一个快递小哥  传递信息的人
    //  前端  把运输的资源给了 快递小哥  
    // 快递小哥 运载着  资源  给服务端 ；
    //  服务端收到请求， 把对应的返回的资源 在给快递小哥
    // 快递小哥 在把服务端 给的东西，传给前端
    
    前端 把一卡车（2d）送给了快递；
    快递小哥就把这种情况反馈了 快递公司， 快递公司制定了一个制度
    你只能给我放  空间小于 50平方之内的，且重量不能超过 50kg的，不能易碎的
    
    //我们把这种制度 用json表达出来；就变成了这样
    var request = {
        //请求头  request
        header:{
            url: 'www.baidu.com/user/login'
            place: '< 50',
        	weight: '< 50kg',
        	type: '!易碎',
        },
        //请求体
        body:[
            {
                goods:'手机',
                type:'白色',
            },{
                goods:'手机'，
                type:'黑色'
            }
        ]
    }
    
    var response = {
        info:{
            Request URL: 'www.baidu.com/user/login'
            Request Method: GET  // method:"空运， 海运"
            Status Code:  200   // 物品是否运送成功  304  送到了一半  888  已签收
            Remote Address: 114.250.63.38:443  // 发货地址  
        }
        //返回头 
        header:{
            access-control-allow-origin: 'www.baidu.com'   // 是否允许跨域     可以简单理解成，商品是否支持运送到国外去；  非常重要非常重要
        	cache-control：no-cache, must-revalidate  // 不缓存
        	content-length: '' //请求中的长度  可以理解成当前快递的重量；  weight :50kg;
        	content-type: ''  //服务端接收的方式和解析数据的方式   application/json;  吃的/ 电子产品
        },
        //返回体
        body:{
        status:1,
        msg:'',
        data:[]
    	}
    }
    
    var res = {
        status:1,
        msg:'',
        data:[]
    }
    //
    var res1 = 'status=1&msg=null,data:[]';
	// http 说直白一点，就是在服务端返回的数据结构中，在最外层又加了http协议自带的一些其他参数，方便管理
})
```



####  如何解决跨域？

跨域本身是    协议（http,https）并且  网址（www.baidu.com） 端口号（80） 必须完全相同；

解决方案：  

1. 项目线上运行时，是服务端解决，服务端在请求头中设置   access-control-allow-origin：*   

​    如果回答不上来，你就没有办法做前后端分离的项目；（适合生产环境和开发环境，但是，通常只会在生产环境中用）

 	2.  vue项目中， vue.config.js  中设置proxy    (开发中配置，只能适用于开发中)   原因是： npm run serve 的时候，vue-cli会自动在本地创建服务器；  npm run build 只会打包，不会创建服务器，所以此方法不适应于生产环境；
 	3.   jsonp  

####  你知道vue.fonfig.js中的proxy 的底层实现原理吗？

前端访问会有跨域问题，但是我们需要做一个代理，  我们把需要跨域的服务器都让vue开发时启动的服务器去访问，服务器访问服务器是没有跨域问题的，

就相当于， 我们的地址是  8.131.89.181:8001   我们本地启动的服务器去访问  8.131.89.181:7001

跨域只存在于浏览器端 我们的项目请求我们开发的服务器，开发的服务器去请求服务端的接口；



#####  说一下对http的理解 ？

http有请求头和消息头   请求头和消息头都有header部分和body部分， header部分有 url的地址；还有该接口的请求方式,通常我们用post请求发给服务端时的入参都放在body中；

####  你可以详细说一下 header部分中你知道哪些东西吗？

我们常用的 content-type : application/json ，  还有一个可以设置是否允许跨域的值 accoss-contrl-allow-origin

####  你刚才提到了跨域，你能简单的说一下跨域是什么和如何解决吗？   

####  除此之外，请求头中还有一个cache-control ，你是否了解？

答：  知道，这个是服务端来设置缓存的；

#### 前端你有了解过缓存吗？

答：  我们的浏览器中有缓存，加载的资源会放在缓存文件中C盘，下次请求的时候走的是缓存，一般情况下，缓存的状态码是304；



#### ajax解决的问题？

可以解决页面中部分内部局部更新的问题



在es6中，出现了数据双向绑定这个方法 Object.defineProperty()；直接出现了新型的框架， angular , vue 

至此，没有人在用ajax ，原因是 ：  vue angular 不提倡你去直接操作dom;    这个要求和jquery的理念完全不一样； jquery是操作dom，中增加了ajax方法； 出此此问题后，出现了单独的一个ajax框架，这个框架就是axios;

####  axios 的优点

1. 体积非常小 只有几k，  
2. 基于promise ，        解决了地狱回调

```javascript
var getUserInfo = function(params){
    return new Promise((resolve,reject)=>{
        axios({
            url:'user/login',
            data:params,
            success:function(res){
                resolve(res);
            }
        })
    })
}

var getOrder = function(params){
    return new Promise((resolve,reject)=>{
        axios({
            url:'order/list',
            data:params,
            success:function(res){
                resolve(res);
            }
        })
    })
}

var getOrder = function(params){
    return new Promise((resolve,reject)=>{
        axios({
            url:'order/list',
            data:params,
            success:function(res){
                resolve(res);
            }
        })
    })
}

var getUserInfo = function(url,params){
    return axios.post('user/login',params)
}

(async function(){
    let userinfo = await getUserInfo({
        username:'xiaoming',
        password:'0sajdfklasd'
    });
})()
```

##### 解释一下回调地狱，和如何解决？

promise  , await async

##### 谈一谈你对Promise的理解？

Promise的常用静态方法  all  race resolve  reject(至少说出2个)

#####  Promise对象是可逆的吗？

答：  不可逆         可逆：  把其中一种状态可以转换成另外一种状态，这叫可逆，否则为不可逆；

promise 状态只有两种，  resolve  ,reject    失败了以后是永远不可能成功的， 所以不可逆；



> 总结 ：
>
> 状态码， http,   xhr   ajax  axios   promise  await async 

####  less  sass的区别

1.  项目中，如果是vue + vant 会考虑用 less ， 因为vant底层用的就是less
2.  vue + elementui   会考虑用 sass ,  因为你在项目中只用到了 & 没有过多的用其它的变量声明啥的，所以具体哪不一样，不太清楚；  
3.  答完以后要让面试官知道，你什么时候用，实话实说；

##### 2.vue2和vue3的区别。

​	1. vue2底层实现原理用的是 Object.defineProperty  

data(){return {  active:  null}}.mounted(){ console.log(this.active)}

​	vu3 用的  new Proxy();  

data(){return {  active:  null}}.mounted(){ console.log(this.active)}

 2. vue3性能更好，  setup 方法；   setup是在构造vue实例之前就去执行的方法；  但是，你在项目中，是感受不到哪个快，哪个慢的； 人是感觉不到这个感知的，只是研究底层的人，得出的结论；

 3. 有单独的server层，方便抽离业务逻辑；因为很多人写代码不会抽离业务逻辑，一个页面中经常出现3000  - 10000行代码的场景都非常多， 增加代码的可读性

 4. 为什么v-for要加key。

    	1.  因为vue的兼听者模式，兼听的数据来源需要有一个身份识别，这个key就是一个唯一的标识， vue底层就是根据这个key来让当前对象中的数据进行变化的； key就是可当于当前元素的id; 
    	2.  vue不推荐你直接去操作dom; vue也不会直接操作dom;
    	3.  那我去改变dom元素中的值该怎么办呢？ 
    	4.  本质上还得去获取 到元素  
    	5.  如何获取元素呢？
    	6.  document.querySelector('.el-name')
    	7.  我给你加上一个key，在vue中能根据这个key来找到这个dom，同时改变当前dom的值 ； 
    	8.  类似一个这样的数组[ { 1: domObj1, 2,3:dom3}] 

 5.   vue底层实现原理

    ​	监听者模式， diff算法  Object.defineProperty

    6.webpack原理。

    7.webpack是怎么实现模块化。

    8.当你构建vue项目的时候，主要做了哪些工作。

    9.如何实现组件通用化。

    10.项目难点。

    11.h5和小程序的区别。

    12.为什么目前很多公司使用小程序而不是app。

    13.localStorage和sessionStorage的对比。

    14.cookie和token的对比。

    15.vue组件通信方式（父子 兄弟 vuex）。

    16.vue router的几种钩子函数 各自的应用场景？

    17.模块化，commonJS和esm区别。

    18.会不会问上一家公司离职的原因及薪水。

    19.说用qq邮箱会不会显得很业余。