"use strict";
(function () {
    // 定义一个表示人的类
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        /*
            getter方法用来读取属性
            setter方法用来设置属性
                -它们被称为属性得存取器
        */
        // 定义一个方法，用来获取name属性
        /* getName() {
            return this.name
        }
        // 定义一个方法，用来设置name属性
        setName(name: string) {
            this.name = name
        }

        getAge() {
            return this.age
        }
        setAge(age: number) {
            if(age>=0) this.age = age
        } */
        // TS中设置getter方法的方式
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            this._age = value;
        }
    }
    const per = new Person('孙悟空', 18);
    /*
        现在这个属性是在对象中设置的，属性可以任意的被修改
            属性可以任意被修改将会导致对象中的数据变得非常不安全
    */
    // per.setName('猪八戒')
    // console.log(per.getName())
    console.log(per.name);
})();
