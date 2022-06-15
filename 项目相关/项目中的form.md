### 后台管理中的form表单

1.  在后台管理中，用到最多的东西就是增删改查，其中增和改大概率会用到的就是form表单；

2. 通常情况下，增和改都是一个form；

3. 在开发中，应该尽可能的用一个命名空间，把form中的变量给承接起来，比如看起来这样：

   ```javascript
   //假设我们有一个创建权限的form  他需要接 3个参数， title, type, pid
   //错误的写法是：
   var vm = new Vue({
       data(){
           return {
               title:'',
               type:1,
               pid:null
           }
       }
   })
   
   //正确： 这样写的好处是方便维护和管理，且更加的语义化
   var vm = new Vue({
       data(){
           return {
               form:{
                   title:'',
                   type:1,
                   pid:null
               }
           }
       }
   })
   ```

4. 在声明form中的值时，应尽量的保证和服务端接口统一

   ```javascript
   //假设我们有一个创建权限的form  他需要接 3个参数， title, type, pid
   // 错误：
   var vm = new Vue({
       data(){
           return {
               form:{
                   label:'',
               	type:1,
               	parentId:null
               }
           }
       }
   })
   
   //正确：
   var vm = new Vue({
       data(){
           return {
               form:{
                   title:'',
                   type:1,
                   pid:null
               }
           }
       }
   })
   ```

5. 通常情况下，如果form表单的业务逻辑相对比较简单，可以把修改和增加的form设置为同一个form，因为这样维护起来会比较方便；此时我们定义form时就可以这么定义：

   ```javascript
   //假设我们有一个创建权限的form  他需要接 3个参数， title, type, pid
   //假设我们有一个修改权限的form 他需要传4个参数， id, title, type, pid
   var vm = new Vue({
       data(){
           return {
               form:{
                   id:null,  //这里null 和 0 都可以；因为数据库中，几乎id都不会是零
                   title:'',
                   type:1,
                   pid:null
               }
           }
       }
   })
   ```

6. form接口的传参，通常情况下，我们会以当前this.form为核心进行传参,比如这样：

   ```javascript
   //如果修改和创建在不共用相同参数的情况下，一般可以这么做；
   // 修改权限
   updatePermissionApi(this.editForm);
   
   // 创建权限
   createPermissionApi(this.creatForm);
   
   //但是如果你的修改和创建是共用一个form数据，则应该这么传：
   const { id, title, type, pid } = this.form;
   //编辑
   updatePermissionApi({ id, title, type, pid });
   //创建
   createPermissionApi({title, type, pid})
   ```

7. form中接口Api方法命名要和服务端接口保证一致

   ```javascript
   //一般情况下，增删改查的接口者是这种
   // xxx/list  获取xxx的列表   
   // xxx/detail 获取xxx详情
   // xxx/update 更新xxx
   // xxx/create 创建xxx
   // xxx/delete 删除xxx
   
   //在以上服务端的接口文档中，应该把前端封装的接口api以动词开头+api结尾，并且驼峰命名法；
   // xxx/list 和  xxx/detail 没有动词则应该在方法前加上 get
   // 示例如下：
   // xxx/list  =>  getXxxListApi();
   // xxx/detail => getXxxDetailApi();
   // xxx/update => updateXxxApi();
   // xxx/create => createXxxApi();
   // xxx/delete => deleteXxxApi();
   ```

8. 通常情况下，在你调用增删改查的api时声明的方法要和接口名保证一致，只是去掉了结尾的api 或者 把Api改成Fn都是可以的；

   ```javascript
   //方法一： 去掉api方法下的Api;
   var vm = new Vue({
       methods:{
           getXxxList(){
               getXxxListApi();
           },
           updateXxx(){
               updateXxxApi();
           },
           createXxx(){
               createXxxApi();
           },
           deleteXxx(){
               deleteXxxApi();
           }
       }
   })
   
   //方法二： 把Api替换成Fn;
   var vm = new Vue({
       methods:{
           getXxxListFn(){
               getXxxListApi();
           },
           updateXxxFn(){
               updateXxxApi();
           },
           createXxxFn(){
               createXxxApi();
           },
           deleteXxxFn(){
               deleteXxxApi();
           }
       }
   })
   ```

9. 通常情况下，创建完form表单后，需要清空当前的form表单中的值,通常都会封装一个方法叫 init / initForm 等   init的意思是格式化/初始化的意思

   ```javascript
   var vm = new Vue({
       data(){
           form:{
               id:null,
               title: '',
               type:1,
               pid:null
           }
       },
       methods:{
           //初始化form
           initForm(){
               this.form = {
                   id:null,
                   title: '',
                   type:1,
                   pid:null
               }
           }
       }
   })
   ```

   10. 如上代码中，你会发现，data中的form本身就是初始化form，所以，你的代码应该变成这样；

   ```javascript
   var vm = new Vue({
       data(){
           form:{}
       },
       created(){
           this.inifForm();  
       },
       methods:{
           //初始化form
           initForm(){
               this.form = {
                   id:null,
                   title: '',
                   type:1,
                   pid:null
               }
           }
       }
   })
   ```

   