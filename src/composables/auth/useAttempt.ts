import axios from 'axios'
import { useAuthState } from '@/composables/auth/useAuthState'

export function useAttempt() {
  const { setAuthenticated, setUser } = useAuthState()

  const attempt = async () => {
    try {
      const response = await axios.get('/api/user')
      setAuthenticated(true)
      setUser(response.data)
    } catch {
      setAuthenticated(false)
      setUser({})
    }
  }

  return { attempt }
}
