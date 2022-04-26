<template>
  <div>
    <Header />
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- 在Home、Search显示的，在登录、注册隐藏 -->
    <Footer v-show="$route.meta.show" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    // 通知vuex发请求，获取数据，存储于仓库当中
    // 派发一个action||获取商品分类的三级列表数据
    this.$store.dispatch("categoryList");
    // 获取用户信息在首页展示
    this.$store.dispatch('getUserInfo')
  },
};
</script>

<style>
</style>
