// 项目中，axios 请求时需要配置哪些东西；

// 通常情况下，会针对axios.post 和 axios.get方法做对应的配置；
// 如果有上传，下载等，也会进行对应的配置；

// 正常使用接口时，axios的使用方法：
// 第一个参数：  接口名: url   ：  /user/login
// 第二个参数：  接口的入参   {username:'',password:''}
// 第三个参数：  对post接口进行一些配置  ？ 我们可以配置哪些东西呢？  
// 我们昨天讲的那个请求头，是不是有content-type: application/json
axios.post('/user/login',{
    username:'xiaoming',
    password:"99999999"
},{
    headers:{
        "cache-control":"chche",
        "content-type":'application/json'
    }
}).then(res=>{

})

axios.post('/user/info',
{},
{
    headers:{
        "cache-control":"chche",
        "content-type":'application/json'
    }
}).then(res=>{

})

axios.post('/user/info',
{},
{
    headers:{
        "cache-control":"chche",
        "content-type":'application/json'
    }
}).then(res=>{

})

// 如果你在页面中直接用上述方案去给每一个接口设置请求头时，工作量会非常的大，大大减少了我们摸鱼时间；
// 所以，我们要针对 服务端 的接口，进行封装，
//  所以我们在项目的src文件夹下，创建一个新的文件，这个文件叫api.js
// 这就是我们为什么要把 axios和服务端接口进行统一维护的原因；
// 其实就是满足复用性；
// 代码不管怎么架构 ，他的初衷都是复用性；
// 我们现在可以统一封装api.js,代码变成这个样式：
// api/api.js     api是定义一些方法 该api,只负责封装和存储服务端的接口；
// 在开发当中，通常会把这些配置文件，放在config.js中；

// api/config.js 
// 在api/config.js中，还可以针对 axios进行单独的一些配置，
// 该配置文件，可以针对当前项目的运行环境（生产环境，还是开发环境）进行单独的配置；
// 如何判断当前运行的环境是什么环境？  const isProduction = process.env.NODE_ENV === 'production'   
// base基  url地址  base基础的接口地址前缀 
// 举例： 如果你调用的接口为 user/info  那他自动会帮你转成  /api/user/info;  axios.post('/user/info')  axios会默认帮你自动加一个前缀，这个前缀的值就是baseUrl的值；
//  这也就是我们已经做了代理，但是从来没有在任何接口的前缀上加上 /api的原因；
// baseUrl解决了统一维护接口前缀的问题；此时，我们不需要把每个接口的前缀都写上 /api， 仅此而已；
const postConfig = {
    baseURL: '/api',  // 如果是生产环境，我就让这个值 是 www.tengfei.com    process.env.NODE_ENV == production ? "www.tengfei.com" : '/api';
    // 如果是开发环境，我们就用/api,如果写上这样的逻辑，
    // 那么我们就能解决 开发时，我们就能用代理跨域的方法来正常开发，同时，在我打包项目后，项目也可以在生产环境中正常运行；
    headers:{
        "cache-control":"chche",
        "content-type":'application/json'
    }
}

const getConfig = {
    headers:{
        "content-type":'application/json'
    }
}


// api/api.js
function getAbcData(){
    return axios.get('/abc',params,getConfig)
}

function login(params){
    return axios.post('/user/login',params,postConfig);
}

function getUserInfo(params){
    return axios.post('/user/info',params,postConfig);
}

function getOrderList(params){
    return axios.post('/order/list',params,postConfig)
}


