<script setup>
import { useAuthState } from '@/stores/auth/useAuthState'
import { RouterLink, RouterView } from 'vue-router'
const { authenticated, user } = useAuthState()
import Logout from '@/components/Auth/Logout.vue'
</script>
<template>
  <nav class="flex justify-between pb-5 mt-10">
    <section>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/addData">Add</RouterLink>
    </section>
    <section class="flex">
      <div v-if="authenticated" class="">
        <RouterLink to="/"> {{ user.name }}</RouterLink>
        <Logout />
      </div>

      <div v-else class="flex">
        <h1 class="pt-1 px-3">guest</h1>
        <RouterLink to="/login" class="!px-3">Login</RouterLink>
        <RouterLink to="/register" class="!px-3">Register</RouterLink>
      </div>
    </section>
  </nav>
</template>
