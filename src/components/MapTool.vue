<!--
 * @Author: 周祥毅
 * @Date: 2020-03-04 19:25:19
 * @LastEditors: 周祥毅
 * @LastEditTime: 2020-03-04 19:55:39
 * @Description: 
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
    </div>
</template>
<script>
    
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
            }
        },
        mounted() {

        },
        methods: {
            maptoolclick(type, event) {
                if (type === '测距') {
                    this.BaseMap.Measure('measuredistance')
                } else if (type === "测面积") {
                    this.BaseMap.Measure('measureArea')
                } else if (type === "放大") {
                    this.BaseMap.MapZoom('out')
                } else if (type === "缩小") {
                    this.BaseMap.MapZoom('in')
                } else if (type === "定位") {
                    this.BaseMap.GaodePos()
                } else {
                    this.BaseMap.ClearMaptool()
                }
            }
        }

    }  
</script>
<style lang="less" scoped>
    .mapUntool {
        position: absolute;
        right: 10px;
        top: 20px;
        border-radius: 5px;
        cursor: pointer;
        background-color: rgb(84, 92, 100);

        ul {
            cursor: pointer;
            display: flex;

            li {
                cursor: pointer;
                font-size: 18px;
                padding: 7px;
                border-bottom: 1px solid #b7b5b5;
                color:white

            }

            li:hover {
                background:rgb(67,74,80);
                color: white;

            }

            li:last-child {

                border-bottom: none;

            }
        }
    }
</style>