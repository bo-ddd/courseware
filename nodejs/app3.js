const http = require('http')
const fs = require("fs");

http.createServer(async function(req,res){
    // 如果访问的url地址是 /1.html 
    // /1.html  
    let fileName = '.' + req.url;   //  ./1.html;

    console.log('---------req.url---------')
    console.log(req.url);
    "/1.html?username=xiaoming&age=18"
    let url = new Url(req.url);
    
    url.query  = {
        username:'xiaohong',
        age:'18',
        phone:1333
    }

    // fs.readFile(fileName,function(err,data){
    //     res.end(data)
    // })

    function readFile(){
        return new Promise( (resolve,reject)=>{
            fs.readFile(fileName,function(err,data){
                if(err){
                    // err  //  读取文件失败
                    reject(err);
                }else{
                    //  读取成功；
                    resolve(data);
                }
            })
        })
    }

    // 功能1： 
    // readFile().then(res=>{console.log(res) // 文件内容})
    // async await 必须成对出现，只有在 一个 function中声明 async 才可以用await;

    //promise 和 await async 转换流程：
    // 删除 then()方法；
    // 在当前方法中声明 async;
    // 在调用的方法名中声明 await;

    
    // readFile().then(res=>{
    //     console.log(res)  // file文件的内容；
    // })
    let file = await readFile();
    res.end(file);
}).listen(3000,function(){
    console.log('http://localhost:3000')
})

// 并返回到客户端的页面上； res.end(); // 返回给服务端；