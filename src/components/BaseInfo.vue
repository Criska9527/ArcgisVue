<!--
 * @Author: 周祥毅
 * @Date: 2020-03-05 11:01:41
 * @LastEditors: 周祥毅
 * @LastEditTime: 2020-03-06 08:36:39
 * @Description: 基本信息组件（城市，天气，logo）
 -->
<template>
  <div class="baseinfo">
    <ul>
      <li>
        <img :src="picUrl" alt />
      </li>
      <li class="city">{{citystreet}}</li>
      <li>
        <div class="weature">{{weather.weather}}</div>
        <div>{{weather.temperature}}℃</div>
      </li>
    </ul>
    <z-map ref="ZMap"></z-map >
  </div>
</template>
<script>
//引入logo
import pic from "@/assets/default.png";
import { mapconfig } from "@/assets/config/mapconfig.js";
import { mapState } from "vuex";
import ZMap from  "@/components/Map.vue";
export default {
  name: "BaseInfo",
  data() {
    return {
      picUrl: pic,
      center: null,
      city: "",
      citycode: "",
      citystreet: "",
      weather: {
      weather: "",
      temperature: ""
      },
      ZMap:null
    };
  },
  watch: {},
  computed: {
    ...mapState(["posinfomation","map"])
  },
  mounted() {
    this.ZMap =  this.$refs.ZMap;
    setTimeout(async () => {
      //定位
         this.ZMap.GaodePos();
         //this.BaseMap.GaodePos();
         console.log(this.ZMap)
        //  this.map = this.BaseMap.map;
        const center = this.map.extent.getCenter();
        console.log(center)
       

    }, 1000);
    setTimeout(async () => {
      //定位
    //    const MapMain = this.$refs.MapMain;

    //   const center = MapMain.map.extent.getCenter();
      this.city = this.posinfomation.addressComponent.city;
      this.citycode = this.posinfomation.addressComponent.adcode;
      this.citystreet = `${this.posinfomation.addressComponent.district} ${this.posinfomation.addressComponent.street}`;
      //天气查询
      this.GetWeature();
    }, 1200);
  


    //this.InverseGeo()
  },
  methods: {
    //逆地址解析获取当前城市
    InverseGeo() {
      const url = mapconfig.dataUrl.InverseGeoUrl;
      //请求高德api
      this.datafind(
        url,
        {
          key: mapconfig.AmapServeKey,
          location: this.center
        },
        "get"
      ).then(res => {
        console.log(res);
        if (res.info === "OK") {
          const data = res.regeocode;
          // //城市的名字
          // this.city = data.regeocode.addressComponent.city
          // //城市的编码
          // this.cityadccode = data.regeocode.addressComponent.adcode
        }
      });
    },
    //天气查询
    GetWeature() {
      const url = mapconfig.dataUrl.GetWeatureUrl;
      this.datafind(
        url,
        {
          key: mapconfig.AmapServeKey,
          city: this.citycode
        },
        "get"
      ).then(res => {
        console.log(res);
        if (res.info === "OK") {
          this.weather.weather = res.lives[0].weather;
          this.weather.temperature = res.lives[0].temperature;
        }
      });
    }
  },
  components:{
      ZMap
  }
};
</script>
<style scoped lang="less">
@import '~styles/mixins.less';
@import '~styles/variable.less';
.baseinfo {
  left: 7px;
  top: 30px;
  .defaultdiv();
  cursor: pointer;
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