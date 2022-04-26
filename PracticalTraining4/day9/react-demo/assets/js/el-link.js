(function () {
    class Link extends ElementUI{
        constructor(){
            super();
            const shadow = this.attachShadow({ mode: 'open' });
            this.oStyle = document.createElement('style');
            let span = document.createElement('span');
            span.innerHTML = this.innerHTML;
            shadow.appendChild(this.oStyle);
            shadow.appendChild(span);
        }
        connectedCallback() {
            const { type = { value:'primary'} } = this.attributes;
            this.oStyle.textContent = `
                span {
                    color:${this.config[type.value].primaryColor};
                    cursor:pointer;
                }
                span:hover{
                    color:${this.config[type.value].primaryActiveColor};
                }
            `
        }
    }
    customElements.define('el-link',Link);
})()