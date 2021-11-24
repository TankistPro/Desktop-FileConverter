import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home/Home.vue'
import Downloads from "@/views/Downloads/Downloads"
import Settings from "@/views/Settings/Settings";

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Home
  },
  {
    path: '/settings',
    name: 'SettingsPage',
    component: Settings
  },
  {
    path: '/downloads',
    name: 'DownloadsPage',
    component: Downloads
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
