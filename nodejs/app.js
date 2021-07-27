// node =>  服务端的  =>  就要可以写服务器； 
//  node 本质上，天生支持 http; https;
// http://   =>  非常复杂 ；  nodejs => 封装 了 http模块，用面向对象的方法 封装 了一个http;
// 我们可以直接根据这个http模块，来创建服务启；

// 如何创建服务器？ 
const http = require("http")  //  nodejs自带http模块；

// create 创建   server:服务   http.createServer// 创建一个http的服务；
const app = http.createServer((req,res)=>{
    //console.log(req) //  req:  requrest 前端请求的参数；
    //console.log(res)  // response : 响应：  服务端响应的数据；
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        my name is 1.html;
    </body>
    </html>`); // 发送给前端；
})

//  8080   3000  8000 8081  但是 一般是有规范的：  80 =>  默认port  3306 mysql;
app.listen(3000,function(){
    console.log('http://localhost:3000')
})

// 如何启动服务？  
//  安装nodejs之后，cmd中，会多了两个命名，一个node  ,一个叫npm;
//  我们可以用  node  fileName 来执行fileName的js；
