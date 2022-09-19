## setup之 响应式:工具

本节我们来说一下组合式函数中,自带的几个响应式工具,

所谓的响应式工具,其实就是 vue 提供的几个简单的方法;

这些方法一般是判断vue中的数据类型的,  比如判断是否为 ref 对象

判断是否为只读属性(readonly), 判断是否为源(reactive)对象等

非常的简单,我们来一起看一下吧!

1. isRef()  判断是否为为Ref类型的数据,返回布尔值
```javascript
    let title = ref('hello world');
    let bool = isRef(title) 
    console.log(bool) // true;

    let username = 'xiaoming';
    let bool2 = isRef(username);
    console.log(bool2) // false;
```
2. unref()  判断是否为Ref类型,如果是,返回该值对应的value值,否则返回其本身;
```javascript
    //相当于
    function unref(ref){
        return isRef(ref) ? ref.value : ref;
    }
```

3. toRef() 和一个响应式对象进行绑定, 任何一个值发生改变,则两个对象的值都会变
```javascript
    let userInfo = reactive({
        username: 'xiaoming',
        age: 18
    })

    let username = toRef(userInfo, 'username');
    username.value = 'xiaohong';

    console.log(username.value) // xiaohong
    console.log(userInfo.username) // xiaohong   
```

4. toRefs() 将一个响应式对象中所有的key转换成 ref对象
```javascript
    let userInfo = reactive({
        username: 'xiaoming',
        age: 18
    })

    let userInfoRefs = toRefs(userInfo);
    console.log(userInfoRefs.username.value) // xiaoming;
    console.log(userInfoRefs.age.value) // 18
```
toRefs方法就是基于toRef方法做了一个循环,实现方案如下:
```javascript
    function toRefs(refs){
        let res = {};
        for(let key in refs){
            res[key] = toRef(refs[key]);
        }
        return res;
    }
```

5. isReactive() 判断是否为 reactive 对象
```javascript
    let userInfo = reactive({
        username: 'xiaoming',
        age: 18
    })
    let bool = isReactive(userInfo)
    console.log(bool) // true;
```

6. isReadonly() 判断是否为只读对象
```javascript
    const username = readonly('xiaoming');
    let bool = isReadonly(username);
    console.log(bool) // true;
```
