// src/composables/useSystemInfo.ts
import { ref, onMounted } from 'vue'
import axios from 'axios'

interface SystemInfo {
  system_name: string
  system_slogan1: string
  system_slogan2: string
  facebook_link: string
  email_link: string
  number: string
  system_logo: string
  background_img: string
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export function useSystemInfo() {
  const systemInfo = ref<SystemInfo | null>(null)
  const isLoading = ref(false)
  const error = ref<Error | null>(null)

  const fetchSystemInfo = async () => {
    isLoading.value = true
    try {
      const response = await axios.get(`${API_BASE_URL}/system-info`)
      systemInfo.value = response.data
    } catch (err) {
      error.value = err as Error
    } finally {
      isLoading.value = false
    }
  }

  onMounted(fetchSystemInfo)

  return { systemInfo, isLoading, error }
}
