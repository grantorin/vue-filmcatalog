import * as fb from 'firebase'

export default {
  state: {
    user: null
  },

  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },

  actions: {
    async registerUser ({ commit }, { email, password }) {
      try {
        const resp = await fb.auth().createUserWithEmailAndPassword(email, password)
        commit('setUser', resp.user.uid)
      } catch (error) {
        throw error
      }
    },
    async loginUser ({ commit }, { email, password }) {
      try {
        const resp = await fb.auth().signInWithEmailAndPassword(email, password)
        commit('setUser', resp.user.uid)
      } catch (error) {
        throw error
      }
    }
  },

  getters: {
    user (state) {
      return state.user
    }
  }
}
