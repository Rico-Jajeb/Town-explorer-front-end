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
    <RouterLink to="/login">Login</RouterLink>
    <RouterLink to="/register">Sign Up</RouterLink>
    <RouterLink to="/logout2">Logout</RouterLink>
    <RouterLink to="/welcome">welcome user</RouterLink>
    <div v-if="authenticated">Hello {{ user.name }}!</div>
    <div v-else class="">guest</div>
  </nav>
</template>
