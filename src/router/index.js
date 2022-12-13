import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/news/detail/:id',
      name: 'newsDetail',
      component: () => import('../views/NewsDetailsView.vue')
    },
    {
      path: '/product/:brand?/:classfiy?/:id?',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/search/:key?',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    }
    
  ],
  scrollBehavior(to, from, save) {
    if (to.name !== from.name) {
      return {
        x: 0,
        y: 0
      }
    } 
    
    
  }
})

export default router
