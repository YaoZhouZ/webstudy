## 0.复习
（1）商品分类的三级列表由静态变为动态形式【获取服务器数据，解决跨域问题】
（2）函数防抖与节流【面试频率很高】
（3）路由的跳转：声明式导航（router-link）、编程式导航
编程式导航解决这个问题：自定义属性

## 1.开发Search模块中的TypeNav商品分类的菜单（过度动画的效果）
过渡动画：前提是组件|元素务必要有v-if|v-show指令才可以进行过度动画

## 2.现在咱们的商品分类三级列表可以进行优化
在APP根组件当中发请求【根组件mounted】执行一次

## 3.合并parasm与query参数

## 4.开发Home首页当中的ListContainer组件与Floor组件
但是这里需要知道一件事情：服务器返回的数据（接口）只有商品分类菜单分类数据，对于ListContainer组件与Floor组件数据服务器没有提供的
mock数据（模拟）：如果你想mok数据，需要用到一个插件mockjs

使用步骤：
（1）在项目当中src文件夹中创建一个mock文件夹
（2）准备JSON数据（mock文件夹中创建相应的JSON文件）-----格式化一下，别留空格（跑不起来）
（3）把mock数据需要的图片放置到public文件夹中【public文件夹在打包的时候，会把相应的资源原封不动打包到dist文件夹中】
（4）创建mockServer.js通过mockjs插件实现模拟数据
（5）mockServer.js文件在入口文件中引入（至少需要执行一次，才能模拟数据）

## 5.ListContainer组件开发的重点
安装Swiper插件：安装swiper5版本
npm i --save swiper@5