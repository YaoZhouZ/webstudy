/* 
    module2使用exports.xxx=value去暴露，value就是暴露的内容，xxx是他的名字
*/

exports.data='atguigu2'
exports.msg='hello2'

exports.sum=function(a,b){
    console.log(a+b)
}

exports.sub=function(a,b){
    console.log(a-b)
}