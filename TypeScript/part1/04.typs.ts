// object表示一个js对象
let obj: object
obj = {}
obj = function () { }

// {} 用来指定对象中可以包含哪些属性
// 语法：{属性名：属性值，属性名：属性值}
// 在属性名后面加上一个？，表示属性是可选的
let obj2: { name: string, age?: number }
obj2 = { name: '孙悟空' }

// [propName: string]: any 表示任意类型的属性
let obj3: { name: string, [propName: string]: any }
obj3 = { name: '猪八戒', age: 18, sex: '男' }

/* 
    设置函数结构的类型声明
        语法：（形参：类型，形参：类型...）=>返回值
*/
let obj4: (a: number, b: number) => number
/* obj4 = function (a, b) {
    return 100
} */


/* 
    数组的类型声明：
        类型[]
        Array<类型>
*/
// string[] 表示字符串数组
let arr: string[]
arr = ['a', 'b', 'c']

// number[] 表示数值数组
let arr2: number[]
arr2 = [12, 24, 54]

/* 
    元组，元组就是固定长度的数组
        语法：[类型，类型，类型]
*/
let arr3: [string, string]
arr3 = ['123', 'dqwd']

/* 
    enum 枚举
*/
enum Gender {
    Male = 0,
    Female = 1
}

let i: { name: string, gender: Gender }
i = {
    name: '孙悟空',
    gender: Gender.Male
}

console.log(i.gender === Gender.Male)

// &表示同时
let j: { name: string } & { age: number }
j = { name: '孙悟空', age: 18 }

// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5
let k: myType
let l: myType
