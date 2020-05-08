
const state = {
  title: 'vuex',
  page: 1,
  list: []
}

const mutations = {
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
}

const actions = {
  getAxios({ commit }) {
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
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}