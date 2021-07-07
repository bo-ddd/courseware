### ajax

```javascript
//ajax是基于XMLHttpRequest的方法封装的；
//封装方法：
function ajax(options) {
    //解构赋值，并声明默认值；
    let { type = "POST",url = "",params = {},success } = options;
    //打开浏览器
    var xhr = new XMLHttpRequest();
    //输入浏览器的地址；
    xhr.open(type, url, true);
    //接口执行完毕；
    xhr.onload = function () {
        //如果服务端返回的状态码是200，说明接收数据成功了；
        if (xhr.status == 200) {
            // 以JSON格式返回数据；
            //xhr.responstText  字符串格式的返回的数据；
            let res = JSON.parse(xhr.responseText);
            //接收成功的回调函数；
            success(res);
        }
    }
    // 相当于按了一下回车，发送了接口请求；
    xhr.send(params);
}
```

