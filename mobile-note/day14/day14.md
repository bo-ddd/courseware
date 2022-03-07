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

#### 简单说一下vuex中的几个入参，及作用？

答： state, mutations, actions,modules,getter



1、vuex有哪几种属性？
答：有五种，分别是 State、 Getter、Mutation 、Action、 Module

2、vuex的State特性是？
答：
一、Vuex就是一个仓库，仓库里面放了很多对象。其中state就是数据源存放地，对应于与一般Vue对象里面的data
二、state里面存放的数据是响应式的，Vue组件从store中读取数据，若是store中的数据发生改变，依赖这个数据的组件也会发生更新
三、它通过mapState把全局的 state 和 getters 映射到当前组件的 computed 计算属性中

3、vuex的Getter特性是？
答：
一、getters 可以对State进行计算操作，它就是Store的计算属性
二、 虽然在组件内也可以做计算属性，但是getters 可以在多组件之间复用
三、 如果一个状态只在一个组件内使用，是可以不用getters

4、vuex的Mutation特性是？
答：
一、Action 类似于 mutation，不同在于：
二、Action 提交的是 mutation，而不是直接变更状态。
三、Action 可以包含任意异步操作

5、Vue.js中ajax请求代码应该写在组件的methods中还是vuex的actions中？
答：
一、如果请求来的数据是不是要被其他组件公用，仅仅在请求的组件内使用，就不需要放入vuex 的state里。
二、如果被其他地方复用，这个很大几率上是需要的，如果需要，请将请求放入action里，方便复用，并包装成promise返回，在调用处用async await处理返回的数据。如果不要复用这个请求，那么直接写在vue文件里很方便。

6、不用Vuex会带来什么问题？
答：

一、可维护性会下降，你要想修改数据，你得维护三个地方

二、可读性会下降，因为一个组件里的数据，你根本就看不出来是从哪来的

三、增加耦合，大量的上传派发，会让耦合性大大的增加，本来Vue用Component就是为了减少耦合，现在这么用，和组件化的初衷相背。



####  vuex在组件的适用场景？

答： vuex 只能在业务组件中来封装和调用 vuex中的状态；

不要在非业务组件中去调用； 

一但调用，当前的这个非业务组件就丧失了复用性； 

