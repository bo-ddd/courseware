# 数据双向绑定

## 修改data中的值
上节课我们学了created钩子函数,我们已经可以知道在created中调用到data中声明的属性,其实,不止如此,我们还可以更改它;
```html
    <div id="app">
        {{ username }}
    </div>
```
```javascript
    const App = {
        data(){
            username:'xiaoming',
        },
        created(){
            this.username = 'hello world';
        }
    }
    createApp(App).mount('#app');
```
我们神奇的发现,把页面打开后,页面中展示的是 hello world, 而不是 xiaoming;

这种数据变化视图跟着变化的场景叫数据双向绑定; 这种思维叫数据驱动视图,在我们工作中,几乎都要用到这种思维

除了在created可以修改data下面的属性外,方法也是可以:
```html
    <div id="app">
        <div @click="fn">{{ username }}</div>
    </div>
```
```javascript
    const App = {
        data(){
            return {
                username:'xiaoming'
            }
        },
        methods:{
            fn(){
                this.username = 'hello world';
            }
        }
    }
    createApp(App).mount('#app');
```

