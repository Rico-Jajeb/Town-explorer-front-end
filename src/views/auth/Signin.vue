<script setup>
import { useAuthState } from '@/stores/auth/useAuthState'
import { useLogin } from '@/stores/auth/useLogin'
import { reactive } from 'vue'

const { authenticated, user } = useAuthState()
const { login } = useLogin()

const form = reactive({
  email: '',
  password: '',
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md bg-white p-6 rounded shadow">
      <div v-if="authenticated">Hello {{ user.name }}!</div>
      <h2 class="text-2xl font-bold mb-4 text-center">Login</h2>

      <form v-on:submit.prevent="login(form)">
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

        <!-- <div v-if="errorMessage" class="text-red-500 text-sm mb-4">
          {{ errorMessage }}
        </div>

        <div v-if="successMessage" class="text-green-500 text-sm mb-4">
          {{ successMessage }}
        </div> -->
        <br />
        <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  </div>
</template>
