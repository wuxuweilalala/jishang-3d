import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Index = () => import('@/views/index.vue');
const Tot = () => import('@/views/Tot.vue');
const PowerGrid = () => import('@/views/PowerGrid.vue');
const Industry = () => import('@/views/Industry.vue');
const Elastic = () => import('@/views/Elastic.vue');
const Economics = () => import('@/views/Economics.vue');
  const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/Tot',
    name: 'Tot',
    component: Tot
  },
  {
    path: '/PowerGrid',
    name: 'PowerGrid',
    component: PowerGrid
  },
  {
    path: '/Industry',
    name: 'Industry',
    component: Industry
  },
  {
    path: '/Elastic',
    name: 'Elastic',
    component: Elastic
  },
  {
    path: '/Economics',
    name: 'Economics',
    component: Economics
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
