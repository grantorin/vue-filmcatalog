/* eslint-disable eqeqeq */
import * as fb from 'firebase'

export default {
  state: {
    films: []
  },
  mutations: {
    createdFilm (state, payload) {
      state.films.push(payload)
    }
  },
  actions: {
    async createdFilm ({ commit, getters }, payload) {
      payload.ownerId = getters.user
      payload.created = new Date().toLocaleString()
      try {
        const newFilm = await fb.database().ref('films').push(payload)
        commit('createdFilm', {
          ...payload,
          id: newFilm.key
        })
      } catch (error) {
        throw error
      }
    },

    async fetchFilms ({ commit }) {
      try {
        const fbVal = await fb.database().ref('films').once('value')
        const response = fbVal.val()
        Object.keys(response).forEach(key => {
          commit('createdFilm', {
            id: key,
            ...response[key]
          })
        })
      } catch (error) {
        throw error
      }
    }
  },

  getters: {
    films (state) {
      return state.films
    },
    film (state) {
      return filmId => {
        return state.films.find(film => film.id == filmId)
      }
    }
  }
}
