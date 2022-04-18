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

   9. 布局的时候，特别忌讳去用色块，原因是，几乎所有的布局都没有宽和高，如果你用色块的话，就必须 声明宽和高，此时布局就会出现错误；

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
   13. 

4.  图片的下载

   1. 打12
   2. 鼠标选中图片
   3. 复制图片链接
   4. 打开链接
   5. 鼠标右键，图片另存为

5.  网站是否可以用rem?

   1. rem布局一般是用来用移动端 和大屏适配的项目，
   2. 否则最好用 px布局；

6.  css的计算属性

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

   