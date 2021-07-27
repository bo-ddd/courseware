class Url {
    constructor(url) {
        this.url = url;
    }
    get query() {
        //  /1.html?username=xiaoming&age=18;
        let res = {}
        try {
            let arr = this.url.split('?') //
            // arr[0] /1.html?
            // arr[1] username=xiaoming&age=18;
            let pairs = arr[1].split('&')  // pairs ： 一对：  一个键值对 [key,value]
            // pairs  ['username=xiaoming','age=18'];
            pairs.forEach(item => {
                // item    username=xiaoming; 'age=18'
                let arr = item.split('=')  //   key = arr[0]: username   value =arr[1] : xiaoming;
                let key = arr[0];
                let value = arr[1];
                res[key] = value;
            })
            return res;
        }catch(err){
            return res;
        }
    }
}

module.exports = Url;  //这是Nodejs中导出时所挂载的对象；