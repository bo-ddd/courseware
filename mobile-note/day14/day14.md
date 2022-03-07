#### day14

> 主要内容：
>
> 1. vuex的几个重要方法的作用，及 vuex的使用场景
> 2. 项目模块的表达
> 3. C端送货的相关流程和业务实现

####  vue中，父子组件如何传参？

答： props;   

#### 详细说一下props如何传？

答： 父组件调用子组件，父级的子组件中声明一个属性节点，通过子组件的props进行接收；

#### 常用的节点类型？

答： 属性节点，标签节点，文本节点，注释节点；

#### Vuex的适用场景？

答： vuex适用于组件嵌套层级较深时；

#### Symbol的概念？

答： symbol的声明是全局唯一的； 你声明两个Symbol，他是两个不同的symbol实例，实例和实例之间是不相等的；

就相当于  let person1 =  new Person('xiaoming')   let person2 = new Pseron('xiaoming')

console.log(person1 === person2)   //false; 因为他们不是一个实例；

#### Symbol的应用场景？

答法一：我之前看到vuex引关底层，store就是用的Symbol;

上面这种回答方案是建立在你整体面试氛围比较ok的前提下；

答法二：之间写过一个处理业务数据的类，其中用到了Symbol;  Order  Goods  Animation；



#### C端送货流程的实现？

#### 路由跳转的传参方法和如何接收？

#### 你了解过一些设计模式吗？

答： 单例模式， 比如vuex中的$bus 就是用单例实现的；

#### vuex几个重要参数？

答：  state,  mutations, getters, modles,actives

#### 私有变量的命名方法？

答： *__*proto*__*



#### 申请成为商户的流程



####  你有看过vuex的底层实现原理吗？

####  单例模式中可以解决模块传参问题？那我们为什么还要用mutations这么复杂的方法来定义呢？

#### 你能详细的说一下vue-cli中的$bus传参方案，及他是如何实现的吗？

#### 简单说一下vuex的作用？

#### 简单的说一下vuex中actions的作用？

答：





