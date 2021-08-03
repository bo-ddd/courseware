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
