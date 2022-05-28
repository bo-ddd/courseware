// 
window.onload = function () {
    (function(){
    var data = [{
        id: 1,
        value: '文档',
    }, {
        id: 2,
        value: '教程',
    }, {
        id: 3,
        value: '博客',
    }, {
        id: 4,
        value: '社区',
    },]

    // 操作dom;
    // 命名规范：  如果是对象，开头应该以小写o为开头 代表的是obj
    let oNav = document.querySelector('.nav');  //  查询
    let oTemplate = oNav.querySelector('.item');  //  查询
    oTemplate.remove(); // 删除
    // 如果是多个，  可以用a开头 代表的是数组  arr;
    // let aNav =  document.querySelectorAll('.nav');  // 伪数组

    function render(oNav, oTemplate, data) {
        data.forEach(item => {
            // 克隆节点，也叫复制节点；
            // 这个方法接收一个boolean，如果填true，则复制当前节点下所有的子节点，且复制对应节点的事件；
            let cloneNode = oTemplate.cloneNode(true);
            cloneNode.innerHTML = item.value;
            // 增
            oNav.appendChild(cloneNode);
        })
    }

    // 你在封装任何一个方法的时候，考虑的都是复用性；
    render(oNav, oTemplate, data);

    var links = [{
        id: 1,
        value: 'v18.0.0',
    }, {
        id: 2,
        value: '多语言',
    }, {
        id: 3,
        value: 'GitHub',
    }]

    let oLink = document.querySelector('.links');
    let oTeamp = oLink.querySelector('.item');
    oTeamp.remove();
    render(oLink, oTeamp, links);
    })()



        // applilcation /  arr obj   obj=> 
        var data = [
            {
                id: 1,
                type: 1, //0：默认文本  1:主标题  2: links 3: 二级标题 4：三级标题 5:描述；
                title: '开始',
                data: [
                    {
                        type: 5,
                        value: '这是一个 React 文档及相关资源的概览页面。',
                        tag: []
                    },
                    {
                        type: 0,
                        value: 'React 是一个用于构建用户界面的 JavaScript 库。你可以在首页或教程中学习什么是 React。',
                        tag: [
                            {
                                type: 1,
                                keyword: 'React',
                                index: [1]  // 匹配value的个数，让对应的所引值 加粗 ；  
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                data: [
                    {
                        type: 2,
                        title: '体验React',
                        path: '#route1',
                    },
                    {
                        type: 2,
                        title: '学习 React',
                        path: '#route2',
                    },
                    {
                        type: 2,
                        title: '获取最新消息',
                        path: '#route3',
                    },
                    {
                        type: 2,
                        title: '版本化文档',
                        path: '#route4',
                    },
                    {
                        type: 2,
                        title: '找不到想要的？',
                        path: '#route5',
                    },
                ]
            },
            {
                id: 3,
                type: 3,
                title: '体验 React',
                data: [
                    {
                        type: 0,
                        value: 'React 从诞生之初就是可被逐步采用的，因而你可以按需引入或多或少的 React 特性。不管你是想体验下 React，用它给简单的 HTML 页面增加一点交互，还是要开始一个完全由 React 驱动的复杂应用，该章节内容里的链接都能帮你快速开始。',
                        tag: [
                            {
                                type: 1, //
                                keyword: '你可以按需引入或多或少的 React 特性',
                                index: [1]  // 匹配value的个数，让对应的所引值 加粗 ；  
                            }
                        ]
                    },
                    {
                        type: 4,
                        title: '在线体验',
                        data: [
                            {
                                type:0,
                                value: '如果你对体验 React 感兴趣，可以尝试在线代码编辑器。从 CodePen，CodeSandbox，或者 Stackblitz 开始一个 React 版本的 Hello World 模板。',
                                tag: [
                                    {
                                        type: 2, // 1.bold  2:links;
                                        keyword: 'CodePen',
                                        path:'#CodePen',
                                    },
                                    {
                                        type: 2,
                                        keyword: 'CodeSandbox',
                                        path:'#CodeSandbox'
                                    }
                                ]
                            },
                            {
                                type:0,
                                value: '如果你喜欢使用自己的文本编辑器，也可以下载这个 HTML 文件，然后编辑文件内容，最后再用浏览器从本地文件系统打开文件，预览页面效果。注意：这个文件中包含一个低效率的运行时代码转换脚本，所以我们推荐仅在简单的演示项目中使用。',
                                tag: []
                            }
                        ]
                    }
                ]
            }
        ]
        
        var oContainer = document.querySelector('.container');
        var oMain = oContainer.querySelector('.main');
        var oWrap = oMain.querySelector('.wrap');
        var temp = oWrap.querySelector('.article');
        temp.remove();
        data.forEach(item=>{
            let cloneNode = temp.cloneNode(true);
            let article = new Article(item);
            article.append(cloneNode);
            oWrap.appendChild(cloneNode);
        })
}