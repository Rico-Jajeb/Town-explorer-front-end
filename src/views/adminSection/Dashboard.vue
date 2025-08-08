<script setup>
import { useLogout } from '@/composables/auth/useLogout'
const { logout } = useLogout()
</script>
<template>
  <h1>This is Dashboard</h1>
  <button @click="logout" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
    Logout
  </button>
</template>
