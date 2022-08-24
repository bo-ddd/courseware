## created钩子函数

> 本节学习目的:
1. 了解created钩子函数的作用,基本写法;

目前为目,我们已经学了几乎所有的渲染页面上关的操作;但是在开发中,还缺少一个东西,就是你得知道页面的业务逻辑在哪里写;

今天我们来学习一个created,钩子函数,在项目中,通常是打开页面就执行的逻辑,就需要在这个函数中写,

created 和 data 是同一级,例如这样:

```javascript
    const App = {
        data(){
            return {
                username:'xiaoming',
                sex:1,
            }
        },
        computed:{
            sexName(){
                return this.sex == 1 ? '男' : '女';
            }
        },
        created(){
            // 当你的需求是,  打开页面后做的逻辑,就需要写在这个方法中;
            // created钩子函数是中是可以直接通过 this 来拿到 data,methods,computed中的值的
            console.log(this.username);  // xiaoming

            console.log(this.sexName);  //男;

            let res = this.fn(); 
            console.log(res); // 10;
        }
        methods:[
            fn(){
                return 10;
            }
        ]
    }
    createApp(App).mount('#app');
```

作业一:
1. 用ts实现上述例子及效果;

作业二:
1. 基于ts, 用原生和vue两种方法, 根据arr,分别实现QQ中联系人列中的功能;

详细需求:
1. 根据arr, 将不同好友以组为维度进行分组并展示;
2. 组名后展示当前组的成员总人数,及在线人好友数量;
3. 默认为第一组成员为最近联系人组, 该组中展示的是近期联系过的3个人; 优先级按近到远的关系排列;
4. 默认展示第一组的好友列表为打开状态,其它分组状态为关闭状态;
5. 用户可以手动点击对应组名,来打开和关闭组;
6. 默认优先展示好友的备注名,如果没有备注名,其次展示网名;
7. 默认展示好友的描述,超出当前行的展示范围后展示 ...
8. 如果用户最近发布了说说,则在描述区优先展示 '更新了说说'
9. 如果用户最近发布了空间,则在描述区优先展示 '空间文章有更新';
10. 如果用户没有空间,也没有说说,也没有个人描述,则展示 '该用户较懒,什么都没有留下'
11. 每组中,优先展示为在线的好友列表, 其次展示离线的好友列表;
12. 如果角色离线,则在描述区前展示  '[离线请留言]'
```typescript
    var groups = [
        {
            id:1,  // 组id;
            name: '我的好友'
        },
        {
            id:2,
            name:'红颜知己'
        },
        {
            id:3,
            name:'哈哈家庭'
        }
    ]

    var arr: Contact[] = [
        {
            id:1,  //好友id;
            group:1,  // 组id;
            avatarName:'哎哟,不错哟', // 网名;
            description:'',  //描述
            remark:'',  //备注
            lastContactTime:'1660995403512', // 上次联系时间
            onlineStatus: 1,  // 1 : 在线,  0: 离线
            article:[
                {
                    articleId:1231,  //文章id;
                    createTime:1660995000000,  //文章创建时间
                    type: 1,  // 1 : 空间文章,  2: 说说;
                }
            ]
        },
        {
            id:2,  //好友id;
            group:2,  // 组id;
            avatarName:'~...~', // 网名;
            description:'只要专业选的好～年年期末像高考',  //描述
            remark:'盖腾飞',  //备注
            lastContactTime:'1660995203512', // 上次联系时间
            onlineStatus: 0,  // 1 : 在线,  0: 离线
            article:[]
        },
        {
            id:3,  //好友id;
            group:3,  // 组id;
            avatarName:'林子', // 网名;
            description:'近陌者黑,生人勿加',  //描述
            remark:'侯林',  //备注
            lastContactTime:'1660995413512', // 上次联系时间
            onlineStatus: 1,  // 1 : 在线,  0: 离线
            article:[]
        },
        {
            id:4,  //好友id;
            group:1,  // 组id;
            avatarName:'禁止偷猪', // 网名;
            description:'',  //描述
            remark:'',  //备注
            lastContactTime:'1660995413512', // 上次联系时间
            onlineStatus: 0,  // 1 : 在线,  0: 离线
            article:[]
        },
        {
            id:5,  //好友id;
            group:2,  // 组id;
            avatarName:'禁止偷猪', // 网名;
            description:'是做一世的逗逼还是暂时的聪明人？',  //描述
            remark:'范文峰',  //备注
            lastContactTime:'1660915413512', // 上次联系时间
            onlineStatus: 0,  // 1 : 在线,  0: 离线
            article:[]
        },
        {
            id:6,  //好友id;
            group:2,  // 组id;
            avatarName:'蓝白白', // 网名;
            description:'一天二次元,一生二次元,为二次元而活',  //描述
            remark:'',  //备注
            lastContactTime:'', // 上次联系时间
            onlineStatus: 1,  // 1 : 在线,  0: 离线
            article:[]
        },
        {
            id:6,  //好友id;
            group:3,  // 组id;
            avatarName:'格勒冇三', // 网名;
            description:'得之坦然，失之淡然，争其必然，顺其自然',  //描述
            remark:'凯哥',  //备注
            lastContactTime:'', // 上次联系时间
            onlineStatus: 1,  // 1 : 在线,  0: 离线
            article:[
                {
                    articleId:1231,  //文章id;
                    createTime:1660995000000,  //文章创建时间
                    type: 1,  // 1 : 空间文章,  2: 说说;
                },
                {
                    articleId:1237,  //文章id;
                    createTime:1660995412000,  //文章创建时间
                    type: 2,  // 1 : 空间文章,  2: 说说;
                },
            ]
        },
        {
            id:7,  //好友id;
            group:1,  // 组id;
            avatarName:'hi! world', // 网名;
            description:'程序员是最浪漫的职业',  //描述
            remark:'',  //备注
            lastContactTime:'', // 上次联系时间
            onlineStatus: 1,  // 1 : 在线,  0: 离线
            article:[
                {
                    articleId:1237,  //文章id;
                    createTime:1660995412000,  //文章创建时间
                    type: 2,  // 1 : 空间文章,  2: 说说;
                },
            ]
        },
    ]
```

