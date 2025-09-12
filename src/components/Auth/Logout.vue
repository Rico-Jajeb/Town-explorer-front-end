<script setup>
import { ref, reactive } from 'vue'
import { useLogout } from '@/stores/auth/useLogout'

const { logout } = useLogout()
const loading = ref(false)

const handleLogout = async () => {
  if (loading.value) return
  loading.value = true
  try {
    await logout()
  } finally {
    loading.value = false
  }
}
</script>
<template>
  <button
    @click="handleLogout"
    type="button"
    class="px-4 py-2 text-red-700 rounded cursor-pointer"
    :disabled="loading"
  >
    {{ loading ? 'Logging out...' : 'Logout' }}
  </button>
</template>
