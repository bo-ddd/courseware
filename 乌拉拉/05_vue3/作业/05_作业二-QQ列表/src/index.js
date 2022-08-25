// 模块化只支持导入 js 文件
import './assets/lib/lib-flexable'
import './assets/css/common.css'
import './index.css'

var groups = [
    {
        id:1,  // 组id;
        name: '我的好友'
    },
    {
        id:2,
        name:'红颜知己'
    },
    {
        id:3,
        name:'哈哈家庭'
    }
]

var arr = [
    {
        id:1,  //好友id;
        group:1,  // 组id;
        avatarName:'哎哟,不错哟', // 网名;
        description:'',  //描述
        remark:'',  //备注
        lastContactTime:'1660995403512', // 上次联系时间
        onlineStatus: 1,  // 1 : 在线,  0: 离线
        article:[
            {
                articleId:1231,  //文章id;
                createTime:1660995000000,  //文章创建时间
                type: 1,  // 1 : 空间文章,  2: 说说;
            }
        ]
    },
    {
        id:2,  //好友id;
        group:2,  // 组id;
        avatarName:'~...~', // 网名;
        description:'只要专业选的好～年年期末像高考',  //描述
        remark:'盖腾飞',  //备注
        lastContactTime:'1660995203512', // 上次联系时间
        onlineStatus: 0,  // 1 : 在线,  0: 离线
        article:[]
    },
    {
        id:3,  //好友id;
        group:3,  // 组id;
        avatarName:'林子', // 网名;
        description:'近陌者黑,生人勿加',  //描述
        remark:'侯林',  //备注
        lastContactTime:'1660995413512', // 上次联系时间
        onlineStatus: 1,  // 1 : 在线,  0: 离线
        article:[]
    },
    {
        id:4,  //好友id;
        group:1,  // 组id;
        avatarName:'禁止偷猪', // 网名;
        description:'',  //描述
        remark:'',  //备注
        lastContactTime:'1660995413512', // 上次联系时间
        onlineStatus: 0,  // 1 : 在线,  0: 离线
        article:[]
    },
    {
        id:5,  //好友id;
        group:2,  // 组id;
        avatarName:'禁止偷猪', // 网名;
        description:'是做一世的逗逼还是暂时的聪明人？',  //描述
        remark:'范文峰',  //备注
        lastContactTime:'1660915413512', // 上次联系时间
        onlineStatus: 0,  // 1 : 在线,  0: 离线
        article:[]
    },
    {
        id:6,  //好友id;
        group:2,  // 组id;
        avatarName:'蓝白白', // 网名;
        description:'一天二次元,一生二次元,为二次元而活一天二次元,一生二次元,为二次元而活一天二次元,一生二次元,为二次元而活一天二次元,一生二次元,为二次元而活',  //描述
        remark:'',  //备注
        lastContactTime:'', // 上次联系时间
        onlineStatus: 1,  // 1 : 在线,  0: 离线
        article:[]
    },
    {
        id:6,  //好友id;
        group:3,  // 组id;
        avatarName:'格勒冇三', // 网名;
        description:'得之坦然，失之淡然，争其必然，顺其自然',  //描述
        remark:'凯哥',  //备注
        lastContactTime:'', // 上次联系时间
        onlineStatus: 1,  // 1 : 在线,  0: 离线
        article:[
            {
                articleId:1231,  //文章id;
                createTime:1660995000000,  //文章创建时间
                type: 1,  // 1 : 空间文章,  2: 说说;
            },
            {
                articleId:1237,  //文章id;
                createTime:1660995412000,  //文章创建时间
                type: 2,  // 1 : 空间文章,  2: 说说;
            },
        ]
    },
    {
        id:7,  //好友id;
        group:1,  // 组id;
        avatarName:'hi! world', // 网名;
        description:'程序员是最浪漫的职业',  //描述
        remark:'',  //备注
        lastContactTime:'', // 上次联系时间
        onlineStatus: 1,  // 1 : 在线,  0: 离线
        article:[
            {
                articleId:1237,  //文章id;
                createTime:1660995412000,  //文章创建时间
                type: 2,  // 1 : 空间文章,  2: 说说;
            },
        ]
    },
]


let oList = document.querySelector('.list');
let oItem = oList.querySelector('.item');
oItem.remove();


class QQlist{
    constructor(groups, list){
        // 不能修改原数据;
        this.groups = JSON.parse( JSON.stringify( groups ) );
        this.list = JSON.parse( JSON.stringify( list ) );
    }

    get result(){
        let res = [
            {
                id:0,
                name:'最近联系人',
            }
        ];
        
        return [...res, ...this.groups].map((group,index)=>{
            let children = index == 0 ? 
                this.list.sort((a,b)=> b.lastContactTime - a.lastContactTime).slice(0,3).sort((a,b)=> b.onlineStatus - a.onlineStatus)
                :  
                this.list.filter(item=> item.group == group.id).sort((a, b)=> a.onlineStatus - b.onlineStatus);
            let groupCount = children.length;
            let onlineCount = children.filter(item=> item.onlineStatus == 1).length;
            return {
                ...group,
                children,
                groupCount,
                onlineCount
            }
        });
    }
}

let qqlist = new QQlist(groups, arr);

oList.addEventListener('click', function(event){
    if(Array.from(event.target.classList).includes('name')){
        let member = event.target.parentElement.parentElement.querySelector('.member')
        member.classList.toggle('hidden');
    }
},true)

render(oList, oItem, qqlist.result, (el, data) =>{
    el.querySelector('.group .name').textContent = data.name;
    el.querySelector('.count').textContent = `${data.onlineCount}/${data.groupCount}`;

    let member = el.querySelector('.member');
    let temp = member.querySelector('.member-item');
    temp.remove();
    render(member, temp, data.children, (el, data)=>{
        el.querySelector('.avatar-name').textContent = data.remark || data.avatarName;
        let article = data.article ?  data.article.sort((a, b)=> a.createTime - b.createTime)[0] : [];
        let  desc =  article ? article.type == 1 ? '[更新了文章]' : '[更新了说说]' : data.description;
        desc = desc || '该人物太懒了,什么都没有留下';
        desc = data.onlineStatus == 0 ? '[离线请留言]' +  desc : desc ;
        el.querySelector('.desc').textContent = desc;
    })
});

document.querySelectorAll('.list .member')[0].classList.remove('hidden');

function render(el, temp, data, callback){
    data.forEach((item,index)=>{
        let cloneNode = temp.cloneNode(true);
        callback(cloneNode, item, index);
        el.appendChild(cloneNode);
    })
}

// 每一组中有多少人  渲染组员
