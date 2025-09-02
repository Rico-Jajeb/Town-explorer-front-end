import axios, { AxiosError } from 'axios'
import { useRouter } from 'vue-router'
import { useAuthState } from '@/stores/auth/useAuthState'
import { useAttempt } from '@/stores/auth/useAttempt'
import { useToast } from 'primevue/usetoast'

export function useLogin() {
  const router = useRouter()
  const toast = useToast()
  const { setAuthenticated, setUser, authenticated } = useAuthState()
  const { attempt } = useAttempt()

  const login = async (credentials: { email: string; password: string }) => {
    await axios.get('/sanctum/csrf-cookie')

    try {
      await axios.post('/login', credentials)
      toast.add({
        severity: 'success',
        summary: 'Login message',
        detail: 'Login Successfully!',
        life: 10000,
      })
      router.push('/dashboard')
      return attempt()
    } catch (err) {
      const error = err as AxiosError<{ errors?: Record<string, string[]> }>
      return Promise.reject(error.response?.data?.errors || error.message)
    }
  }

  return { login }
}
