import Vue from 'vue'
import Vuex from 'vuex'
import some from './modules/some'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    some
  },
})
