const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:  'development', // production 生产环境
    entry:'./src/main.js',
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
            // 在js中也可以引入html;但是返回的是的一个文本格式的 txt
            {
                test:/\.vue$/,
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