import axios from 'axios'
import { useAuthState } from '@/stores/auth/useAuthState'

/**
 * Composable: useAttempt
 *
 * Attempts to fetch the currently authenticated user from the backend.
 * Updates authentication state and user info in the global store.
 *
 * @returns {Object} attempt - Function that triggers the fetch attempt.
 */

export function useAttempt() {
  const { setAuthenticated, setUser } = useAuthState()

  /**
   * Try to fetch the authenticated user from `/api/user`.
   * If successful, sets `authenticated` to true and updates user info.
   * If failed (e.g., not logged in or expired session), resets user state.
   */

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
