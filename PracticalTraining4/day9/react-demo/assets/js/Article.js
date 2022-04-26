class Article{
    constructor(data){
        this.data = data;
        this.fragment = document.createDocumentFragment();
        this.types = ['p','h1','a','h2','h3','section'];
        this.el = this.generatorElement(data);
    }

    generatorElement(data){
        var el =  data.type !== undefined ? this.createNode(data) : undefined;
        this.enum(data)
        return el;
    }

    createNode(data){
        let el = document.createElement(this.types[data.type]);
        el.innerHTML = data.title || data.value;
        return el;
    }

    enum({data}){
        if(data && data.length){
            data.forEach(item=>{
                let el = this.createNode(item);
                this.fragment.appendChild(el);
                this.enum(item);
            })
        }
    }

    append(node){
        if(this.el)node.appendChild(this.el)
        node.appendChild(this.fragment)
    }
}