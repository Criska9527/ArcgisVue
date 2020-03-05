/*
 * @Author: 周祥毅
 * @Date: 2020-03-02 17:09:27
 * @LastEditors: 周祥毅
 * @LastEditTime: 2020-03-05 17:14:04
 * @Description: vuex
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posinfomation:null
  },
  mutations: {
    getposinfomation (state, payload) {
      state.posinfomation = payload
    }
  },
  actions: {
    getposinfomation (context, payload) {
      context.commit('getposinfomation',payload)
    }
  },
  modules: {
  }
})
