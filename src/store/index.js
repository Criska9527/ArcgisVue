/*
 * @Author: 周祥毅
 * @Date: 2020-03-02 17:09:27
 * @LastEditors: 周祥毅
 * @LastEditTime: 2020-03-06 17:08:56
 * @Description: vuex
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posinfomation:null,
    popinfo:null,
    dialogVisible:false,
    map:null,
    panelid:null
  },
  mutations: {
    getposinfomation (state, payload) {
      state.posinfomation = payload
    },
    changedialogVisible(state, payload){
      state.dialogVisible = payload
    },
    changepopinfo(state, payload){
      state.popinfo = payload
    },
    updatepanelid(state, payload){
      state.panelid = payload
    },
    map(state, payload){
      state.map = payload
    }
  },
  actions: {
    getposinfomation (context, payload) {
      context.commit('getposinfomation',payload)
    },
    sendmap(context,map) {
      context.commit('map',map)
    }
  },
  modules: {
  }
})
