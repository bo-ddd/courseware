function type(type){
    return function(val){
        return Object.prototype.toString.call(val).slice(8, -1) == type;
    }
}

export const isString = type('String');