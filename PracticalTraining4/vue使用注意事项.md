1. 开发时一般情况下可以按上键来快速找到之前启动项目的命令；

2. 通过查看package.json 和 readme文件来找到如何启动项目？

3. 浏览器中ctrl + t 新建页面
    
4. 应该把alt + tab键换成  win + 1  win +2

5. 开发时，在vscode中关闭终端 并且关闭侧边栏
   ctrl + j 关闭终端    ctrl + b 关闭/打开侧边栏；

6. 利用搜索功能，把没有用的变量删除；

7. 在vue2.0中,template标签必须只能包含一个父元素;
<template><div></div></template>

8. 在开发时,如果浏览器页面一直处于加载中时，说明服务正在启动/正在编译，
如果长时间加载不完，可以考虑重新启动项目；

9. 记得时常格式化代码 shift + alt + f;

10. h1-h6 代表的时几级标题;

11. ctrl + f 可以快速查找关键字

12. 如果不时默认导出，应该加大括号
eg:  import { getUserInfoApi } from '@/api/api'

13. 如果你想导出的时默认值，则应该用：
import DefaultFunctionName from '@/api/api';

14. methods中的方法，必须调用才会执行；

15. created是一个钩子函数，不是json;

16. 声明方法时要有动词。

17. 写判断时要写逆向逻辑，也就是报错时的处理；

18. 命名不规范  

19. form表单中所有的值都应该和服务端字段保证一致

20. 驼峰命名法指的是每个单词的首字母大写，
但是在命名中，一般情况下首字母小写，
除非是创建页面，创建组件，创建类时会大写；

21. 在用组件时，几乎都时通过props传参，传给子组件，如果父组件需要用到子组件的参数，通常需要通过$emit传过来；
而不能直接使用 this.$refs.refName.xxx
更不能直接使用 this.$refs.refName.xxx = xxx;
