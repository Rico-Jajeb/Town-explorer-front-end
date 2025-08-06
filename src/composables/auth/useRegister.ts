import { reactive } from 'vue'
import axios from 'axios'
import type { AxiosInstance } from 'axios'
import Cookies from 'js-cookie'
import { useToast } from 'primevue/usetoast'

interface RegisterForm {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export function useRegister() {
  const toast = useToast()
  const form = reactive<RegisterForm>({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const api: AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    headers: {
      'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN') || '',
    },
  })

  const register = async (): Promise<void> => {
    try {
      await api.get('/sanctum/csrf-cookie')
      const res = await api.post('/api/v1/registerUser2', form)
      toast.add({
        severity: 'success',
        summary: 'Success message',
        detail: 'Register Successfully!',
        life: 10000,
      })
    } catch (e) {
      console.error(e)
      toast.add({
        severity: 'error',
        summary: 'Error message',
        detail: 'Register Failed!',
        life: 10000,
      })
    }
  }

  return {
    form,
    register,
  }
}
