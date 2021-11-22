```javascript
//1. npm install better-scroll -S 

//2. npm install @better-scroll/core

//3. npm install @better-scroll/slide --save

//使用方法：  Home.vue
  import BScroll from '@better-scroll/core'
  import Slide from '@better-scroll/slide'

  BScroll.use(Slide)
  
 export default {
     mounted(){
         // nextTick方法是一个异步方法，一般应用于要获取页面元素后做的操作，都需要写在nextTick方法中；
         // this.$refs.swapper  : vue版的获取dom元素方法； 页面中需要声明  <div ref="swapper"></div>
         this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.swapper, {
            scrollX: true,
            scrollY: false,
            slide: {
              threshold: 100,
              autoplay: false,
            },
            momentum: false,
            bounce: false,
            stopPropagation: true,
          });
        });
     }
 }


```