作业一答案:
```typescript
    //  created    data    methods  computed
    class BaseVue{
        created: ()=> void;
        methods: {
            [propsName: string]: ()=> any;
        };
        computed: {
            [propsName: string]: ()=> any;
        }
    }

    interface Options extends BaseVue {
        data: ()=> object;
    }

    class Vue extends BaseVue{
        el: HTMLElement;
        data: object;
        constructor(options: Options){
            super();
            this.el = null;
            this.data = options.data();
            this.created = options.created;
            this.methods = options.methods;
            Object.assign(this, this.data);
            Object.assign(this, this.methods);

            // create 创建  reactive 原生   props 属性;
            this.computed = options.computed;
            
            for(let key in this.computed){
                this.createReactvieProp(this, key,  this.computed[key]);
            }
            
            this.created();
        }

        createReactvieProp(obj: object, key: string, value: any){
            Object.defineProperty(obj, key, {
                get(){
                    return value.call(obj);
                }
            })
        }

        mount(el: string){
            this.el = document.querySelector(el);
        }
    }


    function createApp(options:  Options): Vue{
        return new Vue(options)
    }

    createApp({
        data(){
            return {
                username:'xiaoming',
                sex:1,
            }
        },

        computed:{
            sexName(){
                console.log(this);
                return this.sex == 1 ? '男' : '女';
            }
        },

        created(){
            console.log("hahahahaha")
            console.log(this);

            // 把data对象中的key和value 赋值到 this上;
            console.log(this.data.username);
            console.log(this.username);

            console.log(this);
            this.fn();

            this.run();

            this.sex = 0 ;  // 
            console.log(this.sex);
            console.log(this.sexName);  //女

            this.sex = 1;
            console.log(this.sex);
            console.log(this.sexName) // 男;
        },
        methods:{
            fn(){
                console.log('this is  methods fn 方法 ')
            },

            run(){
                console.log( this.username + 'is running');
            }
            
        }
    }).mount("#app");
```
