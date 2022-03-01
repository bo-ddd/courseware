
//  bus.js
class Instance{
    constructor(){
        this.store = {}
    }
    on(key,fn){
        for(let i = 0; i < this.store[key].length; i++){
            this.store[key].push(fn);
        }
    }
    emit(){
        var arr = Array.from(arguments);
        var key = arr.shift();  // key
        //var arr   // 是所有入参；
        for(let i = 0; i < this.store[key].length;i++){
            this.store[key][i](...arr)
        }
    }
}


let bus = new Instance();
export default bus;

//  Home.vue
import bus from './bus.js';
bus.emit('username','xiaoming',123,1231,123,123,12,3123);



// About.vue
import bus from '/bus.js'
// 就是 xiaoming;
bus.on('username',function(){

})  