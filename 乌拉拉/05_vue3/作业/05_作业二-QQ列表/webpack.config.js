const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:  'bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use:['style-loader', 'css-loader']
            },
            {
                test:/\.png$/,
                type:'asset'
            },
            {
                test:/\.html$/,
                use:['html-loader']
            }
        ]
    },
    devServer:{
        hot: true
    }
}