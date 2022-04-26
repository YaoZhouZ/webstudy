"use strict";
class Dog {
    // constructor 被称为构造函数
    // 构造函数会在对象创建时调用
    constructor(name, age) {
        // 在实例方法中，this就表示当前的实例
        // 在构造函数中当前对象就是当前新建的那个对象
        // 可以通过this向新建对象中添加属性
        this.name = name;
        this.age = age;
    }
    bark() {
        // alert('汪汪汪')
        // 在方法中可以通过this来表示当前调用方法的对象
        console.log(this.name);
    }
}
const dog1 = new Dog('小黑', 3);
const dog2 = new Dog('小白', 5);
console.log(dog1);
console.log(dog1.bark());
console.log(dog2);
