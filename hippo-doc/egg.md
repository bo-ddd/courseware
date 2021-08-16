```javascript
1. 用户 调用 /user/login 接口；
2. 进入 router.js   // 
3. 找到 router.post('/user/login',ctx.controller.user.login);
	ctx.controller.user.login 指的是  controller文件夹中 user.js 中的 login方法
4. controller层中的方法只允许写校验逻辑，业务逻辑要放在service层： ctx.service.user.login方法;   其中：ctx.service,user.login 方法会调用 service文件夹中user.js中的login方法；
5. controller层中通过 ctx.success()方法把结果返回到客户端页面中； 
6. 通过ctx.fail()方法把错误发给前端；



// mysql
//增  在User表中创建一条数据；
ctx.model.User.create(params)  //params是准备添加到数据库的数据；
//删  把用户表中id为1的数据删除；
ctx.model.User.destroy({
    where:{
        id:1
    }
})
//改 修改username为woodfish的age;
ctx.model.User.update({
    age:18
},{
    where:'woodfish'
})
//查 一条数据
ctx.model.User.findByPk(id)  //id为索引

//查所有数据
ctx.model.User.findAll();

//注： ctx.model.User会查找model文件夹下的User.js中定义的表结构 ；
```

