<template>
    <div>
        <!-- 动态根据不同的类型,渲染不同的form表单元素 -->
        <div class="item" v-for="item in data">
            <label class="label">{{ item.label }}:</label>
            <div v-if="item.type == Type.isText" class="text">{{ item.text }}</div>
            <div class="options" v-else-if="item.type == Type.isRadio">
                <div class="option" v-for="option in item.options">
                    <input type="radio" v-model="form[item.optionValue]" :value="option.value">
                    <span v-html="format(option)"></span>
                </div>
            </div>
            <div class="options" v-else-if="item.type == Type.isSelect">
                <!-- form[item.optionValue]  动态设置form的key -->
                <select class="select" name="" id="" v-model="form[item.optionValue]">
                    <option :value="option.value"   v-for="option in item.options">{{ option.text }}</option>
                </select>
            </div>
        </div>
        <button class="submit" @click="submit">提交</button>
    </div>
  </template>
  
  <script lang="ts">
    // ts写法:
    // export default defineComponent({
    //     data(){
    //         return {
    //             username: 'xiaoming'
    //         }
    //     }
    // })
    // 在非ts环境下才需要导入的这个方法,如果不用ts,则应该写成:
    // export default{
    //     data(){
    //         return {
    //             usename:'xiaoming'
    //         }
    //     }
    // }
  
    import { defineComponent } from 'vue'
    import { Type } from '@/types/form'  
    import type { Form } from '@/types/form'
    // Type 是一个枚举类型的值  他会生成一个真实的对象;
    // Form 是interface接口定义的， 他不会生成任何的东西；
  
    // import type  是导入一个声明的类型;
  
    // optionValue  value label list detail item data kpilist datalist kpilist
    // option
    // value 值 ==  一般是一个值
    // label 
    // list  列表
    // item  子项
    // detail  详情
    // data  数据  object[]  object  
    // kiplist  命名不要以内容进行命名
    // datalist 
    // kpilist
    // optionValue  选项 的值
  
    // value  title name  label  key定义到页面上
  
    // 数据的维度,是以少为准;
    // 80%  90%
    // 
    // let breakFirst = [
    //     {
    //         id:1,
    //         item: '面'
    //     },
    //     {
    //         id:2,
    //         item: '水'
    //     }
    // ]
  
    // 我们定义的数据结构 ,每一个结构 都要相同  key value  
    // object[];  每一个object对应的key都一样;
  
  
    // 声明数据时,可读性很重要
    const data = [
        {
            id:1,
            type: 1,   // 1文本  2:单选  3: 下拉
            label:'KPI规则名称',
            text:'研发提测质量',
            options:[],
            optionValue:'',
        },
        {
            id:2,
            type:2,
            label:'提测邮件符合测试邮件模板',
            text:'',
            optionValue:'emilTemplate',
            options:[
                {
                    value:'A',  //就是发给服务端的那个值
                    text: '提测邮件规范率>=90%'
                },
                {
                    value: 'B',
                    text:  '90%>提测邮件规范率>=80%'
                }, 
                {
                    value: 'C',
                    text: '提测邮件规范率<80%'
                }
            ]
        },
        {
            id: 3,
            type: 2,
            label:'提测版本被Smoke Test通过率',
            text:'',
            optionValue:'percent',
            options:[
                {
                    value:'A',  //就是发给服务端的那个值
                    text: '提测Smoke Test通过率>=90%'
                },
                {
                    value: 'B',
                    text:  '90%>提测Smoke Test通过率>=80%'
                }, 
                {
                    value: 'C',
                    text: '提测Smoke Test通过率<80%'
                }
            ]
        },
        {
            id: 4,
            label:'评审者',
            type: 3,
            text:'',
            optionValue: 'manager',
            options:[
                {
                    value:'A',  //就是发给服务端的那个值
                    text: '研发项目经理/测试'
                },
                {
                    value: 'B',
                    text:  '产品'
                }, 
                {
                    value: 'C',
                    text: '组长'
                }
            ]
        },
    ]
  
    export default defineComponent({
        data(){
            return{
                data,
                form:{} as Form,  //断言来声明数据类型
                Type,   // 声明枚举类型
            }
        },
        methods:{
          // 提交form表单
            submit(){
                // 这个知识点非常的重要:  动态生成服务端的参数
                console.log(this.form);
            },
            // 格式化
            // 在写方法是,必须要声明参数的类型;
            format(obj: { text: string, value: string }){
                return obj.text.replace(/\d+%/g,val=>{
                    return `<span style="display:inline-block; padding: 4px; border:1px solid #ccc; border-radius:4px;">${val}</span>, ${obj.value}`
                })
            }
        }
    })
  </script>
  
  <style scoped>
    .item{
        display: flex;
        line-height: 30px;
    }
  
    .item .options {
        display: flex;
        flex-direction: column;
    }
  
    .item .text{
        color: #ccc;
    }
  
    .select {
        height: 30px;
    }
  
    .label{
        font-weight: bold;
        margin-right: 10px;
        width:300px;
        text-align: right;
    }
  
    .submit{
        display: block;
        margin: 20px auto;
    }
  </style>