## 权限配置产品文档

### 产品文档
1. 用户进入权限配置页面
2. 渲染出tree形权限控件
3. tree形控件的每一行数据支持增加、删除、和修改;
4. 点击删除按钮，提示是否确认删除当前任务的提示，如果点击确定，则删除当前任务及当前任务下所有子级的任务；
5. 点击新增按钮弹出弹层:支持填写 名称 及权限类型
6. 编辑按钮需要做复显操作；同时比新增的弹层多一个修改当前权限级别的选项; 

### 流程控制图

```mermaid
graph TD
into[用户进入权限配置页面] --> getPermissionList[获取权限列表]
getPermissionList --> getPermissionListResult{permissionListResult}
getPermissionListResult --> |res.data.status = 1| permissionListSuccess[获取权限列表成功]
getPermissionListResult --> | res.data.status != 1 | permissionListFail[获取权限列表失败]

permissionListSuccess --> renderTreeList[用elementui的tree树形控件渲染出结构]


permissionListFail --> alertFail[提示对应的报错信息]
```

### 编辑控制图

```mermaid
graph TD
clickEditButton[用户点击当前行的编辑按钮] --> showDialog[展示弹层]
showDialog --> writeForm[用户可以针对当前行的权限名称 权限类型 及 权限所在维度进行修改]
writeForm --> confirm[用户点击确定按钮]
confirm --> validate(校验相关form表单参数)
validate --> | 校验失败则提示对应的错误信息| return
validate --> | 校验成功后 | editApi[调用服务端编辑接口]
editApi --> editApiResult{result}
editApiResult --> | res.data.data = 1 | 提示用户修改成功并关闭弹层
editApiResult --> | res.data.data != 1 | 提示用户对应的错误信息
```

###  创建逻辑的流程控制图

```mermaid
graph TD
clickCreateButton[用户点击当前行的创建按钮] --> showDialog[弹出弹层]
showDialog --> writeForm[填写权限名称及类型]
writeForm --> confirm(用户点击创建按钮)
confirm --> validate(校验相关form表单参数)
validate --> | 校验失败则提示对应的错误信息| return
validate --> | 校验成功后 | createApi[调用创建权限配置接口]

createApi --> result{获取服务端的数据}
result --> | res.data.data == 1 | 提示创建成功并关闭弹层
result --> | res.data.data != 1 | 提示用户对应的错误提示


```

