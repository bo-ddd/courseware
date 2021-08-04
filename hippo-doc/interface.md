<h3>
	<center>hippo 8月份文档</center>    
</h3>


#### baseUrl:

 http://192.168.1.39/7001

### 测试账号：
 账号：woodfish   密码：999999

#### 登录接口定义

1. 接口名： /user/login;

2. 描述：  此接口用来进行cms登录；

3. 入参：  
   ```javascript
   var data = { 
     username:[String],
     password:[String],
   }
   ```
   
4. 出参：
    ```javascript
    var res = {
      status:[Number]      //登录是否成功 1：成功      0：失败；
      message:[String]      //返回信息
      data:[String token]   // 此token签名串需要存起来；在调用需要登录的接口时，通过headers（请求头带给服务端）
    }
    ```
5. 登录失效和未登录
  ```javascript
  //未登录
  var res = {
	data:{
	  status: '401',
	  message: 'token验证失败',
	  data: false
	}
  };
  //登录失效
  var res = {
	data:{
	  status: '401',
	  message: 'jwttoken error',  //此信息基于校验规则，自动提示错误信息；
	  data: false
	}
  };
  ```



#### 测试登录是否正确接口

```javascript
let interface = '/test'  //接口名
let type = 'POST'
let params = {}  //入参
//出参
let res = {
    status: 1,
    success: 'success',
    data: []
}
```

#### 学习目录列表接口

```javascript
let interface = '/list'
let type = 'POST';
let params = {
    type:'',   // 非必填项  如果不填，会获取到总目录，如果填 js 会 显示 js目录下面所有的题；
    hasContent: [Boolean]  // 接收一个布尔值,非必填项，如果填true，收接收到目录及文件中的内容；否则只返回标题，如果不填，默认为false;
}
let res = {
    status:1,
    message:'success'
    data:[
        {
            title:'js', // icon对应的标题 有可能是 js css node 等
            icon:'',   //icon图的地址；
            content:'' // 如果入参hasContent为true,那么会返回文件的内容；否则不返回该字段；
        }
    ]
}
```

