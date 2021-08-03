#### vue-cli配置之axios

```javascript
1. 项目目录结构
	-| src
		-| api
			api.js
			config.js
```



```javasc
// 2.  src/api/api.js
import axios from 'axios';
import { postConfig } from './config'


// 添加请求拦截器  概念：每次调用接口之前都会走到此方法中；走完此方法才会去请求服务端；
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么,一般配置一些请求头的公共信息；
    config.headers.authorization = localStorage.getItem('token');
    return config;
})

// 添加响应拦截器  概念：每次调用接口之后都会走到此方法中，服务端返回数据后优先走到此方法，之后才会走到 // // // //axiox.get()/axios.post() 的then方法中；
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么，一般可以把登录失效后的逻辑添加到此处，所有需要登录接口的判断都可以写到此处，这样就不用每个接口都判断用户是否登录，如果没有登录就跳转到登录页面去的逻辑；抽离业务逻辑的好地方；
    if (response.data.status == 401) {
        location.hash = '/login'
    }
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    console.log('get error:', error)
    return {
        code: -1,
        msg: '网络异常'
    }
});

//接口定义的方式；
export default  {
    //登录
    signin: (params) => {
        return axios.post('/user/signin', params, postConfig)
    }
}
```



```javascript
//3  src/api/config.js

let serveUrl = '/api';

export const postConfig = {
    url: "",
    baseURL: serveUrl,
    headers:{
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
    },
    timeout: 5000
}

export const getConfig = {
    url: "",
    baseURL: serveUrl,
    headers: {
      "X-Requested-With": "XMLHttpRequest"
    },
    timeout: 5000
};
```



```javascript
// 4. 开发时解决跨域的方案
// vue.config.js
module.exports = {
    devServer: {
        //原理：将axios中匹配到的包含 http://192.168.1.18:7001的接口转换成本地同源接口，
        //将匹配到的 /api 替换 成 "";  
        //比如： http://192.168.1.18:7001/api/user/info
        //替换结果为 localhost:8080/user/info
        proxy: {
            '/api': {
                target: 'http://192.168.1.18:7001',  //填写服务端的接口地址；
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
```



```javascript
//5. src/store/index.js   使用vuex中的actions方法，封装接口；
import { createStore } from 'vuex'
import Api from '@/api/api'
export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
    /**
     * @description 用户登录
     * @param username  用户名
     * @param password 密码
    */
     signin(ctx,payload) {
      return Api.signin(payload)
    }
  },
  modules: {
  }
})
```



```javascript
//6. 调用接口的方法  比如 Home.vue
<script>
    // step1
	import { mapActions } from 'vuex'  //mapActions 是一个辅助函数，可以获取到 store/index.js中 actions中定义的方法；
	export default {
        methods:{
            //step2:
            ...mapActions(['signin'])  //这样我们就可以把 store/index.js中的actions中的sigin方法挂到this中，访问时直接可以用this.sigin()来调用接口；
        },
        async created(){
            //res为接口调用返回数据信息；
            // step3:
            let res = await this.signin({
                username:this.username,
                password:this.password
            }); 
        }
    }
</script>
```

