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

  <Toast />
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useToast } from 'primevue/usetoast'
import { useLogin } from '@/composables/auth/useLogin'
const router = useRouter()
const toast = useToast()
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

const login = async (): Promise<void> => {
  errorMessage.value = null
  successMessage.value = null

  const baseURL = import.meta.env.VITE_API_BASE_URL

  try {
    // Step 1: Get CSRF cookie
    await axios.get(`${baseURL}/sanctum/csrf-cookie`, {
      withCredentials: true,
    })

    // Step 2: Attempt login
    await axios.post(
      `${baseURL}/api/v1/login2`,
      {
        email: form.email,
        password: form.password,
      },
      {
        withCredentials: true,
      },
    )

    // Step 3: Fetch authenticated user
    const response = await axios.get(`${baseURL}/api/user`, {
      withCredentials: true,
    })

    const user = response.data
    console.log('✅ Logged in user:', user)
    successMessage.value = 'Login successful!'
    toast.add({ severity: 'success', summary: 'Success', detail: 'Logged in', life: 3000 })

    // Redirect to welcome/dashboard
    router.push('/welcome')
  } catch (error: any) {
    console.error('Login failed:', error)
    toast.add({
      severity: 'error',
      summary: 'Login Failed',
      detail: error?.response?.data?.message || 'Invalid credentials',
      life: 3000,
    })

    errorMessage.value = 'Login failed. Please check your credentials.'
  }
}

// const toast = useToast()

// const { form, errorMessage, successMessage, login } = useLogin()
</script>
