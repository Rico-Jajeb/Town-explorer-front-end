<script setup lang="ts">
import ProgressSpinner from 'primevue/progressspinner'
import { useSystemInfo } from '@/composables/Settings/useSystemInfo'

import { useToast } from 'primevue/usetoast'

const { systemInfo, isLoading, error } = useSystemInfo()
const toast = useToast()
</script>

<template>
  <main class="w-full mb-96">
    <div v-if="isLoading">
      <ProgressSpinner
        style="width: 50px; height: 50px"
        strokeWidth="4"
        fill="transparent"
        animationDuration="1s"
        aria-label="Custom ProgressSpinner"
      />
    </div>

    <div v-else-if="error" class="text-red-700">{{ error.message }}</div>
    <div v-else>
      <h1>{{ systemInfo?.system_name }}</h1>
      <p>{{ systemInfo?.system_slogan1 }}</p>
      <p>{{ systemInfo?.system_slogan2 }}</p>
    </div>
  </main>
</template>

<style></style>
