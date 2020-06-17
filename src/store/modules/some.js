import { getSomeDataApi } from '@/api/some'

const state = {
  someData: ''
}

const mutations = {
  setSomeData: (state, data) => {
    // 为了演示效果我加了个Math.random()
    state.someData = data ? data : Math.random()
  }
}

const actions = {
  async getSomeData({ commit }, parameter) {
    console.log(parameter)
    const response = await getSomeDataApi(parameter)
    commit('setSomeData', response)
  },
  async doSomeCallback({ commit }, { parameter, callback }) {
    console.log(parameter)
    const response = await getSomeDataApi(parameter)
    commit('setSomeData', response)
    if (callback) callback(response)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
