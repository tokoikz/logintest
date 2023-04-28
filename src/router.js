import { createRouter, createWebHistory } from 'vue-router'
// import Home from './components/HomeView.vue'
// import About from './components/AboutView.vue'
// import Top from './components/TopView.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Top
  // },
  // {
  //   path: '/history',
  //   name: 'About',
  //   component: About
  // },
  // {
  //   path: '/top',
  //   name: 'Top',
  //   component: Top
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router