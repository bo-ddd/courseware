const http = require("http")
const Url = require('./url')   
const fs = require('fs')
// import Url from './url';   
//  nodejs =>   require("http")
//  前端的模块化：用的都是 import from;

http.createServer((req, res) => {
    //  /1.html?username=xiaoming&age=18;
    let url = new Url(req.url) // /user/sigin
    console.log(url.query) //初级小白大前端 => 
    if(req.url == '/user/sigin'){

    }else if(req.url == '/user/register'){

    }else{
        fs.readFile('./1.html',function(err,data){
            res.end(data);
        })
    }
}).listen(3000, function () {
    console.log('localhost:3000')
})