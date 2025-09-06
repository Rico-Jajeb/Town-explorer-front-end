import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'
import axios from 'axios'

import { useAttempt } from '@/stores/auth/useAttempt'
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL
axios.defaults.withCredentials = true
axios.defaults.withXSRFToken = true

const { attempt } = useAttempt()

// Configure NProgress (global defaults)
NProgress.configure({
  showSpinner: false,
  speed: 400,
  minimum: 0.2,
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

const pinia = createPinia()
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

app.use(ToastService) // ✅ enable toast notifications
app.component('Toast', Toast) // ✅ globally register <Toast />

app.use(pinia) //kanan pinia ini

attempt().then(() => {
  app.mount('#app')
})
