// Symbol的数据类型？
//  Symbol通常使用在 模块文件中  
//  声明一个变量接收这个symbol，
//  使模块中的某个方法成为私有变量，外部不可以再次访问；


//  module.js
const UserInfo = Symbol('注释'); // symbol中的值没有意义

export default class User{
    // 如果有一个下划线，就代表的是么有变量，外部人不要来访问；
    // 这种方法已经变成私有的了；
    [UserInfo](){

    }
    getUserInfo(){
        this[UserInfo]()
    }
}



// index.js的使用方法；
var user = new User();
user.UserInfo(); //此方法是找不到的，会报错；