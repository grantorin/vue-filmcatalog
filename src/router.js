import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Registration from '@/views/auth/Registration'
import Authorization from '@/views/auth/Authorization'
import NewFilm from '@/views/NewFilm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/reg',
      name: 'registration',
      component: Registration
    },
    {
      path: '/auth',
      name: 'authorization',
      component: Authorization
    },
    {
      path: '/new',
      name: 'newfilm',
      component: NewFilm
    }
  ]
})
