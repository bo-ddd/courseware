## util方法的封装

通常情况下在项目中会有一些方法，可以拿来复用，此时就要放在一个单独的文件夹中，我们通常会放在 assets/util/index.js 中

util方法的作用： 封装一些不包含业务逻辑的方法，用来复用,比如：

```typescript
    // src/assets/util/index.ts
    export function url(url: string): string{
        return new URL(`./assets/images/${url}`, import.meta.url).href;
    }
```

以上方法的封装，是在vue2时的写法，在vue3中推荐你导出的是一个函数，函数return 一个 object 对象；
```typescript
    function url(url: string): string{
        return new URL(`./assets/images/${url}`, import.meta.url).href;
    }

    export default function(){
        return { url };
    }
```

用法说明： 
1. 导入时要以use开头，这种函数叫组合式函数(composable)