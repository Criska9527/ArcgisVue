<template>
  <div class="home">
    <!--菜单栏组件-->
    <nav-bar></nav-bar>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    NavBar
  }
};
</script>
<style lang="less" scoped>

</style>
