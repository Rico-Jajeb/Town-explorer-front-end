<script setup>
import { useAuthState } from '@/composables/auth/useAuthState'
import { RouterLink, RouterView } from 'vue-router'
const { authenticated, user } = useAuthState()
</script>
<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/addData">Add</RouterLink>

    <div v-if="authenticated" class="">
      <RouterLink to="/logout2">Logout</RouterLink>
      <RouterLink to="/welcome">welcome user</RouterLink>
    </div>
    <div v-else class="">
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/register">Sign Up</RouterLink>
    </div>

    <div v-if="authenticated">Hello {{ user.name }}!</div>
    <div v-else class="">guest2</div>
  </nav>
</template>
