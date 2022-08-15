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
    interface GetUserInfo{
        (id: number): UserInfo
    }

    const getUserInfo: GetUserInfo = function(id){
        return { username: 'xiaoming', age: id == 1 ? 18 : 20 };
    }
```
注: 以上interface GetUserInfo接口声明中的id 不需要和 getUserInfo的入参名保持一致,其实也可以把id换成userId:
```javascript
    const getUserInfo: GetUserInfo = function(userId){
        return { username: 'xiaoming', age: userId == 1 ? 18 : 20 };
    }
```

## 定义类接口
我们之前学了如何定义普通的方法或者变量,结构类似于这样:
```typescript
    let str: string = 'hello world';
```
那么我们试着推理一下如果声明类该怎么做呢
```typescript
    interface AnimalInterface {
        name: string;
    }
    // 我们把用声明字符串的方法用到定义类中
    class Animal : AnimalInterface {
        name: string;
        constructor(name: string){
            this.name = name;
        }
    }
```
以上所有的代码,是我们基于推理得出来的写法,但是很不幸的是,这种写法是报错的;

那么在ts中我们该如何定义类接口呢?

答案是把 把 class Animal : AnimalInterface 中的  ":" 替换成一个关键字 implements
```typescript
    interface AnimalInterface{
        name: string;
    }

    class Animal implements AnimalInterface{
        name: string;
        constructor(name: string){
            this.name = name;
        }
    }
```

> implements 是实现的意思;

> class Animal implements AnimalInterface 的意思是 创建一个Animal的类,该类要实现AnimalInterface中定义的所有属性和方法;

> 有可能你已经注意到了实现用的是implements,而不是implement 是复数形式;

> 所以class中的implements后面可以跟多个接口定义,比如:

```typescript
    interface AnimalInterface1 {
        name: string;
    }

    interface AnimalInterface2 {
        age: number;
    }

    interface AnimalInterface3 {
        run():void;
    }
    class Animal implements AnimalInterface1, AnimalInterface2, AnimalInterface3 {
        name: string;
        age: number;
        constructor(name: string, age: number){
            this.name = name;
            this.age = age;
        }
        run():void{
            console.log(this.name + 'is running!');
        }
    }
```