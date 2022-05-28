(function(){
    // 这种组件的封装, 样式不会被覆盖;
    class Button extends ElementUI {
        constructor() {
            super();
            // 创建一个容器;  div;
            const shadow = this.attachShadow({ mode: 'open' });
            let div = document.createElement('div');
            div.classList.add('btn', 'btn-primary')

            this.oStyle = document.createElement('style');

            shadow.appendChild(this.oStyle);
            shadow.appendChild(div);
            div.innerHTML = this.innerHTML;
        }

        connectedCallback() {
            const { type = { value:'primary'} } = this.attributes;

            this.oStyle.textContent = `
                .btn {
                    padding:6px 12px;
                    border-radius:4px;
                    display:inline-block;
                    color:#fff;
                    background-color:${this.config[type.value].primaryColor};
                }
                .btn:hover{
                    background-color:${this.config[type.value].primaryActiveColor};
                }
            `
        }
    }
    // custom : 自定义
    // element :元素
    // define : 定义;
    // 定义一个自定义元素, 这个元素的名,叫 el-button,
    // 这个元素的内容叫 Button
    customElements.define('el-button', Button);
})()