<!-- Foo -->
<template>
  <div style="color: red" @click="handlerCilck">Foo</div>
</template>

<script>
export default {
  name: "Foo",
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    handlerCilck() {
      alert("ookoo");
    },
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>