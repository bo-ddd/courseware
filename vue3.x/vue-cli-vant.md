```javascript
1. npm i vant@next
2. npm i babel-plugin-import --save-dev

// 3.  babel.config.js
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}

// 4.  main.js
import { Button,Popup } from 'vant';

createApp(App).
.use(Button)
.use(Popup)

//vant 使用文档地址 ： 
//https://vant-contrib.gitee.io/vant/v3/#/zh-CN/popup
```

