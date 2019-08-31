/* eslint-disable eqeqeq */
import * as fb from 'firebase'

export default {
  state: {
    films: []
  },

  mutations: {
    createdFilm (state, payload) {
      state.films.push(payload)
    },
    updatedFilm (state, payload) {
      const film = state.films.find(f => {
        return f.id === payload.id
      })
      film.id = payload.id
      film.title = payload.title
      film.description = payload.description
    }
  },

  actions: {
    async createdFilm ({ commit, getters }, payload) {
      payload.ownerId = getters.user
      payload.created = new Date().toLocaleString()
      try {
        const newFilm = await fb.database().ref('films').push(payload)
        if (payload.posterImg) {
          var imageExt = payload.posterImg.name.slice(payload.posterImg.name.lastIndexOf('.'))
          var fileData = await fb.storage().ref(`films/${newFilm.key}${imageExt}`).put(payload.posterImg)
          var downloadURL = await fileData.ref.getDownloadURL()
          await fb.database().ref('films').child(newFilm.key).update({
            poster: downloadURL
          })
        }
        const film = {
          ...payload,
          id: newFilm.key
        }
        if (payload.posterImg) {
          film.poster = downloadURL
          delete film.posterImg
        }
        commit('createdFilm', film)
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
    },
    async updateFilm ({ commit }, payload) {
      try {
        await fb.database().ref('films').child(payload.id).update({
          title: payload.title,
          poster: payload.poster,
          type: payload.type,
          description: payload.description
        })
        commit('updatedFilm', {
          id: payload.id,
          title: payload.title,
          poster: payload.poster,
          type: payload.type,
          description: payload.description
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
    },
    isUserOwner (state) {
      return (filmId, ownerId) => {
        const film = state.films.find(film => film.id == filmId)
        return film.ownerId === ownerId
      }
    }
  }
}
