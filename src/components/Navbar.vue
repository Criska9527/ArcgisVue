<!--
 * @Author: 周祥毅
 * @Date: 2020-03-02 17:33:27
 * @LastEditors: 周祥毅
 * @LastEditTime: 2020-03-03 17:51:03
 * @Description: 导航组件
 -->
<template>
    <div class="content">
      <ul class="bar-wrapper">
                <li class="bar-item bar-item-title">
                    <span class="el-icon-menu"></span>
                    功能
                </li>
                <li class="bar-item" 
                    v-for="(item,index) of list" 
                    :key="index"
                   
                >
                <span :class="item.fontstyle"></span>
                  {{item.name}}
                </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      list: [
        {
          name: "基本功能",
          fontstyle: "el-icon-menu"
        },
        {
          name: "空间分析",
          fontstyle: "el-icon-menu"
        },
        {
          name: "查询专题",
          fontstyle: "el-icon-menu"
        }
      ]
    };
  },
  methods: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .content{
    
      ul{
        background: red;
       
        list-style:none
      }
    }
</style>


