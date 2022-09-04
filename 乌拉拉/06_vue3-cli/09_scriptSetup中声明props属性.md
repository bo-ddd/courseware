## script setup中的props

props通常是在父组件给子组件传参时，子组件需要先在内容声明props，但是script setup中有另外的写法

声明式写法
```typescript
    export default({
        props:['title'],
        created(){
            console.log(this.title) // value
        }
    })
```

声明式 + ts
```typescript
    export default defineComponent({
        props:['title'],
        created(){
            console.log(this.title) // value;
        }
    })
```

setup声明方式
```typescript
    export default defineComponent({
        props:['title', 'age'],
        setup(props){
            console.log(props) // { title: 'value', age: 18 }
            let { title } = props;
            console.log(title);  // value;
            return { title }
        }
    )}
```

script setup
```typescript
    // 有一个自带的方法
    let props = defineProps(['title','age']);
    let { title } = props;
```

但是，一般我们不这么写，因为我们用的是ts，ts要声明类型，
声明式中props接收的参数可以是Object类型，比如：
```typescript
    export default {
        props:{
            title: String
        }
    }
```

我们在script setup中也可以用defineProps来声明
```typescript
    let props = defineProps({
        title: String
    });
    let { title } = props;
```

但是一般，我们也不这么写，他是用ts来写的
```typescript
    interface Props = {
        title:  string;
    }
    let props = defineProps<Props>();
    let { title } = props;
```

上面这种写法已经很正常了，但是还可以简化
```typescript
    let props = defineProps<{
        title:  string;
        age?: number;
    }>();
    let { title } = props;
```