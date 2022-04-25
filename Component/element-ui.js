(function () {
    class Button extends HTMLElement {
        constructor() {
            super();
            this.shadow = this.attachShadow({ mode: 'open' });
            this.oDiv = document.createElement('div');
            this.oDiv.classList.add('el-btn')
            this.oDiv.innerHTML = this.innerHTML;
            this.oStyle = document.createElement('style');

            this.config = {
                primary: {
                    primaryColor: '#1890ff',
                    primaryActiveColor: '#1d39c4'
                },
                magenta: {
                    primaryColor: '#eb2f96',
                    primaryActiveColor: '#c41d7f'
                }
            }
            this.shadow.appendChild(this.oStyle);
            this.shadow.appendChild(this.oDiv);
        }

        getStyleTextContent(type) {
            const { config } = this;
            return `
                .el-btn{
                    padding:6px 12px;
                    border-radius:4px;
                    background:${config[type.value].primaryColor};
                    color:#fff;
                    display:inline-block;
                    transition:all .7s;
                    cursor:pointer;
                }
                .el-btn:hover{
                    background:${this.config[type.value].primaryActiveColor};
                }
            `
        }

        connectedCallback() {
            const { type = { value: 'primary' } } = this.attributes;
            this.oStyle.textContent = this.getStyleTextContent(type);
        }
    }
    customElements.define('el-button', Button);
})()