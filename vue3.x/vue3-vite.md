### vue3 + vite

```javascript
1. npm install -g @vue/cli  //全局安装vue-cli命令

//注：
yarn global add @vue/cli
# 或
npm install -g @vue/cli
// 目前市场上，这种包管理工具一共有两个 一个是 npm  另一个是 yarn
// 比较快的是 yarn ,以后遇到这个yarn知道是干啥的就行；
// 知识点： 
// 1. 如果 npm install  中 有 -g   --global 等词，则可以忽略文件夹进行安装
//  -g  --global  是全局的意思
// 2.  npm install -g @vue/cli 在全局安装完以后，会自动在终端中生成一个 vue 开头的关键字
// vue create project-name
// 3. 在npm中，除了-g，常用的有 --save-dev  和 --save 
// --save-dev  ===  -S
// --save === -s
// --global === -g
// 如果你下载的包不包含这些关键字，则默认为 --save
// npm install jquery --save   ===    npm install jquery
// 4. 什么时候用--save ？ 什么时候用--save-dev?
// 5. 在你项目中引入的包都需要用--save,
// 相反，如果项目中页面上不需要引用的包，就必须用--save-dev;
// 6. 用npm install 下载的包 可以通过 package.json中的 dependencies 和 devDependencies；
```

