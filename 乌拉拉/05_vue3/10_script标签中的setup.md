## `<script setup>`
现在，我们已经学了 setup 钩子函数的相关基础语法，他已经满足我们日常的基本开发，但是在vue3中，还有另外一个setup， 他的语法是在 script标签中声明一个setup属性，语法：
```typescript
    <script setup></script>
```

这个标签的含义是把这个setup标签做为setup()函数
他们的区别是
1. setup() 方法需要返回值才可以把值应用到页面上，而 `<script setup></script>` 不需要
比如：
```vue
    <template>
        <div>{{ age }}</div>
    </template>
```

setup()写法：
```typescript
    import { defineComponent } from 'vue'
    export default defineComponent({
        setup(){
            let age = 19;
            //必需要return age 才可以把 age 渲染出来
            return { age }
        }
    })
```

script setup写法：
```typescript
    // 对， 你没有看错， 就这么简单， 只需要声明一个属性，就可以把age映射到页面上，是不是很简单鸭！
    let age = 19;
```

## script setup 导入组件时，直接可以在页面中使用,不需要挂载components
```html
    <template>
        <ComponentName></ComponentName>    
    </template
```
```typescript
    import ComponentName from './component/ComponentName.vue'
```
