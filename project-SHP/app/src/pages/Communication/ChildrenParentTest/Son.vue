<template>
  <div>
    <h3>儿子小明：有存款{{ money }}</h3>
    <button @click="giveMoney(50)">给BABA钱：50</button>
  </div>
</template>

<script>
import myMixin from './myMixin/myMixin'
export default {
  name: "Son",
  data() {
    return {
      money: 30000,
    };
  },
  mixins:[myMixin]
};
</script>

<style scoped>
div {
  background-color: pink;
  height: 80px;
}
</style>