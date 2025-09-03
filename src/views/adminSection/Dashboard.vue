<script setup>
import { useAuthState } from '@/stores/auth/useAuthState'

const { authenticated, user } = useAuthState()
</script>

<template>
  <h1>This is Dashboard</h1>
  <div v-if="authenticated">
    <h1>{{ user.name }}</h1>
  </div>
</template>
