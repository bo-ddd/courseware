### day2

#### css相关

1. 写页面时，新建一个文件夹

2. 目录结构

   ```html
   -| react-demo
   	-| pages
   		-| doc   *html,js,css的名称应该保证一证
   			-| index.html   doc.html  *html 中不能有样式， html中引入路径时，不能绝对路径，一般都要用相对路径；
   			-| doc.css  *写css时，也要用BEM规范来写   
   			-| doc.js
   	-| assets
   		-| images
   				logo.png   *图片的命名(BEM)  如果是小图标  icon-search.png  icon-search_blue.png
   ```

3. css技巧

   1. css其实分为两种，一种叫布局（layout），一种叫样式(style)

   2. 样式从大往小写

   3. 在任何一个页面中，body中必须要包含一个最大的div;

   4. 一般情况下，最好不要用id去写样式；原因是，在做项目时，id在某些情况下，产品会告诉你固定的id，你不可以随便动

   5. class的维度要语义化

   6. 在样式中，几乎不会存在这种写法

      ```css
      .wrap{
          
      }
      // 一个class名下面 ，几乎不会出现标签；
      // 原因是
      .wrap div{
          
      }
      ```

   7. 在一个项目中，样式中，不可能存在 * ，原因是，一个页面正常情况下，会有成千上万个元素； *代表的是所有的元素进行样式更改，此时就会出现 很多的重绘和回流；

   8. 重绘和回流会十分的影响性能；

   9. 布局的时候，特别忌讳去用色块，原因是，几乎所有的布局都没有宽和高，如果你用色块的话，就必须 声明宽和高，此时布局就会出现错误；几乎也不会给class设置 flex;

      ```css
      .flex-2{
          flex:2
      }
      ```

      

   10. class的声明(正确写法)

       ```css
       // 这种写法，可维护性较高；
       .wrap{
           
       }
       .wrap .header{
           
       }
       
       .wrap .container{
           
       }
       ```


   11.  icon图标命名不要有中文

   12. 文件夹命名不要有中文

   13. class的类名要满足复用性（除了Layout以外）；

   14. 几乎没有任何一个class样式中，会同时包含宽和高，在样式中，几乎不会用到固定的高，几乎也不会用到固定的宽（除了布局Layout）

       ```css
       //错误，logo可以不设置宽高；
       .logo{
       	width: 203px;
       	height: 60px;
       	display: flex;
       	align-items: center;
       }
       ```

   15. 按钮的布局不可以设置宽和高

       ```css
       .nav{
           display: flex;
           flex:2;
       }
       //通常情况下， 一个按钮都不会设置固定的宽和高，而是用padding撑起来的；
       //这样做，在项目中，有更好的兼容性和适配性；
       .nav .button{
           padding:6px 12px;
       }
       ```

   16. 如果有一个div，div里面的其它所有的元素样式都一样，那么那些一样的元素命名，应该叫 .item

       ```html
       <div class="list">
           <div class="item"></div>
           <div class="item"></div>
           <div class="item"></div>
       </div>
       
       <div class="nav">
           <div class="item"></div>
           <div class="item"></div>
           <div class="item"></div>
       </div>
       
       <div class="nav">
           <div class="nav-item"></div>
           <div class="nav-item"></div>
           <div class="nav-item"></div>
       </div>
       ```

   17. 写样式时，考虑一个class，代表着一些固定的样式，但是不要有宽高，不要有flex:2，不要有改变位置的语法（margin）

       ```css
       .icon-search{
           //放大镜的图标
           width:24px;
           height:24px;
           margin-right:5px;
       }
       
       .icon-search{
           width:24px;
           height:24px;
       }
       
       .mr-5{
           margin-right:5px;
       }
       
       <div class="icon-search mr-5">
       
       <div class="icon-search">
       ```

   18.  最好不要用id去写样式， id一般用来在js中获取唯一的dom元素 

   19. 在你的项目中，如果所有的ul li都需要清除这些默认样式时，那完全可以提出来做公共样式，公共样式，一般用来清除浏览器的默认样式；

   20.  在项目中，几乎不会出现 -margin

        也几乎不会出现 margin-left : 700

       我开发这么多年，有一个margin: 100+ 就已经顶死了 

       如果你们会用到这种大margin的情况下， 99.99%是写错了 

   21. *strong 标签有可能即将废弃，最好用 font-weight :bold 代替*

   22. 能用一个标签实现的功能，不要用两个

   23. 在开发中，如果要做选中后的样式效果，只有一个样式名：  active

   23. 在开发中， 90%以上，几乎不会用到定位 ；

4. 图片的下载

   1. 打12
   2. 鼠标选中图片
   3. 复制图片链接
   4. 打开链接
   5. 鼠标右键，图片另存为

5. 网站是否可以用rem?

   1. rem布局一般是用来用移动端 和大屏适配的项目，
   2. 否则最好用 px布局；

6. css的计算属性

   ```css
   .wrap{
       width:calc( 100vh - 60px );  // 97vh;     vh:   v:viewport(视口/屏幕)  h：height
                                                vw:  v:viewport   w:width;
   }
   ```

7. css变量

   ```css
   :root{
       --header-height:100px;
   }
   .header{
       height:var(--header-height);
   }
   ```

8.  wrapper的常用布局？

   1. 在项目中，真实的wraper的宽一般分为几种 
   2. 800px 1100px  1200px  1340   1400  1550px;
   3. 具体情况视项目ui设计稿而定；
   4. 但是这个尺寸一般是根据市场上的主流显示器屏幕的大小而定的

9. 每个标签里 最多能加几个class名字？
   1. 越少越好  
   2. 一般情况下控制在3个左右 绝对够用；
   3. 因为class名越多，会触发更多次的重绘和回流；

	10. ui样式中一些你看不见的法则

     	1. 在web页面中，审美的过程中，几乎所有的布局都是对称的； 
     	2. 如果你发现这个元素不对称，那是因为你找错了；
     	3. 如果你发现这个元素有对称性，那么，他之间的距离 ，通常用padding;

	11.  margin与padding的应用场景

     模块与模块之间的距离要用margin
     模块内的距离，如果是对称的，大多数要用padding