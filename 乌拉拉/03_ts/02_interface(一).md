## 如何定义json

## 方法一:
语法: let obj: {key1: 类型, key2:类型} = {key1: 值, key2: 值 };
```typescript
    let obj: { username: string, age: number } = { 
        username: 'xiaoming', 
        age:18 
    };
```

> 注: 方法一的写法很直观,但是如果一个json的key很多,那么你需要在类型中声明好多类型,此时代码的可读性会下降很多,为了解决这个问题;我们需要把定义的类型提到外面去,并且需要用一个关键字 interface

## 方法二:
```typescript
    // 定义对象的 数据类型,语法如下:
    interface UserInfo {
        username: string;
        age: number;
    }

    let obj: UserInfo = {
        username: 'xiaoming',
        age: 18
    }
```
> 注: 方法二中利用interface声明对象的参数必须有两个key,一个是username,另外一个是age,如果不传,代码则会报错,但是在我们的业务逻辑中,通常会有一些参数是必传项,还有一些参数是非必填项,那么我们如何解决这个问题呢?

> interface的命名规范: 驼峰 + 首字母大写

## 在声明的属性后加?(问号),代表的非必填项
例:
```typescript
    interface UserInfo {
        username: string;
        age: number; 
        sexName?: string   //加?代表非必填
    }

    // 正确
    let user1 = {
        username:'xiaoming',
        age: 18
    }

    // 正确
    let user2 = {
        username:'xiaoming',
        age: 18,
        sexName: '男'
    }
```
> 注: 通过上面的学习,我们已经学会了如何声明非必填项,但是观察一下上面的例子的中sexName会发现, 性别本身只应该是'男' 或者 '女',但是因为声明一个string类型的数值,所以,就算你将 user2.sexName 设置成 '篮球' 也是不会报错是的,此时就会出现问题,为了解决这个问题,出现了另外一种类型,叫联合类型;

## 联合类型
概念: 联合类型指的是一个变量可以拥有多个类型
1. 语法一: let 变量名: 类型1 | 类型2 | 类型3 | 类型4
2. 语法二: let 变量名: 值1 | 值2 | 值3
```typescript
    // 翻译: val属性可以是字符串类型,也可以是数字类型,其中|代表的是或的意思
    let val: string | number;
    val = 'hello world';
    val = 18;

    // 解释: sexName变量的值只可以是 '男' 或者 '女'
    let sexName: '男' | '女' 

    // 所以上面定义的UserInfo接口则应该可以写为:
    interface UserInfo {
        username: string;
        age: number;
        sexName: '男' | '女'
    }
```

## type类型
在联合类型中,如果变量的类型较少,可以用以上命名是完全ok的,但是试想有这么一种应用场景: 有两个或者两个以上的变量都是相同的联合类型,且该联合类型有至少5种以上的值,则你的代码看起来会像是这样:
```typescript
    let username: 'xiaoming' | 'xiaohong' | 'xiaogang' | 'xiaopengpeng';
    let username2: 'xiaoming' | 'xiaohong' | 'xiaogang' | 'xiaopengpeng';
```
上面代码中,有可能你已经发现,其实代码的类型声明会很冗余,在ts中,有一个关键字叫type,他的作用是声明一个新的类型(或者说是给一个联合类型进行重新命名)

语法一: type 类型名 = 类型1 | 类型2 | 类型3

语法二: type 类型名 = 值1 | 值2 | 值3

所以上面例子中的代码可以写成:
```typescript
    type users = 'xiaoming' | 'xiaohong' | 'xiaogang' | 'xiaopengpeng';

    let username: users;
    let usernam2: users;
```