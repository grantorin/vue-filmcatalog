import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as fb from 'firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created () {
    const firebaseConfig = {
      apiKey: 'AIzaSyDoGPGH_70NjAisL0o_meuDfy_nZlS1ToI',
      authDomain: 'films-catalog.firebaseapp.com',
      databaseURL: 'https://films-catalog.firebaseio.com',
      projectId: 'films-catalog',
      storageBucket: '',
      messagingSenderId: '910633191616',
      appId: '1:910633191616:web:7212ae41c5beee9f'
    }

    fb.initializeApp(firebaseConfig)

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  },
  render: h => h(App)
}).$mount('#app')
