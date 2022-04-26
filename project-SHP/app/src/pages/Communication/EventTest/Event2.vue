<template>
  <div>
    <h2>Event2组件</h2>
    <button @click="$emit('click','自定义事件click')">分发自定义click事件</button><br>
    <button @click="$emit('xxx','自定义事件xxx')">分发自定义xxx事件</button>
  </div>
</template>

<script>
export default {
name:'Event2'
}
</script>

<style scoped>
div{
    height: 80px;
    /* width: 100%; */
    background-color: pink;
}
</style>