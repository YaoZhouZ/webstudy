/* 
    module中使用了【统一暴露】
*/
const school='尚硅谷'
const person={
    name:'老刘',
    age:19,
    sex:'女'
}
function getLaoliu(){
    console.log(person)
}

// 
export{school,person,getLaoliu}