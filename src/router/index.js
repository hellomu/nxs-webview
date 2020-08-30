import Vue from 'vue'
import VueRouter from 'vue-router'
import Tickets from '../views/Tickets/index.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/coupon/',
      redirect: '/coupon/Tickets'
    },
  {
    path: '/coupon/Tickets',
    name: 'Tickets',
    component: Tickets
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
