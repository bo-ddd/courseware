const { IncomingMessage } = require("http")

res : response //  
res.end();


class Response extends IncomingMessage{
    constructor(){

    }

    write(str){

    }
    
    end(str){
        // str = 'hello world';
        if(str){
            this.write(str);
        }

        // 返回给前端的逻辑 balbala;
    }
}