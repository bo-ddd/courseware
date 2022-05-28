### day22

### 复习

1. vue中钩子函数的底层原理；  beforeCreate created  beforeMounte mounted destroy当页面关闭时
2. Object.defineProperty  实现了数据劫持，他是实现数据双向绑定的核心api;
   1. setter  getter 
   2. set 方法是当设置一个值时就会走到set方法中；
   3. get 方法是当获取一个值时就会走到get方法中；
3. 利用递规实现了多层级渲染列表；
4. 订阅者模式
   1.  你要知道在哪里进行订阅dep   ：  observer观察者去订阅。
   2. 你要知道在哪里进行watcher;   ：   node=watcher  能拿到节点的地方，只有一个地方，就是compiler方法，这个方法是渲染列表时，动态获取到所有的节点；

#### 面试题

1. 你能说一下vue的底层实现原理吗？

   答： vue的底层是用Object.definePropery方法来实现数据双向绑定的；

2. 你能详细说一下吗？
   1. vue利用Object.definePropery方法来实现数据双向绑定
   2. 在底层中用到了订阅者模式，来实现当数据变化时的通知和修改；
   3. 其中用到了Dep和Watcher
3. 你知道vue底层中Dep方法的作用吗？
4. 你知道vue底层中Watcher方法的作用吗？
5. 说一下对mvvm的理解？
   1. m :model    写逻辑的地方；
   2. v : view        写页面样式的地方；
   3. vm  view model     页面数据变化时，数据变化；   数据发生变化时页面变化；
6. vue中的diff算法？
7. 说一下你对vue中的Vnode的理解？
   1. 其实就是虚拟dom,
   2. vue通过操作vnode动态的生成dom;