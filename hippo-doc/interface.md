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

#### 答题列表接口

```javascript
let interface = '/question/category/list'
let type = 'POST';
let params = {
    type:'',   // 非必填项  如果不填，会获取到总目录，如果填 js 会 显示 js目录下面所有的题；
}
let res = {
    status:1,
    message:'success'
    data:[
        {
            title:'', // icon对应的标题 有可能是 js css node ，如果type有值，那么返回的是题目 题目是markdown类型;如果不传type,返回的是标题；
            icon:'',   //icon图的地址；
            options:[
    			{
    				value:''   //选择项
    				right:[boolean] //true ： 正确答案  false:错误答案
				}
    		] // 选择题选项及答案；  type不为空时会返回；
    		id:'',     // 题目的id；
        }
    ]
}
```

#### 用户信息接口

```javascript
let interface = '/user/info'
let type = 'POST';
let params = {};
let res = {
    status:1,
    message:'success'
    data:[
        {
            userId:'', // 用户Id;
            avatorId:0, // 头像的索引值
    		avatorName:'哈哈哈', //网名
    		class:'',  //班级名称
    		identity:'',  //身份信息 0：学生 1：老师
    		mail:''， //邮箱号
            phoneNumber:'', //手机号
    		createdAt:'' // 账号创建时间
    		updatedAt:'' //最近一次的用户信息修改时间
    		uuid:'',  // 用户的uuid;
    		desc:'', //个人介绍
    		sex: [Number]  // 1:男 0:女
        }
    ]
}
```

#### 修改用户信息接口

```javascript
let interface = '/user/update'
let type = 'POST';
let params = {
    avatorId: 0  //头像Id; 非必填项，如果未修改，则不传；
    avatorName:''  //昵称  非必填项，如果未修改，则不传；
    phoneNumber:'',  // 手机号 非必填项，如果未修改，则不传；
    mail:'',   //  邮箱 非必填项，如果未修改，则不传；
    password:'' //密码 非必填项，如果未修改，则不传；
};
let res = {
    status:1,   //1:成功  0:密码不满足要求
    message:'success'  
    data:[]
}
```

#### 用户注册接口

```javascript
let interface = '/user/register'
let type = 'POST';
let params = {
    username:'',   //用户名
    password:''    //密码
};
let res = {
    status:1,   //1:成功  2:账号或密码不满足要求 0：账号已存在
    message:'success'  
    data:[]
}
```

#### 获取题列表

```javascript
let interface = '/topic/list'
let type = 'POST';
let params = {
    type:[String] // 非必填  可以传题型类目；
};
let res = {
    status:1,   //1:成功  2:账号或密码不满足要求 0：账号已存在
    message:'success'  
    data:{
    	id: [Number],  // 题目标识
        uuid:[String]  // 出题人uuid；
		type:[String]  //题目类型
		title:[String]  //题目；
		options:[Array],    //选择题选项 ['a选内容','b选内容','c选内容','d选内容']
        result: [String]  //答案 如果是选择题 如果选择ab为正确项，那么会给 字符串格式的 '0,1'
		categoryId: [Number], // 1: html 2:css 3:js 4:vue;
        createdAt:[Data],  //创建时间戳    
        updatedAt:[Data], //更新时间戳
	}
}
```

#### 文章详情

```javascript
let interface = '/article/detail'
let type = 'POST';
let params = {
    id:''  //文章ID;
};
let res = {
    status:1,   //1:成功  2:账号或密码不满足要求 0：账号已存在
    message:'success'  
    data:{
    	id: [Number],  // 文章标识  主键；
        uuid:[String]  // 写文章的人的uuid；
		type:[String]  //题目类型
		title:[String]  //题目；
		article:[String] //文章
		categoryId: [Number], // 1: html 2:css 3:js 4:vue; 文章所所属分类
        createdAt:[Data],  //创建时间戳    
        updatedAt:[Data], //更新时间戳
	}
}
```

#### 类目列表

```javascript
let interface = '/category/list'
let type = 'POST';
let params = {
    type:[String]  // 类目类型 1：试题 2：文章；
};
let res = {
    status:1,   //1:成功  2:账号或密码不满足要求 0：账号已存在
    message:'success'  
    data:[
    	{
            id: [Number],  // 文章标识  主键；
            key:[String]  // html / css /js 
		}
    ]
}
```

#### 增加类目

```javascript
let interface = '/category/create'
let type = 'POST';
let params = {
    type:[String]  // 类目类型 1：试题 2：文章；
    key:''   //类目文本 eg:  html ? css ? js ?  
};
let res = {
    status:1,   //1:成功  2:账号或密码不满足要求 0：账号已存在
    message:'success'  
    data:[]
}
```
