<template>
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
</template>

<script setup>
import { useToast } from 'primevue/usetoast'
const toast = useToast()
import { useRegister } from '@/composables/auth/useRegister'
const { form, register } = useRegister()
</script>
