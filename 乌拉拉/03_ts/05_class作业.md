## class作业

作业要求:
1. 定义一个抽象类 广告类Adverise
2. 该类接收几个参数
```typescript
    interface AdveriseOptions {
        el: string;   //元素
        imgUrl: string; // 广告图
        tick?: number;  // 广告展示的时间单位为秒
        width?: number; // 广告的宽
        height?: number; //广告的高 
    }
```
3. 声明两个子类
    1. 首屏广告类 FirstScreenAdverise
    2. banner广告 BannerAdverise
4. 首屏广告展示为屏幕正中间;默认3s后消失;

    banner广告展示为某个div的固定布局中,默认6s后消失;
5. 两种广告都有倒计时功能;
6. 倒讲时显示在广告的右上角, 字样为 '6s 关闭';
7. 用户点击右上角关闭字样,会立即关闭广告;
8. 首屏广告关闭之后会执行banner广告;
9. html内容:
```html
    <!-- 首屏广告 -->
    <div id="first-screen"></div>

    <!-- banner广告 -->
    <div id="banner"></div>
```
10. js调用效果展示:
```javascript
    let firtScreen =  new FirstScreenAdverise({
        el:'#first-screen', 
        imgUrl:'',
        duration:1500, // 广告的持续时间
    })
    // 
    let banner = new BannerAdverse({
        el:"#banner",
        imgUrl:'',
        duration:1500
    })
```

答案:
```typescript
import FirstImg from './a.png';

// 广告参数  广告选项类
class BaseAdverise {
    el: string;
    type?: 1 | 2;
    imgUrl: string;
    duration?: number;
    width?: number;
    height?: number;
}

abstract class Adverise extends BaseAdverise {
    constructor(options: BaseAdverise) {
        super();
        this.el = options.el;
        this.type = options.type;
        this.imgUrl = options.imgUrl;
        this.duration = options.duration;
        this.width = options.width;
        this.height = options.height;
    }
    abstract exec(): void;
}

abstract class ImageAdverise extends Adverise {
    protected CONTAINER_CSSTEXT: string = ''
    constructor(options: BaseAdverise) {
        super(options);
    }

    exec(): void {
        let el: HTMLElement = this.createWrapElement();
        let span = this.createCloseElement();
        let img = this.createImageElement();
        el.appendChild(img);
        el.appendChild(span);
    }


    createWrapElement() {
        let el: HTMLElement = document.querySelector(this.el);
        el.style.cssText = this.CONTAINER_CSSTEXT;
        return el;
    }

    createCloseElement() {
        let span = document.createElement('span');
        span.style.cssText = `
            background: rgba(0, 0, 0, .6);
            color: #fff;
            display: inline-block;
            padding:2px 4px;
            position: absolute;
            right: 0;
            top: 0;
        `

        let index = this.duration || 6;
        span.textContent = `${index}s 关闭`;
        let timer = setInterval(() => {
            index--;
            if (index === 0) {
                clearInterval(timer);
                this.close();
                return;
            }
            span.textContent = `${index}s  关闭`;
        }, 1000)

        let _this = this;
        span.addEventListener('click', function () {
            _this.close()
            clearInterval(timer);
        })

        return span;
    }

    createImageElement() {
        let img = new Image();
        img.src = this.imgUrl;
        return img;
    }

    close() {
        let el: HTMLElement = document.querySelector(this.el);
        el.style.display = 'none';
        this.afterClosed();
    }

    afterClosed() { }
}

// 首屏广告类
class BannerScreenAdverise extends ImageAdverise {
    constructor(options: BaseAdverise) {
        super(options)
        this.exec();
    }
}

// 首屏广告类
class FirstScreenAdverise extends ImageAdverise {
    constructor(options: BaseAdverise) {
        super(options)
        this.CONTAINER_CSSTEXT = `
            position:fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        `
        this.exec();
    }
}

let first = new FirstScreenAdverise({
    el: '#first-screen',
    imgUrl: FirstImg,
    duration: 4
})


// first 首屏广告的意思 
// after 之后
// closed 关闭
// 首屏广告关闭之后
first.afterClosed = function () {
    new BannerScreenAdverise({
        el: '#banner',
        imgUrl: FirstImg,
        duration: 3
    })
}
```