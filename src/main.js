/*
 * @Author: 周祥毅
 * @Date: 2020-03-02 17:09:27
 * @LastEditors: 周祥毅
 * @LastEditTime: 2020-03-05 14:01:14
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { BaseMap } from './common/js/map'

//导入数据请求
import AxiosGetData from './common/js/datafind'
// import Amap from 'Amap'
Vue.prototype.BaseMap = new BaseMap();
Vue.prototype.datafind = AxiosGetData;

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
