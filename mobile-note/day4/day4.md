### day4
1. 在项目中，你用过iconfont吗？
    1. 答：  是指的 阿里库的iconfont? 还是 字体类型的图标？
2. 字体类型的图标和 iconfont到底有什么区别?
    1. 答： icon-font字体图标可以通过设置颜色来改变图标的颜色，但是iconfont中的png图是不可以的;
        icon-font不会失真，相对于png，不会请求网络，不会占用太多的带宽。
3. svg文件如何使用？和png图有什么区别？
    1.  svg 矢量图，不会失真
    2.  svg 引入方式和png没有区别   
        <img src="icon-search.png">
        <img src="./assets/images/svg/icon_photo.svg">
4. iconfont如何使用？
    把style.css 和 font文件夹放到 assets文件夹下，
    在main.js中引入style.css 后，通过使用这个类名直接就可以用；