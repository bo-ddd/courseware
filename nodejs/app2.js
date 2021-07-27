const http = require('http')

const app = http.createServer((req, res) => {
    //  req.url  // req.url == 1  11111  ==2  2222222  404;
    console.log(req.url);
    switch (req.url) {
        case '/1.html':
            res.end('1111111')
            break;
        case '/2.html':
            res.end('222222')
            break;
        default:
            res.end('404')
            break;
    }
})

app.listen(3000)