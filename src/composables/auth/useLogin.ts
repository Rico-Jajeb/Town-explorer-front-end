import { reactive, ref } from 'vue'
import axios from 'axios'
import { useToast } from 'primevue/usetoast'
import { useRouter } from 'vue-router'

interface LoginForm {
  email: string
  password: string
}

export function useLogin() {
  const toast = useToast()
  const router = useRouter()
  const form = reactive<LoginForm>({
    email: '',
    password: '',
  })

  const errorMessage = ref<string | null>(null)
  const successMessage = ref<string | null>(null)

  const login = async () => {
    errorMessage.value = null
    successMessage.value = null

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/login`, form)
      const token = response.data.token

      localStorage.setItem('token', token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

      successMessage.value = '✅ Login successful!'
      toast.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Login successful!',
        life: 3000,
      })

      setTimeout(() => {
        router.push('/Dashboard')
      }, 2000)
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        errorMessage.value = '❌ Invalid email or password.'
      } else {
        errorMessage.value = '❌ Something went wrong. Please try again.'
      }
    }
  }

  return {
    form,
    errorMessage,
    successMessage,
    login,
  }
}
