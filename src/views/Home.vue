<!--
 * @Author: 周祥毅
 * @Date: 2020-03-02 17:09:27
 * @LastEditors: 周祥毅
 * @LastEditTime: 2020-03-04 19:36:00
 * @Description: 
 -->
<template>
  <div class="home">
    <!--菜单栏组件-->
    <nav-bar></nav-bar>
    <!-- 基础地图组件 -->
    <base-map></base-map>
    <!-- 地图工具组件 -->
    <map-tool></map-tool>

  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/views/Navbar.vue";
import BaseMap from "@/components/BaseMap.vue";
import MapTool from "@/components/MapTool.vue";
export default {
  name: "Home",
  components: {
    NavBar,
    BaseMap,
    MapTool
  }
};
</script>
<style lang="less" scoped>

</style>
