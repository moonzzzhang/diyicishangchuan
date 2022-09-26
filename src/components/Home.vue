<template>
  <div>
    我是home组件
    <el-button type="info" round @click="exitLogin">退出</el-button>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    exitLogin() {
      window.sessionStorage.clear;
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="less" scoped></style>
