<template>
  <div>
    <span>小明每次花100元</span>
    <button @click="$emit('update:money', money - 100)">花钱</button>
    <span>爸爸还剩{{ money }}元</span>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: ["money"],
};
</script>

<style scoped>
div {
  height: 80px;
  background: pink;
}
</style>