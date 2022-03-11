### day18

#### 工厂模式

封装一个方法，通过调用这个方法来创建一个对象，而不暴露其中的业务逻辑，这种模式叫工厂模式

优点： 复用性， 可读性

//目前来说，前端都是用class，在这种web开发的项目中，几乎没有用到过工厂模式；

// 你们没有学过canvas;

//  Point(x,y)      return   { center:'', width:'',height:'' }



####　Promise有哪些方法？

Promise.resolve()    Promise.reject();

```javascript
function Promise(fn){
    fn(Promise,resove,Promise.reject);
}

let getUserInfo = function(){
    return Promise(function(resolve,reject){
        console.log()
    })
}
```



