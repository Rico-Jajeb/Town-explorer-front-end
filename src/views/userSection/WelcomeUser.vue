<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="bg-white p-6 rounded shadow w-full max-w-md">
      <h1 class="text-2xl font-bold mb-4 text-center">Welcome Page</h1>

      <div v-if="user">
        <p class="text-lg"><strong>Name:</strong> {{ user.name }}</p>
        <p class="text-lg"><strong>Email:</strong> {{ user.email }}</p>
      </div>

      <div v-else>
        <p class="text-gray-500">Loading user info...</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

interface User {
  id: number
  name: string
  email: string
  created_at: string
}

const user = ref<User | null>(null)

const fetchUser = async () => {
  try {
    const token = localStorage.getItem('token')
    if (!token) {
      console.warn('No token found')
      return
    }

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/user`)
    user.value = response.data
  } catch (error) {
    console.error('❌ Failed to fetch user:', error)
  }
}

onMounted(() => {
  fetchUser()
})
</script>

<style scoped>
/* Optional styling – Tailwind handles most of it */
</style>
