## comptued计算属性

> 在我们的业务逻辑中,有时候会遇到当一个值发生变化时,另外一个值也需要发一变化,此时就有了计算属性 computed,

computed 和 data, methods 方法是同一级,语法如下:

```html
    <div id="app">
        <!-- data中的 sex 属性 -->
        <div>{{ sex }}</div>
        <!-- computed中的 sexName 属性 -->
        <div>{{ sexName }}</div>
    </div>
```

```javascript
    const App = {
        data(){
            return {
                sex: 1
            }
        },
        computed:{
            sexName(){
                return this.sex == 1 ? '男' : '女'
            }
        }
    }
    createApp(App).mount('#app');
```

注: 
1. 计算属性中不可以写异步代码;
2. 计算属性中必须return 一个值;
3. 计算属性声明的key虽然是方法,但是调用时,和普通的属性一样;