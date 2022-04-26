import Vue from 'vue'
import App from './App.vue'
// 三级联动的组件--全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import { MessageBox,Button } from 'element-ui';
// 第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
Vue.component(Button.name, Button);

// ElementUI注册组件的写法还有一种写法，挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

Vue.config.productionTip = false

// 引入路由
import router from '@/router'
// 引入仓库
import store from '@/store'
// 引入MockServer.js mock虚拟数据
import '@/mock/mockServe'
// 引入swiper样式
import 'swiper/css/swiper.css'
// 统一接收api文件夹里面全部请求函数
// 统一引入
import * as API from '@/api'
// 引入图片懒加载插件
import VueLazyload from 'vue-lazyload'
import lazyPicture from './assets/src=http___m.51dangpu.com_Uploads_Image_Article_2017-12-09_5a2abbaa6bbda.png&refer=http___m.51dangpu.webp'
// 注册插件
Vue.use(VueLazyload,{
  // 懒加载默认的图片
  loading:lazyPicture
})

// 引入校验插件
import '@/plugins/validate'
new Vue({
  render: h => h(App),
  // 全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  // 注册路由：底下的写法KV一致忽略V【router小写的】
  // 注册路由信息：当这里书写router的时候，组件身上都拥有$route、$router属性
  router,
  // 注册仓库：组件实例的身上会多了一个属性$store属性
  store
}).$mount('#app')
