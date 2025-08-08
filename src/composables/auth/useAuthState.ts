// useAuthState.ts
import { reactive, computed } from 'vue'

interface User {
  id?: number
  name?: string
  email?: string
  [key: string]: any
}

const state = reactive({
  authenticated: false,
  user: {} as User,
})

export function useAuthState() {
  const authenticated = computed(() => state.authenticated)
  const user = computed(() => state.user)

  const setAuthenticated = (value: boolean) => {
    state.authenticated = value
  }

  const setUser = (value: User) => {
    state.user = value
  }

  return { authenticated, user, setAuthenticated, setUser }
}
