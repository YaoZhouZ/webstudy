// 暴露的本质是module.exports的内容
// 引入的内容是什么，取决于暴露的是什么

const module1=require('./module1') //引入自定义模块
const module2=require('./module2') //引入自定义模块
const uniq=require('uniq')

module1.showData()
module1.showMsg()
module2.sum(1,2)
module2.sub(4,2)
const arr=[1,3,7,8,9,2,5,6,4,1,7,2,6]
console.log(uniq(arr))
