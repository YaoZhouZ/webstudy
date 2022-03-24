## CommonJS
### 规范
    1.每个文件都是一个模块
    2.CommonJS模块化的代码既可以在服务端运行，也可以在浏览器端运行
    3.服务器端：模块化的代码可直接运行
    4.浏览器端：模块化的代码要经过Browserify编译

### 基本语法
#### 暴露语法
    第一种方式：module.exports=value
    第二种方式：exports.xxx=value
#### 引入语法
    引入第三方模块：require(xxx),xxx为模块名
    引入自定义模块：require(xxx),xxx为模块文件路径