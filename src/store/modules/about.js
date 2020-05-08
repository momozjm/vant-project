import { getDetailApi } from '@/api/api'

const state = {
  detail: {}
}

const mutations = {
  setDetail: (state, data) => {
    state = {
      ...state,
      detail: data
    }
  }
}

const actions = {
  getDetail({ commit }) {
    getDetailApi().then(res => {
      commit('setDetail', res)
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
