### less引入方法

1.  下载 

    npm install --save-dev  less  less-loader  

   2. ```javascript
      // webpack.config.js
      {
          rules:[
                  {
                      test:/\.(le|c)ss$/,
                      use:['style-loader','css-loader','less-loader']
                  }
          ]
      }
      ```

   3. 使用方法

      ```javascript
      //index.js
      import './index.less'
      ```

      