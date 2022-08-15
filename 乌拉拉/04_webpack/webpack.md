### 前言
1. 随着项目的发展,项目越来越大,此时,更好的维护js,和管理每一个js就成了头等问题;
我们有可能会用自执行函数来包含我们写的方法,来达到减少污染全局变量的作用;
但是更好的方案,是模块化;
2. 因为目前浏览器对模块化支持并不是特别友好,所以出现了打包工具 webpack / vite,这些打包工具都是基于node环境,可以把模块化的语法转译成浏览器识别的语言;同时还具有优化性能等作用;
3. webpack中有几个关键的属性, entry(入口),output(出口),  意思是把入品的路径文件打包到出口路径中,并给打包的文件起一个其它的名字; 此外,webpack还有一个plugins参数,plugin意思是插件的意思,插件通常在开发中起的是扩展的作用;在webpack中,我们用到了htmlWebpackPlugin,来动态的生成html; 除此之外还有一个module属性,可以通过该属性配置更多的loader来让编译一些其它类型的静态文件,比如 ts,less,sass,vue,png等;

### 知识点
1. webpack使用流程
    1. npm init -y     注: -y   ==  --yes  指的是默认创建node环境,并生成默认的package.json配置文件
    2. npm install --save-dev webpack webpack-cli

2. webpack的作用?
答: 是把开发出来的代码进行打包

3. 如何配置这两个参数呢?
在webpack.config.js文件中进行配置,告诉webpack你想打包哪个文件,  你想把打包后的文件,放在哪个文件夹中;

4. 如何打包?
    1.  package.json 的scripts 中声明 一个 build语法;  (只是第一次需要配置)
    2.  npm run build 就可以运行;

5. package.json中的scripts?
    答: 配置该scripts的key和value; 启动方式为  npm run key
    (需要了解)如果你配置的key 为  start  |  stop  可以简写成    npm start  |  npm stop

6. 如何高效开发?
    答: 在webpack中配置devServer(利用webpack给我们启动一个服务器)

7. 如何配置devServer?
    1. npm install  --save-dev webpack-dev-server
    2. 在webpack.config.js中进行配置;
        ```javascript
            module.exports = {
                devServer:{
                    hot:true  //热更新 / 时实更新  / 边开发边更新
                    open: true  //是否在启动服务器时,自动打开页面;
                }
            }
        ```
    3. 在package.json 中的scripts中配置  
        "serve": "webpack serve"
    4. 运行该服务
        npm run serve

8. 如何解决webpack路由问题?
    1. npm install --save-dev html-webpack-plugin
    2. 在webpack.json中配置
    ```javascript
        const HtmlWebpackPlugin = require('html-webpack-plugin');
        //template: 模板
        // 以 ./public/index.html 文件为模板,
        // 把打包后的js 自动导入到 该文件中;
        module.exports = {
            plugins:[
                new HtmlWebpackPlugin({
                    template:'./public/index.html'
                })
            ]
        }
    ```

9. 导出的三种方法?
```javascript
    // 按需导入 : 用什么引什么
    //  export  A       
    // import { A } from './a.js';

    // 默认导出   
    // export default A
    // import A from './a.js'

    // 加载/执行
    // import './prototype.js'
    // 这种导入不建议你去,
    // 因为这种导入叫 破坏性导入/导出;
    // 3年工作经验之内,不建议用这种破坏导入方法
```

10. 知识点: webpack 打包默认只能打包js文件,不可以打包其它类型的文件;

11. 如何来实现加载除js文件之外的模块?
    答: 在webpack.config.js中配置loader

12.  loader到底是什么?
    work  工作   worker工人 工作的人
    play  玩     player玩家 去玩的人
    load 加载    loader   负责去加载(css,png,html... 其它的静态静态资源)的人


13. 配置加载css
```
    npm install --save-dev style-loader css-loader

    //webpack.config.js
    // module 模块
    // rules 规则
    // test  检测   /\.css$/  以.css结尾的文件名;
    // use  用  style-loader  css-loader
    // 用 style-loader css-loader 来检测所有的以.css结尾的文件名,把他进行打包和编译;
    module.exports = {
        module:{
            rules:[
                {
                    test:/\.css$/,
                    use:['style-loader', 'css-loader']
                }
            ]
        }
    }
```