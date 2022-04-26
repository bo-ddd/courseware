### day9

#### nodejs如何安装

1.  http://nodejs.cn/
2. 下载稳定版
3. 安装时一直点下一步就行；

#### 如何校验是否安装成功

1. 在你安装成功后， 打开终端（window + R）
2. 输入cmd
3. node -v 



### 注意事项

在工作中，如果不是新开的项目，不要自己去下载nodejs 你的nodejs版本要和其它人的版本号保持一致

不然会出现 项目无法启动的情况；



####  nodejs 是啥？

答： nodejs是一个环境， 在你安装安nodejs安装包后，在终端 会多出两个命令， 一个是 node ,另外 一个是npm;

node命令是执行js文件用的；



#### nodejs能干点啥？

答： 只要不用web端 ，他啥都能干？   服务端 javascript   客户端 ，爬虫，脚本，游戏外挂；



//几百种-几千种语言；

javascript    前端  +  nodejs的环境  导致他无所不能； （这也是js火的原因）



####  module.export 导出；

####  require()   导入；

#### 模块化可以解决的问题？

1. 不传染全局变量
2. 在开发项目时，他不需要那么依赖；
3. 模块可以直接来使用，你不需要关注于这个模块还依赖于其它哪个模块，这种事情 你不需要关注；



但是，nodejs只是一个环境，他不能在web中使用

require()//   



####  模块化打包工具  webpack

1.   你的页面不识别，我可以用webpack工具，转序成浏览器识别的代码；
2.   nodejs和webpack的关系？  是依赖关系   webpack必须在nodejs环境下才可以使用；
3.  vue-cli  他的底层是 webpack;



####  前端的模块化

```javascript
// import  导入
import Pagination from './pagination'

//import =   require


// export default  默认导出； 
//export  ===   module.export
export default class Pagination{
    constructor(){
        
    }
}
```



