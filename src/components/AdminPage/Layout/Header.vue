<script setup>
import Logout from '@/components/Auth/Logout.vue'
import { useAuthState } from '@/stores/auth/useAuthState'

const { authenticated, user } = useAuthState()
</script>

<template>
  <main class="flex">
    <div v-if="authenticated">
      <h1>{{ user.name }}</h1>
    </div>

    <Logout />
  </main>
</template>
