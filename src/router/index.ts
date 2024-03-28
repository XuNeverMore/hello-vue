import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WelcomePage from '../views/WelcomePage.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: WelcomePage
  },
  {
    path: '/markdonw_convert',
    name: 'MarkdownConvert',
    component: () => import('../views/MarkdownConvert.vue')
  },
  { path: '/data_tool', name: 'DataTool', component: () => import('../views/DataTool.vue') },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/word_cloud',
    name: 'WordCloud',
    component: () => import('../views/WordCloud.vue')
  },
  {
    path: '/save_image',
    name: 'SaveImage',
    component: () => import('../views/SaveImage.vue')
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
export { routes }
