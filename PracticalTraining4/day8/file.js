var file = {
    name: '1.abc.txt',
    get arr() {
        return this.name.split('.');
    },
    get serialNumber() {
        return this.arr[0];
    },
    get fileName() {
        var arr = this.name.split('.');
        return this.arr[1];
    },
    get fileType() {
        return this.arr[2];
    }
}