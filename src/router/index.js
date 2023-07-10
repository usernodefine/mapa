import Vue from 'vue'
import VueRouter from 'vue-router'
import CoordinateForm from '../components/CoordinateForm.vue'
import CoordinateList from '../components/CoordinateList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: CoordinateForm
  },
  {
    path: '/list',
    component: CoordinateList
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
