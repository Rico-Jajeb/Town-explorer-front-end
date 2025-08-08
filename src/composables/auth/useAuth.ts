import { computed, reactive } from 'vue'
import axios, { AxiosError } from 'axios'

interface User {
  id?: number
  name?: string
  email?: string
  [key: string]: any
}

interface Credentials {
  email: string
  password: string
}

interface State {
  authenticated: boolean
  user: User
}

const state = reactive<State>({
  authenticated: false,
  user: {},
})

export default function useAuth() {
  const authenticated = computed<boolean>(() => state.authenticated)
  const user = computed<User>(() => state.user)

  const setAuthenticated = (authenticated: boolean): void => {
    state.authenticated = authenticated
  }

  const setUser = (user: User): void => {
    state.user = user
  }

  const login = async (credentials: Credentials): Promise<void> => {
    await axios.get('/sanctum/csrf-cookie')

    try {
      await axios.post('/login', credentials)
      return attempt()
    } catch (err) {
      const error = err as AxiosError<{ errors?: Record<string, string[]> }>
      return Promise.reject(error.response?.data?.errors || error.message)
    }
  }

  const attempt = async (): Promise<void> => {
    try {
      const response = await axios.get<User>('/api/user')

      setAuthenticated(true)
      setUser(response.data)
    } catch (err) {
      setAuthenticated(false)
      setUser({})
    }
  }

  return {
    authenticated,
    user,
    login,
    attempt,
  }
}
