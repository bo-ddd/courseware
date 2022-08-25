# 从零到一配置webpack的流程

## 创建webpack项目
1. 创建一个文件夹,该文件夹必须是英文  
2. 然后进入到这个文件夹中
3. 打开cmd,声明node环境 
```
    npm init -y
```
声明node环境的作用是,生成package.json文件的默认配置

package.json 的默认配置文件样式
```json
{
  "name": "wp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```

4. 下载webpack的依赖
```
    npm install --save-dev  webpack webpack-cli webpack-dev-server css-loader style-loader html-loader
    html-webpack-plugin
```
webpack webpack-cli 是webpack必备项
webpack-dev-server 是webpack帮你创建一个本地的服务器,还可以配置热更新
html-webpack-plugin 自动帮你把js文件导入到html文件中

5. 单面应用配置项目目录
```
    -| project-name
        -| src
            -| assets  静态资源文件夹, 图片,css,js,lib
                -| lib
                    lib-flexable.js   rem移动端适配
                -| css
                    common.css
                -| images
                    header.png
                    icon_search.png
            index.html
            index.js
            index.css
```

6. 手动在根目录(package.json的那一级目录)中创建一个webpack.config.js
```javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:  'development', // production 生产环境
    entry:'./src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:['style-loader', 'css-loader']
            },
            // 配置了asset文件可以在css中引入图片,不然无法正常使用
            // index.css   backgourn-image: url('./assets/iamges/header.png')
            {
                test:/\.png$/,
                type:'assets'
            },
            // 在页面中可以正常的访问图片,需要配置 html-loader
            {
                test:/\.html$/,
                use:['html-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    devServer:{
        hot: true
    }
}
```