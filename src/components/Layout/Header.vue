<script setup>
import { useAuthState } from '@/stores/auth/useAuthState'
import { useLogout } from '@/stores/auth/useLogout'
import { RouterLink, RouterView } from 'vue-router'

const { logout } = useLogout()
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
      <div v-if="authenticated" class="">
        <RouterLink to="/"> {{ user.name }}</RouterLink>
        <button @click="logout" type="button" class="px-4 py-2 text-red-700 rounded cursor-pointer">
          Logout
        </button>
      </div>

      <div v-else class="flex">
        <h1 class="pt-1 px-3">guest</h1>
        <RouterLink to="/login" class="!px-3">Login</RouterLink>
        <RouterLink to="/register" class="!px-3">Register</RouterLink>
      </div>
    </section>
  </nav>
</template>
