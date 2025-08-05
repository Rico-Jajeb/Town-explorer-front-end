import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/UserPage/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      // gamita ini kay para diri dayon mag load an about vue,
      //  bali ada la hiya magana page ig vvisit na an about vue
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/AddData',
      name: 'add',
      component: () => import('@/components/AdminPage/InsertPageData.vue'),
    },
  ],
})

export default router
