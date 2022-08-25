import './index.css';
import { createApp } from './assets/lib/vue'
import App from './home.vue'

createApp(App).mount('#app')

























// function formatHtml(html){
//     let el = document.createElement('div');
//     el.innerHTML = html; // 
//     let temp  = el.querySelector('template');
//     return temp.innerHTML;
// }

// document.querySelector('.container').innerHTML = formatHtml(Home);
// document.querySelectorAll('.footer .item').forEach((el, index)=>{
//     let arr = ['', Home, Cart, Mine ];
//     el.onclick = function(){
//         let html = formatHtml(arr[index]);
//         console.log(html);
//         document.querySelector('.container').innerHTML = html;
//     }
// })
