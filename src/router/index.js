import Vue from 'vue'
import VueRouter from 'vue-router'
import Tickets from '../views/Tickets.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Tickets',
    component: Tickets
  }
]

const router = new VueRouter({
  routes
})

export default router
