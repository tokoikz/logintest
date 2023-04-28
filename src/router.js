import { createRouter, createWebHistory } from 'vue-router'
// import Home from './components/HomeView.vue'
// import About from './components/AboutView.vue'
import Login from './views/LoginComp.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
//   {
//     path: '/history',
//     name: 'About',
//     component: LoginCallBack
//   }
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