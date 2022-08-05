1. 上传功能是如何做出来的？
2. 你项目中用到了formData吗？
3. 对formData的理解？
4. vuex的作用？关键key？
5. 项目有多少个页面呢？
6. vuex使用的价值？
7. vuex和localstorage的区别？
8. vuex的持久化？
9. mutations / action 区别？
10. vuex的辅助有哪些？
11. state和gettters的区别？
12. 项目中vuex的架构目录？
13. 导出功能做过吗？

new XLSL({
    el:document.querySelector('#out-table'),
    excludes:[3,5,8]
})

1. vuex常用的几个属性？
state, mutation, action,  getter, module

2. vuex几个属性的作用？
state:存取状态;
mutation: 修改（设置）状态
action: 异步方法，通常用来返回异步接口的api;
getter: 相当于state中状态的计算属性
module: 模块化,作用是把各种状态存取到各个命名空间中，方全管理;

3. vuex模块化的目录结构？
-| store
    -| modules
        moduleName1.js
        moduleName2.js
        moduleName3.js
        moduleName4.js
    index.js    // index.js是vuex的入口，需要把modules中的模块导入到index.js中;

4. vuex的作用及理解？
    vuex是用来存取各种状态的，适用于复杂组件之间的传参;

5. vuex中辅助函数有哪些？及他们的作用？
    mapState, mapMutations, mapActions, mapGetters;
    map:映射
    把map后面的单词中的方法映射到当前vue实例的this上;

//修改头像概要设计文档:
1. 用户进入修改头像页面，默认选中用户当前的头像;
    用户当前的头像要从vuex中取,但是会遇到刷新页面后用户头像丢失的问题,此时需要用到vuex的持久化
    这是一道面试题:vuex持久化应用场景?
2. 用户手动上传用户头像，则默认选中的是修改后的头像；
3. 用户点击确认修改按钮，提示用户确认修改当头像的弹层；
4. 如果用户点击取消按钮,则关闭当前弹层;
5. 如果用户点击确定按钮且用户选中的头像是自定义头像,则上传该头像到oss后修改用户头像;
6. 如果用户点击确定按钮,修改的是系统自带头像则直接修改用户头像;
7. 用户上传的头像,会顶替到上一次的上传的头像;
