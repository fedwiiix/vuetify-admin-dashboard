import Vue from 'vue'
import Vuex from 'vuex'
import appData from './appData'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    appData,
  }
})
