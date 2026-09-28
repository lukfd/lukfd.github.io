import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/blog',
    name: 'BlogList',
    component: () => import('@/components/Blog/BlogList.vue')
  },
  {
    path: '/blog/:slug',
    name: 'BlogPost',
    component: () => import('@/components/Blog/BlogPost.vue'),
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
