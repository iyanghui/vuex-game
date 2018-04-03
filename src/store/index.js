import Vue from 'vue'
import Vuex from 'vuex'

import state from './state/state.index'
import getters from './getters/getter.index'
import mutations from './mutations/mutation.index'
import actions from './actions/action.index'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  strict: process.env.NODE_ENV !== 'production' // 严格模式会深度监测状态树来检测不合规的状态变更,在发布环境下关闭严格模式，以避免性能损失
})
