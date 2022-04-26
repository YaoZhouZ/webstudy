// 使用class关键字来定义一个类
/* 
    对象中主要包含了两个部分：
        属性
        方法
*/
class Person {
    /* 
        直接定义的属性是实例属性，需要通过对象的实例去访问
            const per = new Person()
            per.name
        使用static开头的属性是静态属性（类属性），可以直接通过类去访问
            Person.age
    */
    // 定义实例属性
    // readonly 只读属性
    readonly name: string = "孙悟空"
    // 在属性前使用static关键字可以定义类属性（静态属性）
    static age: number = 18


    // 方法定义
    /* 
        如果方法以static开头则方法就是类方法，可以直接通过类去调用
    */
    sayHello(){
        console.log("Hello 大家好")
    }
}

const per = new Person()
// console.log(per)
console.log(per.name)

console.log(Person.age)

per.sayHello()