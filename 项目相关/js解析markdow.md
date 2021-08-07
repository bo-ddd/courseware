#### js解析markdown

```javascript
// 前置条件
// npm install markdown-it

// vue-cli使用方法
 import MarkdownIt from 'markdown-it';
 let md = new Markdown();
 let res = md.render("### hello world") //入参填markdown语法；
 
 // html使用方法：
 <script src="./markdown-it.js"></script>
 let md = window.markdownit();
 let res = md.render("### hello world")
 // res就是被转换后的html;
 
 //如果需要markdown皮肤，可根据要求，去网上下载markdown对应的皮肤;
```

