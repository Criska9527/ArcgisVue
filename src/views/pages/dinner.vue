<!--
 * @Author: 周祥毅
 * @Date: 2020-03-06 17:22:30
 * @LastEditors: 周祥毅
 * @LastEditTime: 2020-03-06 17:23:28
 * @Description: 餐饮组件
 -->
<template>
  <div class="dinner">
    <div class="content">
      <div class="content-left">
        <!-- 轮播图 -->
        <el-carousel :interval="4000" height="250px">
          <el-carousel-item v-for="(item,index) in photos" :key="index">
              <img :src="item.url" alt="" class="imgs">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="content-right">
        <!-- 基本信息 -->
        <div class="baseinfo">
           <ul>
             <li class="name">{{baseinfo.p_name}}</li>
             <li class="address">地址:{{baseinfo.address}}</li>
             <li class="type">类型:{{baseinfo.p_type}}</li>
           </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Dinner",
  data() {
    return {
      baseinfo: this.pointinfo,
      panelid: this.layerid,
      photos:[{
        url:require('@/assets/default.png')
      }]
    };
  },
  props: {
    pointinfo: {
      type: Object,
      default: () => {
        return {};
      }
    },
    layerid: {
      //自动注入的layerid
      type: String,
      default: ""
    }
  },
  created(){
    if(this.baseinfo.photos.length>0){
      this.photos = this.baseinfo.photos
    }
  },
  mounted() {
    
    this.test();
    //将弹窗id提交到store
    this.$store.commit("updatepanelid", this.panelid);
  },
  methods: {
    test() {
      console.log(this.pointinfo);
      console.log(88888);
    }
  }
};
</script>

<style lang="less" scoped>
  @import '~styles/mixins.less';
  @import '~styles/variable.less';
.dinner{
  width: 100%;
  padding: 10px;
  .content{
    display: flex;
    .content-left{
      margin-top: 14px;
      margin-right:12px ;
      flex: 1.5;
      img{
         height:100%;
         width:100%;
      }
    }
    .content-right{
      flex: 1;
      ul{
        li{
          color: @color-content;
          font-size: 12px;
          margin-bottom: 5px;
        }
        .name{
          color: @color-background;
          font-weight: bold;
          font-size: 16px;

        }
        .address{
          margin-top:10px ;
        }
      }
    }
  }
}
</style>
 
