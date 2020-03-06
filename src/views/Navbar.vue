<!--
 * @Author: 周祥毅
 * @Date: 2020-03-02 17:33:27
 * @LastEditors: 周祥毅
 * @LastEditTime: 2020-03-06 17:16:09
 * @Description: 导航组件
 -->
<template>
  <div class="content">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 5px;" size="mini">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
      :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-submenu v-for="(item,i) in list" :key="i" :index="item.index">
        <template slot="title">
          <i :class="item.fontstyle"></i>
          <span slot="title">{{item.name}}</span>
        </template>
        <el-menu-item v-for="(sonitem,i) in item.children" :key="i" :index="sonitem.index">
          <span slot="title" @click="listclick(sonitem.name)">{{sonitem.name}}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  import { mapconfig } from '@/assets/config/mapconfig.js'
  import { mapState } from 'vuex'

  export default {
    name: "Navbar",
    data() {
      return {
        dialogVisible: false,
        model: false,
        list: [
          {
            name: "基本功能",
            fontstyle: "el-icon-magic-stick",
            index: "1",
            children: [
              {
                name: "点位添加(周边设施)",
                index: "1-1"
              },
              {
                name: "图层添加",
                index: "1-2",
                children: [
                  {
                    name: "FeatureLayer的添加",
                    index: "1-2-1"
                  },
                  {
                    name: "动态图的添加",
                    index: "1-2-2"
                  }
                ]
              }
            ]
          },
          {
            name: "空间分析",
            fontstyle: "el-icon-odometer",
            index: "2",
            children: [
              {
                name: "缓冲区分析",
                index: "2-1"
              },
              {
                name: "叠加分析",
                index: "2-2"
              }
            ]
          },
          {
            name: "查询专题",
            fontstyle: "el-icon-location-outline",
            index: "3",
            children: [
              {
                name: "空间查询",
                index: "3-1"
              },
              {
                name: "属性查询",
                index: "3-2"
              }
            ]
          }
        ],
        isCollapse: true
      };
    },
    computed: {
      ...mapState(['posinfomation'])
    },
    methods: {
      handleOpen(key, keyPath) {

      },
      handleClose(key, keyPath) {

      },
      listclick(type) {
        if (type === '点位添加(周边设施)') {
          //此处模拟查询周边所有的


          const url = mapconfig.dataUrl.around
          this.datafind(
            url,
            {
              key: mapconfig.AmapServeKey,
              location: `${this.posinfomation.position.lng},${this.posinfomation.position.lat}`,
              radius: 500
            },
            'get'
          ).then((res) => {
            console.log(res)
            let json = []
            for (const item of res.pois) {
              // json['lon'] = item.location
              const locarray = item.location.split(",")
              let singlesjson = {};
              singlesjson['lon'] = locarray[0],
              singlesjson['lat'] = locarray[1]
              singlesjson['p_name'] = item['name'];
              singlesjson['p_id'] = item['id'];
              singlesjson['p_type'] = item['type'];
              singlesjson['biz_type'] = item['biz_type'];
              singlesjson['address'] = item['address'];
              singlesjson['photos'] = item['photos'];
              json.push(singlesjson)
            }
            //此处添加点位
            this.BaseMap.addPoints('', json)


          })
        }
      }

    },

  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .el-menu-item i {
    color: white;
  }

  .el-submenu__title i {
    color: white;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 200px;
  }

  .content {
    top: 100px;
    left: 5px;
    /* position: fixed; */
    z-index: 1;
    position: absolute;
  }
</style>