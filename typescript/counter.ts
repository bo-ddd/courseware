function counter(num1:any, num2:any){
    return num1 + num2;
}

var str:string = 'hello world';

var num:number = 143;

// num = false;

let flag:boolean = true;
// flag = 1;

// ts会提示你，但是你依然可以正常的转换成js;
// str = 13;
console.log(str);

// 如何给变量或者参数声明 类型  
// 是在参数或者变量后面加 :type

// string number  boolean

// 接口
interface Person {
    username:string,
    age:number,
    data: ClassRoom
}

interface ClassRoom{
    classId:number,
    className:string,
}



// 无法重复声明块范围
// 在当前文件夹下，所有的文件中，不允许有重复的方法名或者对象变量名
let person:Person = {
    username:'xiaoming',
    age:18,
    data:{
        classId:1,
        className:'实训班' 
    }
}

var arr:number[] = [1,3,4,5,6,7,8];

// 泛型
var arr2:Array<number | string> = [1,123,12,3,12,31,'asdjfklsa']