// vue.config.js设置proxy?
module.export  = {
    // 当前设置只在本地开发环境中有效，此设置是让你来可以正确的在本地启动项目，和生产环境，没有半毛钱的关系；
    devServe:{
        // proxy: 代理

        // 如果这设置，是什么效果，或者不写这个proxy:{} ，页面中是如何访问接口的
        // axios.post('/user/info',{}).then(res=>)
        // 其中 /user/info  指的是当前服务下面的一个路由 
        // 在你npm run serve时，本地创建的服务器  http:127.0.0.1:8080
        // 那你在访问/user/info时，本质上是访问的   http:127.0.0.1:8080/user/info 
        // 他会把你这个接口，当成我们前端项目中的一个路由
        // 例如： http:127.0.0.1:8080/home
        // 服务端也会把http:127.0.0.1:8080/user/info  当做一个前端路由，前端路由中，并没有做个路由，就会报错；
        // 那如何解决呢？ 我们可以改一个方法：
        //  axsio.post('http:tengfei.com/user/info',{}).then()  
        // 此时，f12中，报了一个CORS错，（同源策略）
        // proxy:{

        // },
        // 如上问题的解决方案：  我访问 http:127.0.0.1:8080/user/info   让我的服务器变成一个代理层，代替我去访问服务端 ：http:tengfei.com/user/info
        // 因为服务器端 去访问服务器的接口，是没有同源策略的限制 ，所以我们就可以拿到我们想要的数据；
        // 至于，如何 让我们本地的项目服务器去访问服务器的服务器，这些逻辑操作，是vue-cli中自带的服务器（devServe）帮我们实现，我们暂时不用关注；
        // 如果你们之前听过我说的express，你就知道如何实现了，那个就是 proxy底层实现原理；，如果不记得，也没有关系，只需要说是vue-cli帮我们实现的，就ok;

        // proxy实现原理：  
        // 用户去访问接口名之前，加上一个 /api的字段 ，如果我发现这个关键字，我就会走代理；
        // axios.post('/api/user/info',{}).then(res=>{})   => www.tengfei.com/user/info
        // 目前为止，此解决方案，已经可以完全的满足我们的开发要求，开发中不会有任何的问题；
        // 但是在写代码访问接口时，会变成
        // axios.post('/api/user/info',{})
        // axios.post('/api/user/login',{})
        // axios.post('/api/order/list',{})

        // npm run build的时候  你会发现；   服务器本身是想让你访问的是 user/info 接口， 但是你打包完以后，你所有的代码走的都是 /api/user/info;
        // 此时你访问服务端接口的时候，会报所，那么
        // 如何解决这个问题呢？ 此时就需要用到我们所说的，process_env_NODE_ENV 判断是否哪个环境，如果是 生产环境， http://www.tengfei.com  否则 就用 /api为开头
        // 在axios中，提供了一个配置文件，他可以自动补充接口前缀

        // 如果你的接口名是以/api为开头，那么我就把这个/api替换成'' 同时让这个接口去访问 后端的服务器www.tengfei.com
        // proxy: {
        //     '/api': {
        //         target: 'http://192.168.1.32:7001', //填写服务端的接口地址；
                // pathRewrite: {    path:路径   rewrite重写   使 /api为开头的接口名，变成空字符串 ''
        //             '^/api': ''
        //         }
        //     },
        // '/laosu': {
            //         target: 'http://www.laosu.com:7001', //填写服务端的接口地址；
                    // pathRewrite: {    path:路径   rewrite重写   使 /api为开头的接口名，变成空字符串 ''
            //             '^/laosu': ''
            //         }
            //     }
        // }
    }
}

// 多环境配置 2个以上的环境变量配置方法
//  公司现在有3个环境，  开发环境   测试环境   生产环境  服务端同学的本地服务器环境
// npm run serve  
//

switch (process.env.NODE_ENV){
    case  'prd' :
        baseUrl: 'www.prd.com'  //
        break;
    case 'sit' :
        baseUrl :  'www.sit.com'
        break;
    case 'dev' :
        baseUrl :  'www.dev.com'
        break;
    case 'laosu' :
        baseUrl :  'www.laosu.com'
        break;
}

// package.json  多环境配置指南
module.exports = {
    "scripts": {
        "serve": "vue-cli-service serve",
        "prd": "process.env.NODE_ENV=prd vue-cli-service serve",
        "sit": "process.env.NODE_ENV=sit  vue-cli-service serve",
        "serve:laosu": "process.env.NODE_ENV=laosu  vue-cli-service serve",
        "dev": "process.env.NODE_ENV=dev  vue-cli-service serve",
        "build": "process.env.NODE_ENV=prd vue-cli-service build",
        "test:unit": "vue-cli-service test:unit",
        "lint": "vue-cli-service lint"
      },
}

// vue。config.js是谁调用的；
// vue-cli 在你创建cli时，启动项目后， 项目启动时，会自动读取这个文件相关的配置文件； 
// 如果读取到相关配置文件，就会去执行；  不是我们自己控制 的，所以
// 这个文件的名字不可以改变； 
