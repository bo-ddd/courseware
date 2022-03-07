const state = Symbol('store');

// Store: 仓库, 我们把组件中使用的变量全都扔到这个仓库中去,声明一个state:(状态),
class Store {
    constructor() {
        // es5命名空间
        // this.__store__ = {
        //     username:'',
        //     age:18
        // }
        // 声明一个存储变量的地方(专业名词叫:状态)
        this.__state__ = {
            username: 'xiaohong',
            age: 18
        };
        // 
        let self = this;
        this.mutations = {
            // ctx: 上下文    被new 出来的那个实例;
            // 到这里为止,我们为什么要把这个方法写到vuex的实例中来呢?
            // 他解决了, 我刚才说的问题? 
            // 就是100个页面需要设置这个值,如果逻辑出现问题,我是没有办法找到根源的;
            // 但是如果定义在这个地方,你一百个页面来用,
            // 我直接就能找到问题;
            USER_NAME() {
                // username =>  
                self.__state__['username'] = 'asdkfl;asdfkl;sadf';

                // 写异步的方法,会在某种情况下,造成未知的错误;
                // vuex为了解决这个问题;封装了另外一个方法,这个方法叫actions;
                // axios.post('/api',function(){

                // })
            }
        }

        // actions方法支持异步; mutations不支持;
        this.actions = {
            getUserInfo() {
                return axios.post('/user/info')
            }
        }

        // module 叫做模块, 他是把vuex的state值 给拆分成一个单独的模块;
        this.module = {

        }
    }


    commit(key) {
        this.mutations[key]();
    }

    get(key) {
        // __proto__   es5的解决方案；如果你的项目中，需要兼容到ie8，就这样写；
        // es6呢？ 这其实就是Symbol
        // return this.__$store__[key];
        return this.__state__[key];

        // data(){
        //     return {
        //         router:1,
        //     }
        // }
        // created(){
        //     // 他会报错；vue为了使业务命名和路由命名不冲突，所以在几乎所有的这种全局的方法中，都加了$;
        //     this.$router.push({

        //     })
        // }
    }

    set(key, value) {
        this[state][key] = value;
    }

}

var store = null;

if (!store) {
    // 我们刚才解释了,如果给用户暴露出来set方法,其实本质上并没有解决我们的说多页面存储时,逻辑如果造成变量错误,带来的后果;
    // vue的解决方案是,在其中定义一个mutations函数,该函数用来定义你可以将什么样的值固定的修改成什么方法;
    store = new Store();
}

export default store;

// 至此，这种单例设计模式，已经实现了组件之间的传参；
// 问题1： 单例模式，这么简单，这么高效，
// 为什么vuex使用时，还封装了 store,active,getter, mutations;
// 答案是，我们封装的这种单例，也只是适用于简单的组件传参；且业务相对较简单的场景？
// 为什么呢？
// 答案是： js有  深浅拷贝；

// 假设现在有一百个组件 都用到了 store.js中的  username变量；
// 而这个变量，在某个页面中的逻辑出现问题，试想，他会出现什么样的场景？
// 答： 这一百个页面，的这个username全部是错的，为什么呢？
// 因为你存的值是错的；
// 此时，你会发现一个很严重的问题？
// 你不知道该去这一百个页面中，哪一个页面的逻辑上去找这个问题
//

// vuex 也发现了这个问题，所以， vuex的解决方案是：
//  只允许你在vuex的实例中定义这些变量，
// 我只允许你去访问在vuex的实例中声明的变量；
// 你要是不声明，我vuex就不让你用；
//  至此，解决了变量随意声明，有可能在业务中，找不到你声明变量的那个地方；


// 上午的复习：
// 学习封装组件，
// 在复杂的组件嵌套中，发现了用props传参的问题，
// 为了解决这个问题，咱用了 $bus的解决方案，此方案本质上是单例设计模式；
// 此问题衍生出另外一个问题，就是单例模式在项目中应用时，如果页面逻辑复杂，且当前变量使用过多，导致业务逻辑出错时，及难找出问题，
// 为了解决这个问题，第一步，我们把每个页面中的变量，统一在store.js中进行管理，
// 这种解决方案，在vuex中，是被一个叫state变量接收的值；
// 在vuex中定义这个state变量,解决的问题是什么?
// 他起的作用是,统一管理变量;


// 但是,开发者,不可能只用其中的这个变量,我们是需要去改变他的;
// this.set('username','xiaohong')


// class  Person{
//     constructor(){
//         this.name = 'xiaoming';
//     }
// }

// let p1 = new Person()  //
// // p1.name   'xiaoming



// class  Person{
//     constructor(name){
//         this.name = name;
//     }
// }

// let p2 = new Person('xiaohong')  //
// // p2.name     xiaohong


// 获取json对象的两种方法;
// let obj = {
//     username:' xiaoming',
// }

// console.log(obj.username) // xiaoming;


// let key = 'username'
// console.log(obj[key])  //输出的也是 xiaoming;

// 那么,这两种获取对象中key的value的方法有什么不同?
// 方法一是直接获取,不接收变量;
// 方法二可以动态的获取;

// vuex的底层基本实现原理,和演变过程 (单例演变过来的)

// 我的问题是: 为什么要把mutations.中的方法定义在vuex的实例中,而不是每个页面里;
// store.set('key',value)

// 截止目前为止: 我们学了vuex中的两个方法, 一个是 state,  mutations,
// vuex的概念  是用来管理vue组件中的各种状态;
// state: 是用来对状态进行管理的, 所谓的状态,你们可以理解成一个全局变量,但他不是一真的全局;
// mutations: 这个方法是用来定义可以更改哪些状态的方法;  但是该方法有一个局限性,不可以调异步接口;  setTimeout  setInterval  axios
// actions: 可以调用异步操作;
// modules : vuex的业务逻辑和状态分离;
// getters: 监听state中变量的值;  相当于在页面中使用了computed方法;



// 为什么要讲这些底层,
// 这些底层是在工作中的技术沉淀;