import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/long'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: login
  },
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/Layout/index.vue')
  }

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
