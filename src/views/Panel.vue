<!--
 * @Author: 周祥毅
 * @Date: 2020-03-06 11:02:47
 * @LastEditors: 周祥毅
 * @LastEditTime: 2020-03-06 17:48:19
 * @Description: 弹出层组件
 -->
<template>
    <el-dialog 
        :title="popinfo.p_name" 
        :visible.sync="dialogVisible" 
         width="30%" 
        :modal="model" 
        :before-close="handleClose" 
        :close-on-click-modal="closeother" 
        :modal-append-to-body="wraper">

        <ul>
            <li>sssssssssss</li>
            <li>sssssssssss</li>
            <li>sssssssssss</li>
            <li>sssssssssss</li>
            <li>sssssssssss</li>
            <li>sssssssssss</li>
         
                        

      
        </ul>

    </el-dialog>
</template>
<script>
    // import PanelCotent from window.panelurl
    import { mapState } from 'vuex'
    //此处导入组件
    export default {
        name: "Panel",
        data() {
            return {

                model: false,
                closeother:false,
                wraper:false
            }

        },
        computed: {
            //计算属性获取显隐控制
            dialogVisible: {
                get: function () {
                    return this.$store.state.dialogVisible
                },
                set: function (val) { //因为我这里并不需要其他属性也跟着一起改变 所以就这样写了
                    console.log(val)
                    this.$store.commit("changedialogVisible", val);
                 
                }
            },
            popinfo:{
                get(){
                    return this.$store.state.popinfo
                }
            }



        },
        mounted() {
            console.log(this.popinfo)
            //修改位置
            console.log($)
        },
        methods: {
            handleClose(done) {
                this.dialogVisible = false
            }
        },
        components: {
            //此处注册组件
        }
    }
</script>
<style scoped lang="less">

</style>