var json = {
    username:'xiaoming',
    age:18
}
function fn(json){
    return fn1(json)
}

function fn1(json){
    return fn2(json)
}

function fn2(json){
    return function(json){
        return function (json){
            json.query = 1;
        }
    }
}

fn(json)()()()()()()()();

//json =>  {username,age,phone}