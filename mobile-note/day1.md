### 项目创建的注意事项
1. 项目所放在的目录不能有中文

### 移动端适配
1.  flexiable.js   的作用是在html和body标签上设置对应的font-size，达到rem自适应的效果；
2. 为什么要在html和body上设置font-size? 
    答： 因为rem适配，是根据html标签字体大小的变化而变化；
3. postcss-plugin-px2rem  插件的作用： 是将px转换为rem;
4. 面试题： 你们公司是用的阿里rem适配方案吗？
    答： 是，（flexiable.js是阿里写出的适配方案）
### rem
1. rem是相对于html标签字体的大小;
2. 1rem =  html标签的font-size;

### 移动端开发注意事项
1. 开发时的所选设备宽的尺寸是375；
2. 一般情况下，html标签的font-size设置为10px; 意思是1rem = 10px;
3. 开发时量的尺寸（px）如果是奇数，那么应该改成偶数，比如量尺寸为13px，则修改为 12px或者 13px;

https://www.ysense.com/login


px  to rem

在你的页面中，将你写的px转换成rem;


npm 如何安装和卸载
<!-- 在项目中是不需要去下载的 -->
npm uninstall  lib-flexible

npm install  安装 
npm uninstall 卸载

<!-- 如何判断插件是否卸载成功 -->
1. 打开 package.json 
2. npm uninstall  lib-flexible


<!-- vue -->
1.  在声明vue组件或者页面的时候，必须给一个最大的容器（div）,如果不声明，就会报错；
  这个错误只在vue2.x版本中出现 ，如果是3.x版本，是没有这个问题的；



#### 知识点：如何确定检查自己的布局是否正确？
答： 关键词：蚂蚁线

#### 不允许创建一个空的div