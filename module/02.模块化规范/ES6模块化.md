## ES6模块化
### 规范
    1.每个文件都是一个模块
    2.要借助Babel和Browserify依次编译代码，才能在浏览器端运行
    3.Babel中文网：https://www.babeljs.cn/

### 基本语法
#### 暴露模块
    1.分别暴露：export 暴露部分
    2.统一暴露：export {暴露内容1，暴露内容2}
    3.默认暴露：export defalut 暴露内容
#### 引入模块
    1.方法1：import {xxx,yyy} from './module1'
    2.放法2：import module3 from './module3'
#### 使用规则
    若使用分别暴露，统一暴露的方式暴露内容，那么就要用方法1引入
    若使用默认暴露的方式暴露内容，那么就要用方法2引入