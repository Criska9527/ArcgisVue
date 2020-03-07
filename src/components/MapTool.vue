<!--
 * @Author: 周祥毅
 * @Date: 2020-03-04 19:25:19
 * @LastEditors: 周祥毅
 * @LastEditTime: 2020-03-05 18:25:06
 * @Description: 地图小工具组件
 -->
<template>
    <div>
        <!-- 地图小工具 -->
        <div class="mapUntool">
            <ul>
                <li class="iconfont" v-for="(item,index) in maptool" :key="index" :class="item.iconclass"
                    :title="item.title" @click="maptoolclick(item.title,$event)"></li>
            </ul>
        </div>
        <z-map ref="ZMap"></z-map>
    </div>
</template>
<script>
    import ZMap from  "@/components/Map.vue";
    export default {
        name: "MapTool",
        data() {
            return {
                maptool: [
                    {
                        iconclass: 'iconjiahao',
                        title: '放大'
                    },
                    {
                        iconclass: 'iconjianhao',
                        title: '缩小'
                    },
                    {
                        iconclass: 'iconceju',
                        title: '测距'
                    },
                    {
                        iconclass: 'iconmianjiceliang',
                        title: '测面积'
                    },
                    {
                        iconclass: 'icontarget-lock',
                        title: '定位'
                    },
                    {
                        iconclass: 'iconqingchu',
                        title: '清除'
                    }
                ],
                ZMap:null
            }
        },
        mounted() {
           this.ZMap =  this.$refs.ZMap;
        },
        methods: {
            maptoolclick(type, event) {
                if (type === '测距') {
                     this.ZMap .Measure('measuredistance')
                } else if (type === "测面积") {
                     this.ZMap .Measure('measureArea')
                } else if (type === "放大") {
                     this.ZMap .MapZoom('out')
                } else if (type === "缩小") {
                    this.ZMap .MapZoom('in')
                } else if (type === "定位") {
                     this.ZMap.GaodePos()
                    
                } else {
                    this.ZMap.ClearMaptool()
                }
            }
        },
        components:{
            ZMap
        }

    }  
</script>
<style lang="less" scoped>
    @import '~styles/mixins.less';
    @import '~styles/variable.less';
    
    .mapUntool {
        .defaultdiv();
        right: 10px;
        top: 100px;
        cursor: pointer;
 

        ul {
            cursor: pointer;
            
            li {
                cursor: pointer;
                font-size: 18px;
                padding: 7px;
                border-bottom: 1px solid #b7b5b5;
                color:@color-text

            }

            li:hover {
                background:@color-background;
                color: @color-text;

            }

            li:last-child {

                border-bottom: none;

            }
        }
    }
</style>