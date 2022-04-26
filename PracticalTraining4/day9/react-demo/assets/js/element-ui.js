(function () {
    // 这种组件的封装, 样式不会被覆盖;
    class Button extends HTMLElement {
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
            // 当你把一个元素放到html中的时候,就会走这个方法;
            console.log('this is  connected Callback')

            const { type = { value:'primary'} } = this.attributes;

            var config = {
                primary: {
                    primaryColor: '#1890ff',
                    primaryActiveColor: '#096dd9'
                },
                magenta: {
                    primaryColor: '#eb2f96',
                    primaryActiveColor: '#c41d7f'
                }
            }
            this.oStyle.textContent = `
                .btn {
                    padding:6px 12px;
                    border-radius:4px;
                    display:inline-block;
                    color:#fff;
                    background-color:${config[type.value].primaryColor};
                }
                .btn:hover{
                    background-color:${config[type.value].primaryActiveColor};
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