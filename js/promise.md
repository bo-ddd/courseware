### Promise

```javascript
//Promise的作用是为了解决在开发中遇到的地狱回调问题；
//eg:
ajax('userInfo1',(req,res)=>{
    ajax('userInfo2',(req,res)=>{
    	ajax('userInfo3',(req,res)=>{
    		ajax('userInfo4',(req,res)=>{
    			console.log(res)
			})
		})
	})
})
```

```javascript
//基本语法 
let list = new Promise((resolve,reject)=>{
     // resolve:成功, reject失败; 这两个入参都是回调函数；
     ajax({
         url:'http://localhost:3000/list',
         success:function(res){
             resolve(res);
         }
     })
 })
// 如果resolve方法执行，会走到then方法中；
list.then(res=>{
    console.log(res);
})
// 如果reject方法执行，会走到catch方法中；
list.catch(err=>{
    console.log(err)
})
```

