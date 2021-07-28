const { get } = require('http');
const express = require('./express')

const app = express();

app.use( express.static(__dirname) )

app.get('/user/info',(req,res)=>{
    let local = {
        username:'xiaoming',
        age:18
    }
    res.write(JSON.stringify(local));
})

app.get('/user/login',(req,res)=>{
    let local = {
        success:true,
        data:[]
    }
    res.write(JSON.stringify(local))
})

app.listen(3000, function () {
    console.log('localhost:3000')
})