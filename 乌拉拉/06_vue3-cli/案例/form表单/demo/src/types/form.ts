    // type会真实的生成一个对象;
    export enum Type{
        isText = 1,
        isRadio,
        isSelect
    }

    export interface Form{
        [propName: string]: any
    }