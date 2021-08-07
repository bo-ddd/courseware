#### vue.data的声明方式

```javascript
//使用vue时，如果new一个vue的实例，那么data声明的方式是：

var vm = new Vue({
    data:{
        username:'xiaoming'
    }
})

//如果使用脚手架（vue-cli）
export default {
    data(){
        return {
            username:'xiaoming'
        }
    }
}
```

