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
                username:'xiaoming'
            }
        },
        created(){
            // 当你的需求是,  打开页面后做的逻辑,就需要写在这个方法中;
            // created钩子函数是中是可以直接通过 this 来拿到 data,methods,computed中的值的
            console.log(this.username);  // xiaoming

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

作业:
1. 用ts实现上述例子及效果;
