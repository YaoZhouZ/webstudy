/* 
    module使用module.exports=xxx去暴露，xxx就是暴露的内容
    moduleh和module.exports不能混着用，如果混用，以module.exports为主
*/
const data='atguigu'
const msg='hello'

module.exports={
    showData(){
        console.log(data)
    },
    showMsg(){
        console.log(msg)
    }
}
