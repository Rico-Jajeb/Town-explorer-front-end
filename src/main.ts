import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'
import axios from 'axios'

import { useAttempt } from './composables/auth/useAttempt'
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL
axios.defaults.withCredentials = true
axios.defaults.withXSRFToken = true

const { attempt } = useAttempt()

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
