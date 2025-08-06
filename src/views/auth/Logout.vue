<template>
  <div class="p-4">
    <h1 class="text-xl font-bold mb-4">You are logged in</h1>
    <button @click="logout" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
      Logout
    </button>
  </div>
</template>

<script setup>
import axios from 'axios'
import Cookies from 'js-cookie'
import { useRouter } from 'vue-router'

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
</script>
