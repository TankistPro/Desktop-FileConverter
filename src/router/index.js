import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home/Home.vue'
import Downloads from "@/views/Downloads/Downloads"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/downloads',
    name: 'Downloads',
    component: Downloads
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
