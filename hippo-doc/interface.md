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
    id: '',  // 非必填 题id；
    categoryId:[String], // 非必填  可以传题型类目；  eg  1 2 3 4;
    pageNum:1,   // 非必填  如果不传 默认是1   第几页数据；
    pageSize:10,  // 非必填 如果不传 每页数据量
};
let res = {
    status:1,   //1:成功  2:账号或密码不满足要求 0：账号已存在
    message:'success'  
    data:{
    	id: [Number],  // 题目标识
        uuid:[String]  // 出题人uuid；
		type:[String]  //题目类型
		title:[String]  //题目；
		options:[Array],    //选择题选项 [{key:a,value:'a选项的内容'},{key:b,value:'b选项的内容'}]
        result: [String]  //答案 如果是选择题 如果选择ab为正确项，那么会给 字符串格式的 a,b
		categoryId: [Number], // 类目id 1: html 2:css 3:js 4:vue; 
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
    status:1,   //1:成功  0：失败
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
    status:1,   //1:成功  0:失败
    message:'success'  
    data:[]
}
```

#### 删除类目

```javascript
let interface = '/category/delete'
let type = 'POST';
let params = {
    type:[String]  // 类目类型 1：试题 2：文章；
    id:''   //类目标识 eg: 1 ,2 ,3,4,5
};
let res = {
    status:1,   //1:成功  0:失败
    message:'success'   // 如果失败  类目中有x条数据，暂不能不删除
    data:[]
}
```

#### 增加题

```javascript
let interface = '/topic/create'
let type = 'POST';
let params = {
		type:[String]  //题目类型
		title:[String]  //题目；
		options:[Array],    //选择题选项 [{key:'A',value:'A的答案'}]
        result: [String]  //答案 如果是选择题 如果选择AB为正确项，那么会给 字符串格式的 'A,B'
		categoryId: [Number], // 1: html 2:css 3:js 4:vue;
};
let res = {
    status:1,   //1:成功  0:失败
    message:'success'  // fail
    data:[]
}
```

#### 编辑题

```javascript
let interface = '/topic/update'
let type = 'POST';
let params = {
		id:[String],  //题id
    	type:[String] //题类型
		title:[String]  //题目；
		options:[Array],    //选择题选项 [{key:'A',value:'A的答案'}]
        result: [String]  //答案 如果是选择题 如果选择AB为正确项，那么会给 字符串格式的 'A,B'
		categoryId: [Number], // 1: html 2:css 3:js 4:vue;
};
let res = {
    status:1,   //1:成功  0:失败
    message:'success'  // fail
    data:[]
}
```

#### 删除题

```javascript
let interface = '/topic/delete'
let type = 'POST';
let params = {
		id:[String],  //题id
};
let res = {
    status:1,   //1:成功  0:失败
    message:'success'  // fail
    data:[]
}
```

#### 更新类目接口

```javascript
let interface = '/category/update'
let type = 'POST';
let params = {
		type:[String]  //
		id:[String]  //
		key:[String],    
        iconUrl: [String] 
};
let res = {
    status:1,   //1:成功  0:失败
    message:'success'  // fail
    data:[]
}
```

#### 增加文章接口

```javascript
let interface = '/article/create'
let type = 'POST';
let params = {
		title:[String]  //
		article:[String]  //
		categoryId:[String],    
};
let res = {
    status:1,   //1:成功  0:失败
    message:'success'  // fail
    data:[]
}
```

#### 获取文章列表

```javascript
let interface = '/article/list'
let type = 'POST';
let params = {
		categoryId:[String]  // 非必填 文章类型  eg :  1，2，3，4 
		pageNum:[String]  //非必填 第几页 如不传，默认为1
		pageSize:[String],    //非必填 获取几条数据 默认为10；
};
let res = {
    status:1,   //1:成功  0:失败
    message:'success'  // fail
    data:[]
}
```

#### 删除文章

```javascript
let interface = '/topic/delete'
let type = 'POST';
let params = {
		id:[String]  // 必填 文章id;
};
let res = {
    status:1,   //1:成功  0:失败
    message:'success'  // fail
    data:[]
}
```

#### 查询题目答案

```javascript
let interface = '/topic/answer'
let type = 'POST';
let params = {
		ids:[Array]  // 必填 题目id的集合；
};
let res = {
    status:1,   //1:成功  0:失败
    message:'success'  // fail
    data:[]
}
```

#### 删除文章

```javascript
let interface = '/article/delete'
let type = 'POST';
let params = {
		id:[Number]  // 必填 文章id
};
let res = {
    status:1,   //1:成功  0:失败
    message:'success'  // fail
    data:[]
}
```

#### 编辑修改文章

```javascript
let interface = '/article/update'
let type = 'POST';
let params = {
    id:[Number],  // 必填 文章id
    categoryId:'',   //类目标识 ；
    title:'',  //文章标题
    article:'' //文章内容
};
let res = {
    status:1,   //1:成功  0:失败
    message:'success'  // fail
    data:[]
}
```

#### 收藏题

```javascript
let interface = '/mark/set'
let type = 'POST';
let params = {
    markType:'',//收藏对象的类型  1： 题  2：文章
    categoryId:'',   //
    markId:'',  //
    status:'',  // 1：收藏  0：取消收藏；
};
let res = {
    status:1,   //1:成功  0:失败
    message:'success'  // fail
    data:[]
}
```

#### 查看收藏列表

```javascript
let interface = '/mark/list'
let type = 'POST';
let params = {
    markType:''  //收藏对象的类型  1： 题  2：文章
    categoryId:'',   //  1：html ? 2：css ? 3:js ?
    type:'',  //
    status:'',  // 1：收藏  0：取消收藏；
    pageNum:'',  // 非必填，默认第一页数据；
    pageSize:''  //非必填  如不传，默认是10条数据；
};
let res = {
    status:1,   //1:成功  0:失败
    message:'success'  // fail
    data:[]
}
```

#### 查看收藏id列表集合

```javascript
let interface = '/mark/list/id'
let type = 'POST';
let params = {
    markType:'',   //收藏对象的类型  1： 题  2：文章
};
let res = {
    status:1,   //1:成功  0:失败
    message:'success'  // fail
    data:[]  // markId的集合；
}
```

#### 获取用户列表信息

```javascript
let interface = '/user/list'
let type = 'POST';
let params = {
    uuid:'',  // 非必填， 根据uuid查用户信息；
    pageNum:1,  //非必填，如不填默认是1
    pageSize:10  // 非必填，如不填，默认是10
};
let res = {
    status:1,   //1:成功  0:失败
    message:'success'  // fail
    data:[]
}
```

#### 我的消息列表

```javascript
let interface = '/message/list'
let type = 'POST';
let params = {
	type:1,   // 1：系统消息  2:好友消息  如不传，代表全部消息
    pageNum:1,  //非必填，如不填默认是1
    pageSize:10  // 非必填，如不填，默认是10
};
let res = {
    status:1,   //1:成功  0:失败
    message:'success'  // fail
    data:[ 
    	{
    		id:'' //消息Id
    		type:'' // 1:系统消息 2：好友消息；
    		avatorImg:'',  //头像
    		formUserId:''  // 发送信息人的uuid;
    		toUserId:''    // 接收信息人的uuid;
    		postMessage:'' // 消息体
		}
    ]  
}
```

#### 发送消息

```javascript
let interface = '/message/send'
let type = 'POST';
let params = {
	toUserId:1,   // 1：发送至的人员uuid
    postMessage:'',  //消息体
};
let res = {
    status:1,   //1:成功  0:失败
    message:'success'  // fail
    data:[]  
}
```

#### 查看消息详情

```javascript
let interface = '/message/detail'
let type = 'POST';
let params = {
	id:'' //  消息id
};
let res = {
    status:1,   //1:成功  0:失败
    message:'success'  // fail
    data:[
    	{
    		id:'',  
    	    formUserId:''  // 发送消息人的uuid;
    		toUserId:''    // 接收消息人的id;
    		postMessage:''  //消息体
		}
    ]
}
```

#### 删除我的消息

```javascript
let interface = '/message/delete'
let type = 'POST';
let params = {
	id:'' //  消息id
};
let res = {
    status:1,   //1:成功  0:失败
    message:'success'  // fail
    data:[]
}
```

