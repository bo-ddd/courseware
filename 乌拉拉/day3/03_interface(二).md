# interface(二)
> 在上节课中,我们学了利用interface来定义对象,也学了如何定义非必填项的参数,但是在对象的定义中,往往不止这么简单,比如在业务逻辑中,有时会遇到一种应用场景,就是一个json对象中有不确定的n个参数,此时,如果只用我们上节课所学的东西,就解决不了这个问题,那如何解决n个参数的定义呢?

## 接口中声明n个参数
语法: interface { [propName: string]: 类型 }
```typescript
    // 注解: 该接口代表的是UserInfo类型中可以定义任何属性名,如果定义的key是string类型的,则value值可以是任何类型的值
    interface UserInfo {
        [propName: string]: any
    }

    // username必须是字符串,其它的属性可以是任何类型的值;
    interface UserInfo{
        username: string;
        [propName: string]: any
    }
```
>注: 上述中的 [propName: string] 中,  propName 指的是属性名,但可以被代替成任何值,比如 [x: string] 或者 [n: string] 等, 只是 prop 代表的是属性, name代表的是名称, propName代表的属性名, 只是因为用propName比较语意化而已;

>注: 以上已经讲完了用interface定义json对象的所有基本的使用场景,但interface的作用不止如此,比如他还可以定义函数表达式;

## 定义函数表达式
语法:  interface 方法接口名 { (参数1: 类型, 参数2: 类型): 返回值的类型 };
使用: const 方法名:方法接口名 = function(参数1, 参数2, 参数3){};
```typescript
    interface UserInfo {
        username: string;
        age: number;
    }

    interface GetUserInfo{
        (id: number): UserInfo
    }

    const getUserInfo: GetUserInfo = function(id){
        return { username: 'xiaoming', age: id == 1 ? 18 : 20 };
    }

    // 以上interface GetUserInfo接口声明中的id 不需要和 getUserInfo的名保持一致,其实也可以把id换成userId:
    const getUserInfo: GetUserInfo = function(userId){
        return { username: 'xiaoming', age: userId == 1 ? 18 : 20 };
    }
```
