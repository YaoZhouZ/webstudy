<template>
  <div>
    <h1>组件间通信高级(**非常重要，面试必备**)</h1>
    <router-link
      v-for="item in this.list"
      :key="item.id"
      :to="item.url"
      :class="currentIndex == item.id ? 'active' : ''"
      @click.native='hander(item.id)'
      >{{ item.title }}</router-link
    >
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Communication",
  data() {
    return {
      list: [
        {
          id: 1,
          title: "event深入",
          url: "/communication/event",
        },
        {
          id: 2,
          title: "v-model深入",
          url: "/communication/modul",
        },
        {
          id: 3,
          title: "属性修饰符sync",
          url: "/communication/sync",
        },
        {
          id: 4,
          title: "$attrs与$listeners",
          url: "/communication/attrslisteners",
        },
        {
          id: 5,
          title: "$children与$parent",
          url: "/communication/childrenparent",
        },
        {
          id: 6,
          title: "作用域插槽scope-slot",
          url: "/communication/scopeslot",
        },
      ],
      currentIndex: 0,
    };
  },
  methods:{
    hander(id){
      this.currentIndex= id
    }
  }
};
</script>

<style>
a {
  margin-left: 10px;
}
.active {
  color: red;
  background: pink;
}
</style>