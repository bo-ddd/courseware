## class
在原生js中,我们想声明一个动物类,可以这么写
```javascript
    class Animal{
        constructor(name){
            this.name = name;
        }
    }
    let animal = new Animal('小汪');
    console.log(animal.name);  // 小汪;
```

如果我们想要创建一个狗类,则可以用到继承
```javascript
    class Dog extends Animal{
        constructor(name){
            super(name);
        }
    }
    let dog = new Dog('小汪');
    console.log(dog.name) // 小汪;
```

那如果在ts中该怎么转换呢?
```typescript
    class Animal{
        name: string;  //此处的 name 指的是当前实例中的 this.name
        constructor(name: string){
            // 此处的语法并不能写成  this.name: string = name;  会报错;
            // 应该把类型声明到constructor同一级;
            this.name = name;
        }
    }

    class Dom extends Animal{
        constructor(name: string){
            super(name);
        }
    }

    let dog:Dog = new Dog('小汪');
    console.log(dog.name);  //小汪;
```

> 我们已经学会了在类中使用基本的类的定义方法,其实也只是学会了如何在类中定义属性的类型而已;

> 接下来我们看一下如何给一个类的原型中声明一个方法, 在Animal类中声明一个run的方法;

## 类中声明原型方法
```typescript
    class Animal{
        name: string;
        constructor(name: string){
            this.name = name;
            this.run();
        }
        run(): void{
            console.log(`${ this.name } is running!`)
        }
    }

    // 当new出这个animal对象时控制台中就会打印出 this dog is running! 的字样;
    let animal = new Animal('this dog');

    // 我们也可以通过直接调用在一次的在控制台中打印出 this.dog is running! 的字样;
    animal.run()  // 
```

## public 关键字 公共
在上面的例子中,动物类的每个方法和属性都是公共的,都可以被外部所访问,比如可以通过 animal.name 获取到动物的名称,  也可以通过animal.run() 来让动物跑起来;
上述的代码其实就相当于在每一个方法和属性前加上了public关键字,比如这样:
```typescript
    class Animal{
        public name: string;
        public constructor(name: string){
            this.name = name;
            this.run();
        }

        public run(): void{
            console.log(`${ this.name } is running!`);
        }
    }

    let animal = new Animal('this dog');
    console.log(animal.name) // this dog;
    
    animal.run() // this dog is running!
```

## private 关键字 私有
但是在业务逻辑中,通常情况下,如果类中的变量不想被外部所访问,则应该加上private关键字
```typescript
    class Animal{
        // 私有
        private name: string;

        public constructor(name: string){
            // 私有属性在方法内部是可以访问的:
            this.name = name;
            // 私有方法在方法内部是可以访问的:
            this.run(); 
        }

        // 私有
        public run(): void{
            // 私有的属性 this.name 在这里是可以被正常访问的;
            console.log(`${ this.name } is running!`);
        }
    }

    let animal = new Animal('this dog');
    console.log(animal.name)  // 会报错: 因为私有变量不可以被外部所访问
    
    animal.run() // 会报错;  因为run方法是私有方法,不可以在外部所访问;
```

