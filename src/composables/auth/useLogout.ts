import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthState } from '@/composables/auth/useAuthState'

import { useToast } from 'primevue/usetoast'

export function useLogout() {
  const router = useRouter()
  const toast = useToast()
  const { setAuthenticated, setUser } = useAuthState()
  const isLoggingOut = ref(false)

  const logout = async () => {
    await axios.get('/sanctum/csrf-cookie')
    try {
      await axios.post('/logout')
      toast.add({
        severity: 'success',
        summary: 'Logout message',
        detail: 'Logout Successfully!',
        life: 10000,
      })
      router.push('/Home')
    } finally {
      setAuthenticated(false)
      setUser({})
      isLoggingOut.value = false
    }
  }

  return { logout }
}
