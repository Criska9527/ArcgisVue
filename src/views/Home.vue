<!--
 * @Author: 周祥毅
 * @Date: 2020-03-02 17:09:27
 * @LastEditors: 周祥毅
 * @LastEditTime: 2020-03-06 16:06:21
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
    <!-- 基础信息组件 -->
    <base-info></base-info>
    <!-- 弹出层 -->
    <panel></panel>

  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/views/Navbar.vue";
import BaseMap from "@/components/BaseMap.vue";
import MapTool from "@/components/MapTool.vue";
import BaseInfo from "@/components/BaseInfo.vue";
import Panel from "@/views/Panel.vue";
export default {
  name: "Home",
  components: {
    NavBar,
    BaseMap,
    MapTool,
    BaseInfo,
    Panel
  }
};
</script>
<style lang="less" scoped>

</style>
