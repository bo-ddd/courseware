### 加载图片

```javascript
//配置加载图片
// webpack.config.js
{
     test: /\.(png|svg|jpg|jpeg|gif)$/i,
     type: 'asset/resource'
},
//如果想在html里加载图片，需要加上html-loader
{
     test:/\.html$/i,
     use:['html-loader']
}
```

