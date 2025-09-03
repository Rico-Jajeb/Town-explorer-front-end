<script setup>
import { ref, reactive } from 'vue'
import { useAuthState } from '@/stores/auth/useAuthState'
import { useLogin } from '@/stores/auth/useLogin'

const { authenticated, user } = useAuthState()
const { login } = useLogin()
const loading = ref(false)
const form = reactive({
  email: '',
  password: '',
})

const handleLogin = async () => {
  if (loading.value) return
  loading.value = true
  try {
    await login(form)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md bg-white p-6 rounded shadow">
      <div v-if="authenticated">Hello {{ user.name }}!</div>
      <h2 class="text-2xl font-bold mb-4 text-center">Login</h2>

      <!-- ✅ call handleLogin instead of login(form) -->
      <form @submit.prevent="handleLogin">
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

        <br />
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          :disabled="loading"
        >
          {{ loading ? 'Logging in...' : 'Login' }}
        </button>
      </form>
    </div>
  </div>
</template>
