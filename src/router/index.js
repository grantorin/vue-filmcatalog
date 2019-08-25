import Vue from 'vue'
import Router from 'vue-router'
import AuthProtect from '@/router/auth-protect'
import Home from '@/views/Home'
import Registration from '@/views/auth/Registration'
import Authorization from '@/views/auth/Authorization'
import NewFilm from '@/views/NewFilm'
import Film from '@/views/Film'

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
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
      path: '/reg',
      name: 'registration',
      component: Registration
    },
    {
      path: '/auth',
      component: Authorization,
      name: 'authorization'
    },
    {
      path: '/new',
      name: 'newfilm',
      component: NewFilm,
      beforeEnter: AuthProtect
    },
    {
      path: '/post/:id',
      name: 'film',
      component: Film
    }
  ]
})
