### async await 

```javascript
//作用： 使异步代码看起来像是同步；
// 方法的封装；
function getOrderList() {
    return new Promise((resolve, reject) => {
        // resolve:成功, reject失败; 这两个入参都是回调函数；
        ajax({
            url: 'http://localhost:3000/list',
            success: function (res) {
                // console.log('我接收到了数据')
                // console.log(res);
                resolve(res);
            }
        })
    })
}

//方法的使用：
//Tip: await 方法必须和 async方法结合使用，不能单独的使用await,所以需要加上一个自执行函数；
(async function(){
    let list = await getOrderList();
    console.log(list);
})()
```

