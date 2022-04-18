### day2

#### css相关

1. 写页面时，新建一个文件夹

2. 目录结构

   ```html
   -| react-demo
   	-| pages
   		-| doc   *html,js,css的名称应该保证一证
   			-| index.html   doc.html  *html 中不能有样式， html中引入路径时，不能绝对路径，一般都要用相对路径；
   			-| doc.css  *写css时，也要用这种规范来写   .a .b .b1 .div1
   			-| doc.js
   	-| assets
   		-| images
   				logo.png   *图片的命名(BEM)  如果是小图标  icon-search.png  icon-search_blue.png
   ```

3.  css技巧
   1. css其实分为两种，一种叫布局（layout），一种叫样式(style)
   2. 样式从大往小写