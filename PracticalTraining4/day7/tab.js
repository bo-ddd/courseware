class Tab {
    constructor(props) {
        // 所有的属性(静态的),写到constructor中; 
        // 所有的方法(动态),封装到 prototype中;
        this.oNav = document.querySelector(props.el);
        this.aItem = this.oNav.querySelectorAll(props.item);  //就是5个item;

        this.defaultActive = props.defaultActive  || 0;
        console.log(this.aItem) // 
        // 如果你想执行一段程序  一般情况下,可以叫 exec() 执行     init()  //初始化;
        this.exec();
    }
    setActive(index){
        this.clearActiveStatus();

        this.aItem[index].classList.add('active');
    }
    // 方法;: 方法是有动作,是有行为的;
    exec() {
        this.setActive(this.defaultActive); //


        const { aItem } = this;
        // const aItem = this.aItem;
        var _this = this;   // _this   构造函数的实例;
        // 在事件中,是不行的;
        // 因为通常情况下,我们需要用到this;也就是点击的那个元素;
        // 所以在开发中,通常情况下,事件中不能用箭头函数;
        this.oNav.addEventListener('click',function(e){
            // e.target // item;
            // target: 目标
            // is: 是
            // e.target.classList   item.classList当前元素的class列表;
            // includes 包含 看看这个classList中是否包含这个 item 的样式;
            // 如果包含 返回 true  反之 返回 false;

            // 
            let isTarget = Array.from(e.target.classList).includes('item');
            console.log(isTarget);
            if(isTarget){
                _this.clearActiveStatus();
                e.target.classList.add('active');
            }
        },false)
    }

    clearActiveStatus(){
        this.aItem.forEach(el=>{
            el.classList.remove('active');
        })
    }
}