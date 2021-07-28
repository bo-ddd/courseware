const Url = require('../url')
module.exports = function(req,res,next){
    //中间件； 浅拷贝 可以直接改变外围的Json数据；
    req.query = new Url().query;
    next();
}