## vue-router
在一个项目中，一般情况下，都会有一些页面跳转的功能，

在vue的项目中，不在使用window.location.href 或者 window.location.hash;

我们都是通过 vue-router 的第三方插件来实现页面跳转；

## 路由跳转
通常情况下是通过引入useRouter，利用push方法进行跳转，比如：

```html
    <template>
        <button @click="fn">跳转到home页面</button>
    </template>
    <script setup lang='ts'>
        import { useRouter } from 'vue-router'

        let router = useRouter();

        const fn = function(){
            router.push({
                name: 'home', //  跳转到哪个页面；
                query:{
                    orderId: 10001   // 拼接的参数  
                }
            })
            //上面的跳转 会跳转到  localhost:8080/home?orderId=10001 
        }
    </script>
```

## 如何获取到页面上的参数
假如home页面需要获取到上面例子中的 orderId 的值，则可以用 useRoute来获取  

注意： 是useRoute, 不是useRouter

home.vue
```html
    <script setup lang="ts">
        import { useRoute } from 'vue-router'
        let route = useRoute();
        console.log(route.query)  // { orderId: 10001 }
    </script>
```

## router.push
如果你不需要在url链接上传一些参数，则可以不写query
```html
<script setup lang="ts">
        import { useRouter } from 'vue-router'
        let router = useRouter();
        const fn = function(){
            router.push({
                name: 'home'
            })
        }
</script>
```

## router.push的简写
如果你只需要跳转路由，其实可以直接传一个字符串，该字符串是一个路由的name
```typescript
    import { useRouter } from 'vue-router'
    let router = useRouter();
    router.push('home')
```