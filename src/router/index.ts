import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/userSection/HomePage.vue'

import { useAuthState } from '@/stores/auth/useAuthState'
import { useAttempt } from '@/stores/auth/useAttempt'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/Home',
      name: 'Home',
      // gamita ini kay para diri dayon mag load an about vue,
      //  bali ada la hiya magana page ig vvisit na an about vue
      component: () => import('@/views/userSection/HomePage.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // gamita ini kay para diri dayon mag load an about vue,
      //  bali ada la hiya magana page ig vvisit na an about vue
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/register',
      name: 'Sign Up',
      component: () => import('@/views/auth/Register.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/auth/Signin.vue'),
    },
    {
      path: '/AddData',
      name: 'add',
      component: () => import('@/components/AdminPage/InsertPageData.vue'),
    },
    {
      path: '/logout2',
      name: 'Logout',
      component: () => import('@/views/auth/Logout.vue'),
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: () => import('@/views/userSection/WelcomeUser.vue'),
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: () => import('@/views/userSection/WelcomeUser.vue'),
    },
    //--------------------------[ Admin Section ]--------------------------\\
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/adminSection/Dashboard.vue'),
      meta: { requiresAuth: true },
    },

    {
      path: '/setting',
      name: 'systemSettings',
      component: () => import('@/views/adminSection/Settings/SystemSettings.vue'),
      meta: { requiresAuth: true },
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  const auth = useAuthState()
  const { attempt } = useAttempt()

  // Ensure state is synced with backend before checking
  if (!auth.authenticated.value) {
    await attempt()
  }

  if (to.meta.requiresAuth && !auth.authenticated.value) {
    next('/login')
  } else {
    next()
  }
})

export default router
