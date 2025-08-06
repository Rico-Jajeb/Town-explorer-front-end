<template>
  <div class="max-w-md mx-auto mt-10">
    <form @submit.prevent="register">
      <input v-model="form.name" placeholder="Name" class="border w-full p-2 mb-2" />
      <input v-model="form.email" placeholder="Email" type="email" class="border w-full p-2 mb-2" />
      <input
        v-model="form.password"
        placeholder="Password"
        type="password"
        class="border w-full p-2 mb-2"
      />
      <input
        v-model="form.password_confirmation"
        placeholder="Confirm Password"
        type="password"
        class="border w-full p-2 mb-4"
      />
      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Register</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import axios from 'axios'
import Cookies from 'js-cookie'

// ✅ Axios instance configured inside the same file
const api = axios.create({
  baseURL: 'http://192.168.254.169:8000',
  withCredentials: true, // 🔑 needed for Sanctum session cookies
  headers: {
    'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
  },
})

const form = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
})

const register = async () => {
  try {
    // Step 1: Get CSRF cookie
    await api.get('/sanctum/csrf-cookie')

    // Step 2: Send registration data
    const res = await api.post('/api/v1/registerUser2', form)

    alert(res.data.message)
  } catch (e) {
    console.error(e)
    alert('Registration failed')
  }
}
</script>
