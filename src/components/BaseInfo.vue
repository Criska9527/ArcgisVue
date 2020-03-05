<!--
 * @Author: 周祥毅
 * @Date: 2020-03-05 11:01:41
 * @LastEditors: 周祥毅
 * @LastEditTime: 2020-03-05 18:20:16
 * @Description: 基本信息组件（城市，天气，logo）
 -->
<template>
    <div class="baseinfo">
        <ul>
            <li>
                <img :src="picUrl" alt="">
            </li>
            <li class="city">{{citystreet}}</li>
            <li>
                <div class="weature">{{weather.weather}}</div>
                <div>{{weather.temperature}}℃</div>
            </li>
        </ul>
    </div>
</template>
<script>
    //引入logo
    import pic from "@/assets/default.png";
    import { mapconfig } from '@/assets/config/mapconfig.js'
    import { mapState } from 'vuex'

    export default {
        name: 'BaseInfo',
        data() {
            return {
                picUrl: pic,
                map: null,
                center: null,
                city: '',
                citycode: '',
                citystreet: '',
                weather:{
                    weather:'',
                    temperature:''

                }
            }
        },
        watch: {

        },
        computed: {
            ...mapState(['posinfomation'])

        },
        created() {

            setTimeout(async () => {
                //定位
                this.BaseMap.GaodePos()
                this.map = this.BaseMap.map

            }, 600)
            setTimeout(async () => {
                //定位
                const center = this.map.extent.getCenter()
                console.log(this.posinfomation)
                this.city = this.posinfomation.addressComponent.city
                this.citycode = this.posinfomation.addressComponent.adcode
                this.citystreet = `${this.posinfomation.addressComponent.district} ${this.posinfomation.addressComponent.street}`
                //天气查询
                this.GetWeature()


            }, 1200)

            //this.InverseGeo()
        },
        methods: {
            //逆地址解析获取当前城市
            InverseGeo() {

                const url = mapconfig.dataUrl.InverseGeoUrl
                //请求高德api
                this.datafind(
                    url,
                    {
                        key: mapconfig.AmapServeKey,
                        location: this.center
                    }, 'get').then((res) => {
                        console.log(res)
                        if (res.info === 'OK') {
                            const data = res.regeocode
                            // //城市的名字
                            // this.city = data.regeocode.addressComponent.city
                            // //城市的编码
                            // this.cityadccode = data.regeocode.addressComponent.adcode

                        }
                    })
            },
            //天气查询
            GetWeature() {
                const url = mapconfig.dataUrl.GetWeatureUrl
                this.datafind(
                    url,
                    {
                        key: mapconfig.AmapServeKey,
                        city: this.citycode
                    }, 'get').then((res) => {
                        console.log(res)
                        if (res.info === 'OK') {
                              this.weather.weather = res.lives[0].weather
                              this.weather.temperature = res.lives[0].temperature


                        }
                    })

            },
        }
    }

</script>
<style scoped lang="less">
    .baseinfo {
        position: absolute;
        left: 7px;
        top: 30px;
        border-radius: 5px;
        cursor: pointer;
        background-color: rgb(84, 92, 100);
        color: white;
        font-size: 14px;


        ul {
            padding: 6px !important;
            display: flex;

            .city {
                height: 40px;
                line-height: 40px;
            }

            li {
                margin-right: 16px;

                .weature {
                    margin-left: 1px;
                }

            }

            img {
                max-width: 40px;
            }
        }
    }
</style>