import Vue from 'vue'
import Vuex from 'vuex'
import films from './films'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    films,
    user
  }
})
