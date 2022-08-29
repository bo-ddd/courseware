const data = [
    {
        id: 1,
        label: 'KPI规则名称',
        type: 1, // 1. 文本  2. 单选  3. 下拉
        value: '研发质量提测',
        name: 'KPIname',
        options:[]
    },
    {
        id: 2,
        label: '提测邮件符合提油邮件模板',
        type: 2,
        value: '',
        name: 'testTemplate',
        options: [
            {
                value: 'A',
                text: '提测邮件规范率>=90%,A',
            },
            {
                value: 'B',
                text: '90%>=提测邮件规范率>=80%,B'
            },
            {
                value: 'C',
                text: '提测邮件规范率<=80%,C'
            }
        ]
    },
    {
        id: 3,
        label: '提测版本被Smoke Test通过率',
        type: 2,
        value: '',
        name: 'testPercent',
        options: [
            {
                value: 'A',
                text: '提测Smoke Test通过率>=90%,A'
            },
            {
                value: 'B',
                text: '90>=提测Smoke Test通过率>=80,B'
            },
            {
                value: 'C',
                text: '提测Smoke Test通过率<80%,C'
            }
        ]
    },
    {
        id: 4,
        label: '评审者',
        type: 3,
        value: '',
        name: 'manage',
        options: [
            {
                value: 'A',
                text: '研发项目经理/测试'
            },
            {
                value: 'B',
                text: '项目总监'
            }
        ]
    }
]

export default data;