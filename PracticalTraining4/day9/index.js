const Pagination = require('./pagination')
const ElButton = require('./el-button')
console.log(ElButton);

console.log(ElementUI) ///
// 模块化
// 按需引入
// 
{/* <script src="../../assets/js/element-ui.js"></script>
    <script async src="../../assets/js/el-button.js"></script>
    <script async src="../../assets/js/el-link.js"></script> */}
let pagination = new Pagination({
    pageNum:2,
    data:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
})

console.log('当前第几页')
console.log(pagination.pageNum);
console.log('每页多少多数据')
console.log(pagination.pageSize);
console.log('总页数：')
console.log(pagination.totalPage);
console.log('当前 页面的数据')
console.log(pagination.currentData);
console.log('当前第几页')
console.log(pagination.currentPage);