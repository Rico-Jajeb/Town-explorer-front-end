<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/addData">Add</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
    <RouterLink to="/register">Sign Up</RouterLink>
  </nav>
</template>
