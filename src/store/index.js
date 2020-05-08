import Vue from 'vue'
import Vuex from 'vuex'
import about from './modules/about'
import scroll from './modules/scroll'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    about,
    scroll
  },
})
