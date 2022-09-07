### **Title组件封装相关知识：**

1. 标题标签一般使用 h1-h6,,因为考虑复用性，所有标题都是不一样的标签及不同字体颜色，故需要动态渲染对应的标签及颜色。
2. 此时需要用到vue中自带的——渲染函数 h 
    2-1 首先在父组件Title标签上声明自定义属性 level=“1（1-6）”  color=“（任意颜色）”
    2-2  在Title组件中 导入vue中自带的 h、css模块
    2-3 使用vue3中的props接收自定义的属性
    2-4 给自定义属性默认赋值
    2-5调用h及useCssModule方法
3. style样式中使用模块化动态改变title颜色：（style module）
4. 具体代码如下：

```html
 <script setup lang="ts">
    import { h,useCssModule } from "vue";

   let props=defineProps<{
    level:'1'|'2'|'3'|'4'|'5'|'6'
    color:string
   }>()

   let {level='1',color='white'} = props;
   let style=useCssModule()
   let Title=h('h'+level,{class:style.title})
 </script>
```

```html
<style module>
   .title{
      color:v-bind(color)
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
