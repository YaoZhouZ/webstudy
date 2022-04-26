<template>
  <div>
    <li v-for="(item, index) in todos" :key="index">
      <!-- 作用域插槽 -->
      <slot :todo="item" :$index="index"></slot>
    </li>
  </div>
</template>

<script>
export default {
  name: "List1",
  props: {
    todos: Array,
  },
};
</script>

<style>
</style>