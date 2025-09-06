import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import HomePage from '@/views/userSection/HomePage.vue'
import { useAuthState } from '@/stores/auth/useAuthState'
import { useAttempt } from '@/stores/auth/useAttempt'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('@/views/userSection/HomePage.vue'),
  },
  {
    path: '/about',
    name: 'about',
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
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// ----------------- AUTH GUARD -----------------
router.beforeEach(async (to, from, next) => {
  const auth = useAuthState()
  const { attempt } = useAttempt()

  if (!auth.authenticated.value) {
    await attempt()
  }

  if (to.meta.requiresAuth && !auth.authenticated.value) {
    return next('/login')
  }

  return next()
})

// ----------------- NPROGRESS -----------------
NProgress.configure({
  showSpinner: false,
  speed: 500,
  minimum: 0.3,
})

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start()
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
