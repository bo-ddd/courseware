const http = require("http")
const Url = require('./url')   
// import Url from './url';   
//  nodejs =>   require("http")
//  前端的模块化：用的都是 import from;

http.createServer((req, res) => {
    //  /1.html?username=xiaoming&age=18;
    let url = new Url(req.url)
    console.log(url.query)
    res.end('hello world');
}).listen(3000, function () {
    console.log('localhost:3000')
})