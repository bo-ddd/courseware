(function(){
    class Pagination extends ElementUI{
        constructor(){
            super();
            const shadow = this.attachShadow({mode:'open'});

            const style = document.createElement('style');
            
            const div = document.createElement('div');
            div.innerHTML = 'helllo world'

            style.textContent = `
                .pagination{
                    background:red;
                }
            `

            shadow.appendChild(div);
            shadow.appendChild(style)
        }
    }
    customElements.define('el-pagination',Pagination);
})()