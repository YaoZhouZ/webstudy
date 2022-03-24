// 引入【分别暴露】的模块
import {data,msg,showMsg,showData} from './module1'

// 引入【分别暴露】的模块 + 重命名
import {data as data2} from './module2'

// 引入【分别暴露】的模块 + 打包引入
import * as module1 from './module1'

// 引入【统一暴露】的模块(和上面三种引入方式同理)
import {school,person,getLaoliu} from './module3'

// 引入【默认暴露】的模块
import module4 from './module4'

// 引入多种暴露方式的模块
import module5,{teacher1,teacher2,stu1,stu2} from './module5'
console.log(module5)
console.log(teacher1)
console.log(teacher2)
console.log(stu1)
console.log(stu2)