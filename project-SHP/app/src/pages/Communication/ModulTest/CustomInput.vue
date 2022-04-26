<template>
  <div>
    <h1>input包装组件</h1>
    <!-- 
        :value是动态属性
        @input给原生DOM绑定原生的DOM事件
     -->
    <input type="text" :value="value" @input="$emit('input',$event.target.value)"/>
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: ["value"],
};
</script>

<style scoped>
div {
  background: pink;
  height: 80px;
}
</style>