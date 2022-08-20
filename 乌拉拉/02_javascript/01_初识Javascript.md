# 初识Javascript

> 本节课重点:
1. 了解javascript的作用;
2. 通过document.getElementById() 来获取元素;
3. 如何通过javascript操作dom来修改元素的样式;
4. 可以用let进行变量声明;
5. 了解变量命名范围;
6. 了解变量命名的规范;

在web开发中,必不可少的三门语言,html,css,javascript;
html: 控制内容
css: 控制样式
javascript: 控制行为

你可以简单的把web网页理解成一个人, html就是你这个人本身, css就是你的穿着和打扮, javascript用来控制你的行为,比如跑,跳,吃饭,打游戏和学习等行为;

## Javascript可以用来做些什么?
Javascript的功能很多,可以做任何你看到的页面交互,还有游戏,视频播放,实时聊天等功能,但现在,我们应该从基础学习. 学习如何操作DOM;

## html写在body元素中,css写在style标签中,那javascript写在哪里呢?
答: javascript 写在 script标签中; 且通常情况下,放在body标签下面;
```html
    <body></body>
    <script></script>
```

## DOM
Javascript中提供了一个套操作DOM的API,他能通过创建、移除和修改 HTML，为页面动态应用新样式等手段来操作 HTML 和 CSS。比如当某个页面出现了一个弹窗，或者显示了一些新内容，这就是 DOM 在运行。

## 例1: 设置元素的样式
```html
    <div id="box"></div>
    <script>
        let 盒子 = document.getElementById('box');
        盒子.style.width = '100px';
        盒子.style.height = '100px';
        盒子.style.backgroundRed = 'red';
    </script>
```
```html
    目前为止,我们还没有学习过javascript的任何语法,
    但是我想说,你应该学会观察,和分析上述代码的意思;
    当然,如果你想要能正常的分析出来,我想你最少应该知道上述例子中最简单的英文单词的意思;
```
分析
```javascript
    // let  暂不清楚什么意思
    // =  等于
    // get:获取  element:元素  by:通过  id : id;
    // 把以上的翻译连起来,
    // getElementById : 通过元素的id来获取到对应的元素;
    // getElementById('box') :  获取到id为box的那个元素

    // 结合上面的分析,我们得出
    // let 盒子 = 获取到id为box的那个元素
    // 所以最后这行语句翻译成中文是 盒子是那个id为box的那个元素;
    let 盒子 = document.getElementById('box');
    
    // style 样式  width: 宽  height: 高   backgroundColor : 背景色
    盒子.style.width = '100px';  // 盒子的宽是100px;
    盒子.style.height = '100px';  //盒子的高是100px;
    盒子.style.backgroundColor = 'red';  //盒子的背景色是红色;

    // 因为 盒子 就是id为box的那个元素;
    // 所以上面三行代码也可以解释成;
    // id为box的那个元素的宽是100px;
    // id为box的那个元素的高是100px;
    // id为box的那个元素的背景色为红色;
```

学习中分析的能力非常重要,所以在今后的学习中,要不断的分析和思考;

思考1:
1. 如何将上述的代码转成css写法?
```css
    #box{
        width:100px;
        height: 100px;
        background-color: red;
    }
```
2. 把javascript写法与css写法做对比,得出什么结论?
```
    在css中,如果样式有 -(横杠), 在Javascript中要把 -删除,且 横杠后面的第一位单词要大写,这种规范,叫驼峰命名法;
```

3. 思考上述例子中, 盒子 两个字可以变吗?
```javascript
    let box = document.getElementById('box');
    box.style.width = '100px'; 
    box.style.height = '100px'; 
    box.style.backgroundColor = 'red';
```
答案:
```
    经测试和分析发现, 盒子 两个字是可以被替换成任何文本内容的,
    所以,我们说 let 关键字之后跟着的 载体是可以被更换成其它名子的;
    我们把 let 之后跟着的这个文本叫变量, 所以,
    我们也可以把
        let box = document.getElementById('box') 
    翻译成: 把id为box的元素放在名为box的变量中 
```

经过上面的分析和学习,我们知道了一种语法叫
```html
    let 变量名 = 值;
```

4. 思考分析: 变量名是可以随便起名吗?
```
    答案: 并不是哦, 因为根据上述语法说明为 let 变量名 = 值;
    但是你想,如果有这样的语法,就不构成语法了哦,比如:
    let let = 0;
    如果你这么写, 就不符合我语法规定了, 因为 let 后面必须加 变量名, 但是你又 写了一个let 此时, 浏览器就看不懂你是什么意思了;
```
5. 变量名的命名范围?
```html
    1. 非关键字
    2. 字母
    3. 字母 下划线的组合
    2. 字母 数字 下划线中任意两种或者三种组合,但不能以字母开头
    3. 中文  (支持,但项目中,不要用中文去写)
```
6. 变量命名规范
    通常情况下,变量命名是用驼峰命名法来命名;  即: 一个单词时用小写英文单词,多个单词时, 首单词的第一个字母小写,后面所有的单词首字母大写, 比如:
    ```javascript
        // 用户名
        let userName = 'xiaoming';
        // 用户成绩
        let userScore = 85;
        // 成绩
        let score = 60;
        //比如我们今天学的获取元素id;
        getElementById
    ```


