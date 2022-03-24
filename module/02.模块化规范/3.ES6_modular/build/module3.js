'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/* 
    module中使用了【统一暴露】
*/
var school = '尚硅谷';
var person = {
    name: '老刘',
    age: 19,
    sex: '女'
};
function getLaoliu() {
    console.log(person);
}

// 
exports.school = school;
exports.person = person;
exports.getLaoliu = getLaoliu;