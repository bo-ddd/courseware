const fs = require('fs');  //  f  file文件  s: system系统  文件系统；

// 读一个文件； read:读  file 文件  读文件；
//  fileName:读哪个文件，data:读文件内容；
// __dirname :根目录  也是Nodejs自带的变量；
let fileName = __dirname +  '/1.html';

console.log(fileName);
console.log('----------dirname---------')
console.log(__dirname)
fs.readFile(fileName,function(err,data){
    console.log(data.toString())  // 
})


fs.readFile('./1.html',function(err,data){
    if(err){
        //  error  错误   读取文件失败；
    }else{
        //  读取文件成功；
    }
})
