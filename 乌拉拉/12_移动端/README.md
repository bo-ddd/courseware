## README
1. lib-flexable 是阿里出的移动端适配方案;
2. 该方案是基于rem来适配的
3. 实现原理是通过判断屏幕的宽,动态设置 html 元素的 fontSize

## rem相关知识点:
1rem = document.style.fontSize;

## 移动端开发要点:
1. 开发时,要把屏幕设置成 375 的宽;
2. 通常ui设计稿给的尺寸是750;

## 图片相关
1. 项目中icon图用的都是png, 且是设计稿尺寸的2倍; 目的是不让图片失真;
2. png图不会导致被压缩;