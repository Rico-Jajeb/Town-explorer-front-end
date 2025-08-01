<script setup lang="ts">
import { useSystemInfo } from '@/composables/useSystemInfo'
const { systemInfo, isLoading, error } = useSystemInfo()
</script>

<template>
  <h1 class="bg-red-700 text-white">Test2 46</h1>

  <div v-if="isLoading">Loading...</div>
  <div v-else-if="error">Failed to load: {{ error.message }}</div>
  <div v-else>
    <h1>{{ systemInfo?.system_name }}</h1>
    <p>{{ systemInfo?.system_slogan1 }}</p>
  </div>
</template>

<style></style>
