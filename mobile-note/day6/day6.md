1.  array 和 json 的区别及使用场景?
    答: array有序  json无序
    使用场景:  array 是一个集合(list),指的是多个
    json是一个对象  
    项目中,服务端返回的数据结构就是json中嵌套数组 
    application/json
    
2.  const  let  var 有什么区别?
    let  无变量提升 
    var  有变量提升
    const  相当于常量
3. 自执行函数和函数声明有什么区别，及相关应用场景是什么？
 
4. js垃圾回收机制？
    垃圾回收机制在ie浏览器中有效吗？
    垃圾回收机制只在旧ie中有效？ 但是，你回答的时候，要说所有浏览器都有回收机制；
    如果不会回收会造成什么问题？  内存泄露？
     内存泄露会造成浏览器出现什么问题？  
5. 什么是闭包？ 及应用场景？

6. 深浅拷贝？

7.  原型链？

8.  Promise

9.  ajax的封装？
    <!-- 这种ajax封装有没有兼容性问题？ -->

    <!-- 对不对不重要，重要的是项目经验 -->

    <!-- 你公司的项目中需要做到兼容到ie8吗？ -->.

10.  跨域

###  CSS相关面试题
1.  你用过css中的计算属性吗？
    calc()
2.  项目中的主题主何配置？
    考点： css中变量的声明
3.  style标签的scoped作用？
    scoped属性该样式只在当前模块中才生效
4.  移动端的布局页（Layout.vue /  Layout.jsx）如何布局
    1. 计算属性设置高
    2.  grid

###  vue相关
1.  通常情况下，我们要把需要渲染的数据渲染到页面上，用的格式，通常是
    数组+JSON
2.  vue-router中如何跳转及传参？
    this.$router.push({name:'',query:{},params:{}})
    1. query和params有什么区别？
    答：query相当于get参数拼接
        this.$router.push({
            name:'Home',
            query:{
                id:1
            }
        })
        eg:
        www.baidu.com/home?id=1
        params 相关于 post,只传参，但是在地址栏链接上不显示该参数；
        this.$router.push({
            name:'Home',
            query:{
                id:1
            }
        })
        eg:
        www.baidu.com/home

    2. query和params应用场景？
        如果你的页面支持分享，那么你应该用query 否则用params;

    3.  vue-router中  router 和 route有什么区别？
        答： router 控制的是跳转到哪一个页面，是一种行为；
            route 是一个配置文件，告诉你可以跳转到哪些地址；

            router.push({
                name:'Home',
            })


            route
            const route = [
                {
                    path:'/',
                    template:Home
                },
                {
                    path:'login',
                    template:Login
                }
            ]

            play   玩    player  玩家
            work   工作   woker 工作的人 工人
            route   路由   router  跳转路由

3.  模块引入的方法有几种？他的使用场景？
    回答方式一（推荐）：  同步加载 和 异步加载
    回答方式二：直接加载  和 按需加载

4.  前端（浏览器）的缓存策略？
    浏览器中存在一种缓存策略，如果你有一个资源文件（图片，音乐，js文件，css文件等）， 你打开以后，他会默认的把这些资源放在你本地C盘的一个缓存文件夹中，如果你下次在访问这个资源，浏览器会优先去你的C盘中找，如果找不到，在去请求服务器

5. 多次点击相同的路由跳转按钮，控制台会出现错误，如何解决？

6.  webpack中的缓存策略？性能优化？
    1.优化hash方法  hash,  contenthash
    2. 利用webpack导入cdn;

7.  自我介绍？
    我叫xxxx,最近做的项目是x端的xxx项目，用的技术栈是xxxxxxxxxxxx,.
    之前还做过xxx端的xxx项目，
    我还会xxxxxxxxxxxx的技术栈，面试官，您看想了解哪个项目？

8.  c2c   b2c  o2o  b2b
    c:客户端
    b: business 商户端

    b2c  b端配置商品，提供给h5的c端   
    o2o  :  线下到线上   线上到线下  o:online  




































10. await async