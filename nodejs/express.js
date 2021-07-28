const fs  = require('fs');
const http = require('http');
const Middleware = require('./middleware')

class Express {
    constructor() {
        this.app = this.createServer();
        this.middleware = new Middleware();
        this.route = {}
    }

    createServer() {
        return http.createServer((req, res) => {
            this.run(req,res);
            console.log(req.query)  //{username:xiaoming,age:18}
            this.router(req,res);
            res.end()
        })
    }

    router(req,res){
        try{
            console.log(this.route)
            console.log(req.url);
            this.route[req.url].callback(req,res);
        }catch(err){

        }
    }

    use(middleware){
        this.middleware.addSub(middleware)
    }

    get(url,callback){
        // url :   /user/info
        this.route[url] = {
            type:'GET',
            callback
        }
    }

    run(req,res) {
        let arr = this.middleware.subs.slice(); // length == 0;
        let next = () => {
            let middleware = arr.shift(); //拿出数组中的第一个方法；
            // let middleware = express.static()
            if (middleware) {
                middleware(req,res,next);
            }
        }
        next();
    }

    listen(port, callback) {
        this.app.listen(port, callback);
    }
}

function express() {
    return new Express();
}

express.static = function(url){
    return function(req,res,next){
        let fileName = url + req.url;
        try{
            let file = fs.readFileSync(fileName);
            res.write(file);
        }catch(e){

        }
        next();
    }
}

module.exports = express;