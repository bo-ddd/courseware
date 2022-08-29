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