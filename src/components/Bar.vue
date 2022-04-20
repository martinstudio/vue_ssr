<!-- Bar -->
<template>
  <div style="color: blue">
    Bar
    <br />
    {{ $store.state.name }}
    {{ $store.state.age }}
  </div>
</template>

<script>
export default {
  changeAll(store) {
    // console.log("----------------", store);
    return store.dispatch("changeAll");
  },
  name: "Bar",
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>