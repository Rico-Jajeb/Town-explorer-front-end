<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md bg-white p-6 rounded shadow">
      <h2 class="text-2xl font-bold mb-4 text-center">Login</h2>

      <form @submit.prevent="login">
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1" for="email">Email</label>
          <input
            v-model="form.email"
            type="email"
            id="email"
            class="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium mb-1" for="password">Password</label>
          <input
            v-model="form.password"
            type="password"
            id="password"
            class="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div v-if="errorMessage" class="text-red-500 text-sm mb-4">
          {{ errorMessage }}
        </div>

        <div v-if="successMessage" class="text-green-500 text-sm mb-4">
          {{ successMessage }}
        </div>
        <br />
        <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import axios from 'axios'

interface LoginForm {
  email: string
  password: string
}

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
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      errorMessage.value = '❌ Invalid email or password.'
    } else {
      errorMessage.value = '❌ Something went wrong. Please try again.'
    }
  }
}
</script>

<style scoped>
/* Optional: Tailwind CSS already handles the styling */
</style>
