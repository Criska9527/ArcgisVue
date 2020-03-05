<!--
 * @Author: 周祥毅
 * @Date: 2020-03-04 18:06:59
 * @LastEditors: 周祥毅
 * @LastEditTime: 2020-03-05 14:26:13
 * @Description: 底图类的组件（用于加载arcgis地图类和底图的显示）
 -->
<template>
    <div>
        <div id="mapdiv">
            <div id="map"></div>
        </div>
    </div>
</template>
<script>

    export default {
        name: "BaseMap",
        data() {
            return {
                maptype: "Amap"
            };
        },
        mounted() {
            this.initBaseMap()
        },
        methods: {
            initBaseMap() {
                
                this.BaseMap.initMap('map', this.maptype)
            }
        }
    };
</script>
<style lang="less" scoped>
    @import url('http://59.108.92.197:9007/api/arcgis_js_v327_sdk/arcgis_js_api/library/3.27/3.27/esri/css/esri.css');

    #mapdiv {
        height: 100%;
        width: 100%;
        padding: 0px;
        margin: 0px;

        #map {
            width: 100%;
            height: 100%;
            background: #f8f8f8;
            position: absolute;
        }
    }
</style>