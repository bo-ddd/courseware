const queryParser = require("./middleware/queryParser")

// 中间件 、 中间层；解析并配置执行的中间件；
class Middleware{
    constructor(){
        this.subs = [queryParser];
    }
    addSub(sub){
        this.subs.push(sub);
    }
}

module.exports = Middleware;