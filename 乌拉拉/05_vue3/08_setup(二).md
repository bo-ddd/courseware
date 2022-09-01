## setup(二)

上节课我们学了setup的基本用法,这节课,我们来看一看setup的其它属性的声明

## 声明方法
```html
    <!-- 页面展示 30 -->
    <div>{{ fn(10, 20) }}</div>
```
```javascript
    export default {
        setup(){
            let fn = function(n1, n2){
                return n1 + n2;
            }

            return {
                fn
            }
        }
    }
```

## 声明计算属性 computed
```html
    <!-- 页面展示10 -->
    <div>{{ num }}</div>
    <!-- 页面展示 11 -->
    <div>{{ num2 }}</div>
```
```javascript
    import { computed, ref } from 'vue'
    export default {
        setup(){
            const num = ref(10);
            const num2 = computed(()=> this.num.value + 1) //
            return { num, num2 }
        }
    }
```

## 声明只读属性 readonly
```javascript
    import { readonly } from 'vue'
    export default {
        setup(){
            let num = 1;
            let num2 = readonly(num);
            let num3 = readonly(ref[10]);
        }
    }
```

## 钩子函数
```javascript
// 所有的钩子函数是以on开头
// 钩子函数有好多个，我们只说两个，其它的都一样，
// onUnmounted, onBeforeMount, onBeforeUPdate, onBeforeUnmount, onReactived, onDeactivated
import { onMounted, onCreated } from 'vue'
export default {
    setup(){
        onCreated(()=>{
            console.log('this is created!')
        })
        onMounted(()=>{
            console.log("this is mounted!")
        })
    }
}
```

## watch 监听属性

watch通常用来监听一个值的变量,如果变化了以后会做balabalaba的业务逻辑,

他和computed计算属性的区别是:

1. computed 必须有返回值, 不支持异步
2. watch 是监听一个值的变化, 如果变化以后xxx, 没有返回值, 支持异步;

声明式写法中,通常的watch写法是:
```javascript
    export default {
        data(){
            username:'xiaoming'
        },
        watch: {
            username(newValue, oldValue){
                if(this.newValue == 'xiaohong'){
                    console.log('用户名是: 小红')
                }else {
                    console.log('用户名不是小红')
                }
            }
        }
    }
```

组合式写法:
```javascript
    import { ref, watch } from 'vue'
    export default {
        setup(){
            let username = ref('xiaoming');
            watch(username,(newValue, oldValue)=>{
                if(this.newValue == 'xiaohong'){
                    console.log('用户名是: 小红')
                }else {
                    console.log('用户名不是小红')
                }
            })
        }
    }
```

## watchEffect 

他和watch函数的区别是, watch函数是兼听一个值的变化,如果有变化时会触发这个函数,

但是 watchEffect 函数是 立即运行这个函数, 如果兼听的值发生变化,会再次触发这个函数;

概念: 立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行。

运行机制: 侦听器将在组件渲染之前执行。

语法上,也和watch有所不同, watch要兼听一个key的变化, watchEffect是只要函数体内的值发生变化,就会重新执行
```javascript
    import { ref, watchEffect } from 'vue'
    export default {
        setup(){
            let num = ref(0);
            watchEffect(()=>{
                console.log(num) // 控制台中,此方法会执行两次,第一次是0, 第二次是1
            })
            num++;
            return { num }
        }
    }
```

## watchPostEffect
他和 watchEffect唯一的区别是运行机制顺序, 
watchEffect是在组件渲染之前执行,而watchPostEffect是在组件渲染之后执行,使用方法和watchEffect一模一样

## watchSyncEffect
在某些特殊情况下 (例如要使缓存失效)，可能有必要在响应式依赖发生改变时立即触发侦听器。这可以通过设置 watchSyncEffect 来实现。然而，该设置应谨慎使用，因为如果有多个属性同时更新，这将导致一些性能和数据一致性的问题。