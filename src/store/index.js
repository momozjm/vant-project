import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'This is an about page',
    page: 1,
    list: []
  },
  mutations: {
    changeTitle: (state, data) => {
      console.log(data)
      state.title = data
    },
    getList: (state, data) => {
      console.log(data, 111111111)
      state.list = [...state.list, ...data]
    },
    refreshList: (state, data) => {
      state.list = [...data]
      console.log(state, 3333333)
    },
  },
  actions: {
    getAxios({ commit }) {
      // axiosName为接口名称
      // return axiosName().then(tags => {
      //   commit('changeTitle', 'asdasd')
      //   return Promise.resolve()
      // })
      commit('changeTitle', 'asdasd')
    },
    getList({ commit }) {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      commit('getList', arr)
    },
    refreshList({ commit }) {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      commit('refreshList', arr)
    },
  },
  modules: {
  }
})
