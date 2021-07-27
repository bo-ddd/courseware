// const http = require('http')


// http.createServer((req,res)=>{
//     console.log(req)
// })

Array.prototype.toHTML = function(){
    return 'hello world'
}

var arr = [1,2,3,4,5]
console.log(arr.toHTML())




const http = {
    createServer(callback){
        let {req,res} = this;
        callback(req,res);
    },

    req:{
        url:'./1.html',
        cookie:'asdfjkl'
    },

    listen(port,callback){
        callback();
    }
}

http.createServer(function(req,res){
    console.log(req);
    console.log(req.url)
}).listen(3000,function(){
    console.log('localhost:3000')
})