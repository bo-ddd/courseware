### **Title组件封装相关知识：**

1. 标题标签一般使用 h1-h6,因为考虑复用性，所有标题都是不一样的标签及不同字体颜色，故需要动态渲染对应的标签及颜色。
2. 此时需要用到vue中自带的——渲染函数 h 
    1. 首先在父组件Title标签上声明自定义属性 level=“1（1-6）”  color=“（任意颜色）”
    2.  在Title组件中 导入vue中自带的 h、css模块
    3. 使用vue3中的props接收自定义的属性
    4. 给自定义属性默认赋值
    5. 调用h及useCssModule方法
3. style样式中使用模块化动态改变title颜色：（style module）
4. 具体代码如下：

```html
 <template>
    <Title :class="style.title">
        <slot></slot>
    </Title>
</template>

<script setup lang="ts">
    import { h, useCssModule } from 'vue'
    const props = defineProps<{
    level?: "1" | "2" | "3" | "4" | "5" | "6";
        color?: string;
    }>()
    let { level = "1", color = 'white' } = props;
    let style = useCssModule();
    let Title = h('h' + level);
    // 在进行数字运算的时候， 如果有小数，需要把小数扩大10的整数倍，最后在把得出的结果缩小对应的倍数，这样做的原因是可以避免js运算误差
    let fontSize = (12 + 2 * (6 - Number(level))) / 10 + 'rem';
</script>
<style module>
    .title{
        padding:1rem 0;
        color:v-bind(color);
        font-size: v-bind(fontSize);
    }
</style>
```

5. 操作虚拟dom底层实现原理为（h方法底层实现） ：

```javascript
    let vnode = {
        type: 'dev',
        props:{
            id: 'box',
            class: 'mt-10'
        },
        children:'hello world'
    }

    // 虚拟dom的作用是为了转换成真实的dom;
    function createVNode(tag, props, content){
        let el = document.createElement(tag);  //dev
        for(let prop in props){
            el.setAttribute(prop, props[prop]);
        }
        el.textContent = content;
        return el;
    }
    
    let h = createVNode;
    let el = h(vnode.type, vnode.props,  vnode.content);
    document.body.appendChild(el);
```
