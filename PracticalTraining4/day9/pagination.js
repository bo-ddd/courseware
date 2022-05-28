module.exports = class Pagination {
    constructor(options) {
        this.pageSize = options.pageSize || 5;
        this.pageNum = options.pageNum || 1;
        this.data = options.data ? options.data.slice() : [];
        // 观察  数据劫持
        this.observer();
    }

    init() {
        let _this = this;
        let handleClick = function () {
            // this 代表 点击的那个元素；
            //  classList  ['next',a]
            let isNext = Array.from(this.classList).includes('next');
            if (isNext) {
                // 是下一页
                _this.pageNum++;
            } else {
                _this.pageNum--;
            }
        }
        this.pre.addEventListener('click', handleClick, false);
        this.next.addEventListener('click', handleClick, false);
    }

    // 上游pagination  下游 使用方：页面层     
    observer() {
        let pageNum = this.pageNum;
        Object.defineProperty(this, 'pageNum', {
            get() {
                return pageNum;
            },
            set(newValue) {
                if(newValue <= 0){
                    pageNum = 1;
                }else if( newValue > this.totalPage ){
                    pageNum = this.totalPage;
                }else{
                    pageNum = newValue;
                }
            }
        })
    }

    get offset() {
        return (this.pageNum - 1) * this.pageSize;
    }

    get currentData() {
        const { offset } = this;
        return this.data.slice(offset, offset + this.pageSize);
    }

    get totalPage() {
        return Math.ceil(this.data.length / this.pageSize);
    }

    get currentPage() {
        return this.pageNum;
    }
}