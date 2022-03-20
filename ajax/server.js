// 引入express模块
const express=require('express')
const cors = require ('cors')

// 建立app实例对象
const app=express()
// 使用中间件解析urlecoded编码形式的请求体参数
app.use(express.urlencoded({extended:true}))
// 使用中间件解析json编码形式的请求体参数
app.use(express.json())
app.use(cors())

// 暴露静态资源
app.use(express.static(__dirname+'/src'))

// 响应GET请求 --可以接收query参数
app.get('/test_get',(request,response)=>{
    console.log('有人请求test_get了--携带的query参数是:',request.query)//携带query参数
/*     response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Expose-Headers','*') */
    response.send('hello_test_get')
})

// 响应GET请求 --可以接收params参数
app.get('/test_get2/:name/:age',(request,response)=>{
    console.log('有人请求test_get2了--携带的params参数是:',request.params)//携带params参数
    response.send('hello_test_get2')
})

// 响应GET请求
app.get('/get_person',(request,response)=>{
    console.log('有人请求get_person了')
    const person={name:'老刘',age:18,sex:'女'}
    response.send(JSON.stringify(person))
})

// 响应GET请求
app.get('/get_person_delay',(request,response)=>{
    console.log('有人请求get_person了')
    const person={name:'tom',age:18,sex:'女'}
    setTimeout(() => {
        response.send(JSON.stringify(person))
    }, 3000);
})

// 响应POST请求 --可以接收请求体参数
app.post('/test_post',(request,response)=>{
    console.log('有人请求test_post了',request.body)
    response.send('hello_test_post')
})

// 响应GET请求 --jquery
app.get('/test_jquery_get',(request,response)=>{
    console.log('有人请求test_jquery_get了',request.query)
    const car={name:'马自达·阿特兹',price:'25万'}
    response.send(JSON.stringify(car))
})

// 响应POST请求 --jquery
app.post('/test_jquery_post',(request,response)=>{
    console.log('有人请求test_jquery_post了',request.query)
    const car={name:'马自达·阿特兹',price:'25万'}
    response.send(JSON.stringify(car))
})

// 响应GET请求 
app.get('/test_jsonp',(request,response)=>{
    const {callback}=request.query
    const person=[{name:'tom',age:18},{name:'老刘',age:54}]
    response.send(`${callback}(${JSON.stringify(person)})`)
})

app.options('/test_put',(request,response)=>{
/*     response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Expose-Headers','*')
    response.setHeader('Access-Control-Allow-Methods','*') */
    response.send()
})

// 响应PUT请求
app.put('/test_put',(request,response)=>{
/*     response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Expose-Headers','*') */
    response.send('hello_test_put')
})

// 监听
app.listen(8080,(err)=>{
    if(!err) {
        console.log('测试ajax请求的服务器开启成功了!测试地址如下')
        console.log('http://127.0.0.1:8080/1.ajax小试牛刀.html')
        console.log('http://127.0.0.1:8080/2.xhr的五种状态.html')
        console.log('http://127.0.0.1:8080/3.get请求.html')
        console.log('http://127.0.0.1:8080/4.post请求.html')
        console.log('http://127.0.0.1:8080/5.解析json数据.html')
        console.log('http://127.0.0.1:8080/6.处理IE浏览器get缓存问题.html')
        console.log('http://127.0.0.1:8080/7.请求的异常与超时处理.html')
        console.log('http://127.0.0.1:8080/8.取消请求.html')
        console.log('http://127.0.0.1:8080/9.避免多次重复请求.html')
        console.log('http://127.0.0.1:8080/10.jQuery封装的ajax.html')
        console.log('http://127.0.0.1:8080/11.演示回调地狱.html')
    }
})