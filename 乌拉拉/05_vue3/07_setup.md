## setup
随着项目的越来越大,你会发现,你的 xxx.vue中包含了各种各样的方法,钩子函数中也写着越来越我的代码逻辑,此时项目的维护复杂度就体现了出来,为了解决这个问题,在vue3中,出现了一个方法叫setup(), 该方法的目的是,把我们之前定义的所有的逻辑全部都写到该方法中,不管是 data, methods, computed, watch, 还是其它的钩子函数;

## 定义data的方式
1. 声明式
```javascript
    export default {
        data(){
            username: 'xiaoming'
        }
    }
```

2. setup定义data的方法
在setup()方法中,是没有this的概念的,该方法是加载在其它所有的方法之前的;

setup()方法返回一个对象,该对象所有的属性都会被赋值给 data;

所以 上述例子中的写法可以写成;
```javascript
    import { ref } from 'vue'
    export default {
        setup(){
            const username = ref('xiaoming');
            return {
                username
            }
        }
    }
```

上面两种方法中,两种写法是等效的,但是相比之下, setup的性能会更好,这个我们后面在说;

有可能你已经发现了一个看不懂的东西,叫 ref;

## ref
ref方法是声明一个有数据双向绑定的值; 该方法返回一个对象, 该对象中有一个value的属性,也就是该数据双向绑定的值
```javascript
    import { ref } from 'vue'
    export default{
        setup(){
            //翻译: 声明一个有数据双向绑定的对象,这个对象的value值是xiaoming;
            //把这个这个对象赋值给一个叫 username 的变量;
            let username = ref('xiaoming');
            // 所以,我们可以用 username.value来获取到这个xiaoming;
            console.log(username.value) // xiaoming
            // 我们也可以给username的value进行赋值
            username.value = 'xiaohong' ;
            console.log(username.value) // xiaohong;
            
            return {
                username  // setup返回的对象,就可以在页面中通过  {{ username }} 来映射成 xiaohong
            }
        }
    }
```


ref的ts写法
```typescript
    import { ref } from 'vue'
    export default {
        setup(){
            let num = ref<number>(12);
        }
    }
```

## reactive
我们已经学一ref,他的作用是让数据拥有响应式,但是ref有一个限制,它只能定义基本数据类型,那引用型数据类型该如何定义呢? 是 reactive方法;

定义一个对象:
```javascript
    import { reactive } from 'vue'
    export default {
        setup(){
            let userInfo = reactive({
                username: 'xiaoming',
                age: 18
            })
            console.log(userInfo.username) // xiaoming
            userInfo.username = 'xiaohong';
            console.log(userInfo.username) // xiaohong
        }
    }
```

reactive方法还可以接收ref对象
```javascript
    import { ref, reactive } from 'vue'
    export default {
        setup(){
            let username = ref('xiaoming');
            let userInfo = {
                username,  //注: reactive方法会自动把ref对象进行解决包,所以我们不需要这样写: username: username.value
                age:18
            }
            console.log(userInfo.username) // 'xiaoming';
            
            userInfo.username = 'xiaohong' // 
            console.log(userInfo.username)  //xiaohong
            console.log(username) // xiaohong
        }
    }
```

访问数组中的ref对象,需要用 .value 来访问
```javascript
    import { ref, reactive } from 'vue'
    export default {
        let arr = ref([ ref('xiaoming') ])
        // 这里需要 .value;
        console.log(arr[0].value) // xiaoming;
    }
```

reactive的ts写法
```typescript
    import { reactive } from 'vue'
    export default {
        setup(){
            interface UserInfo {
                username: string;
                age: number
            }

            let userInfo: UserInfo = reactive({
                username: 'xiaoming',
                age: 18
            })
        }
    }
```

作业:
1. 思考下列用例,实现setup方法:
```javascript
    let App = {
        setup(){
            let num = 10,
            return {
                num
            }
        }
        created(){
            console.log(this.name) // 10;
        }
    }
    createApp(App),mount('#app');
```

2. 思考下列用例,实现ref方法:
```javascript
    let App = {
        setup(){
            let num = ref(10),
            console.log(num.value);  // 10
            return {
                num
            }
        }
        created(){
            console.log(this.name) // 10;
        }
    }
    createApp(App),mount('#app');
```

3. 思考下列用例,实现reactive方法:
```javascript
    let App = {
        setup(){
            let username = ref('xiaoming');
            let userInfo = reactive({
                username,
                age: 18
            })
            console.log(userInfo.username) // xiaoming
            return {
                userInfo
            }
        }
        created(){
            console.log(this.userInfo) // { username: 'xiaoming', age: 18 }
        }
    }
    createApp(App),mount('#app');
```

