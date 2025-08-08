import axios from 'axios'
import Cookies from 'js-cookie'
import { useRouter } from 'vue-router'

export function useLogout() {
  const router = useRouter()

  const logout = async () => {
    try {
      await axios.post(
        'http://192.168.254.169:8000/api/logout',
        {},
        {
          withCredentials: true,
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'), // Required
          },
        },
      )

      alert('✅ Logged out successfully')

      // ⚠️ Optionally clear browser cookies if needed:
      Cookies.remove('XSRF-TOKEN')
      Cookies.remove('laravel_session')

      router.push('/login')
    } catch (error) {
      console.error('❌ Logout failed:', error)
      alert('Failed to logout.')
    }
  }

  return {
    logout,
  }
}
