
import { isString } from '../util'
class Vue{
    constructor(options){
        this.options = options;
    }

    mount(el){
        if(isString(this.options)){
            let element = document.querySelector(el);
            this.render(element,this.options);
        }
    }

    render(element,html){
        //html  = text html;
        let el = document.createElement('div');
        el.innerHTML = html;
        let temp = el.querySelector('template');
        let javascript = el.querySelector('script').textContent;
        console.log(javascript)
        
        element.innerHTML = temp.innerHTML;

        let css = el.querySelector('style');
        document.head.appendChild(css);

        let script = new Function(javascript);
        script();
    }
}

export const createApp = function(options){
    return new Vue(options);
}
