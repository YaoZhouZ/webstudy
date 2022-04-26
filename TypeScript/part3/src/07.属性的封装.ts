(function () {
    // 定义一个表示人的类
    class Person {
        // TS可以在属性前添加属性的修饰符
        /* 
            public 修饰的属性可以在任意位置访问（修改）默认值
            private 私有属性，私有属性只能在类内部进行修改（访问）
                -通过在类中添加方法使得私有属性可以被外部访问
            protected 受保护的属性，只能在当前类和当前类的子类中访问（修改）
        */
        private _name: string
        private _age: number

        constructor(name: string, age: number) {
            this._name = name
            this._age = age
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
            return this._name
        }
        set name(value: string) {
            this._name = value
        }

        get age() {
            return this._age
        }
        set age(value: number) {
            this._age = value
        }
    }

    const per = new Person('孙悟空', 18)

    /* 
        现在这个属性是在对象中设置的，属性可以任意的被修改
            属性可以任意被修改将会导致对象中的数据变得非常不安全
    */

    // per.setName('猪八戒')
    // console.log(per.getName())

    console.log(per.name)
})()