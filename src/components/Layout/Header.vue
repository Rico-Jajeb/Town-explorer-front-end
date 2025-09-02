<script setup>
import { useAuthState } from '@/stores/auth/useAuthState'
import { RouterLink, RouterView } from 'vue-router'
const { authenticated, user } = useAuthState()
</script>
<template>
  <nav class="flex justify-between pb-5 mt-10">
    <section>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/addData">Add</RouterLink>
    </section>
    <section class="flex">
      <div v-if="authenticated" class="pr-6">
        Hello <span class="text-red-500">{{ user.name }}</span>
      </div>
      <div v-else class="pr-6">guest2</div>
      <div v-if="authenticated" class="">
        <RouterLink to="/logout2">Logout</RouterLink>
        <RouterLink to="/welcome">welcome user</RouterLink>
      </div>
      <div v-else class="">
        <RouterLink to="/login" class="!px-4">Login</RouterLink>
        <RouterLink to="/register" class="!px-4">Register</RouterLink>
      </div>
    </section>
  </nav>
</template>
