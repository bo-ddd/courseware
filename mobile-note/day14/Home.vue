<template>
  <div class="home">
    this is Home page
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import store from '@/assets/store'

console.log('home.vue')
console.log(store);

// 你现在有100个页面,100个页面全都需要用不同的业务逻辑来改这个值,出错了以后
// 我们没有办法找到对应的哪个页面修改的值 ,就算在这个地方,也不行;
// 这种set方法,你跟我和state一样,你直接在vuex中定义好你需要改成啥值, 你定义成啥,你就来改啥;
// store.set('username','abc')
// store.store.username = 'xiaoming';

// vuex用mutations方法来定义你要将什么值 ,改变成什么样的值 :
// 这么调用可以把vuex中设置username的逻辑放在了vuex中;
// 如果该方法写的有问题,就直接去vuex中找这个方法,
// 这样我们就可以快速的解决问题;
// 但是在vuex中规定,你不可以直接调用这个方法;
// 在vuex中,的调用方法是这样的:
// store.commit('username');   commit提交修改  
// git commit -m "提交代码"   提交修改我所修改的代码,给这次提交的代码加一个描述,方便我们去github中查找对应的提交记录 -m  message  
// store.mutations.setName();


// vuex调用了commit方法,commit方法调用了你在mutations中声明的方法;
store.commit('USER_NAME')

console.log(store);

export default {
  name: 'Home',
  // components: {
  //   HelloWorld
  // }
}
</script>
