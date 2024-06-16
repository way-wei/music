import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SpotifyView from '../views/SpotifyView.vue'
import Rank from '../components/Rank.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/rank',
    name:'rank',
    component: Rank
  },
  {
    path:'/spotify',
    name:'spotify',
    component: SpotifyView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
