<script setup lang="ts">
import ProgressSpinner from 'primevue/progressspinner'

import Footer from '@/components/Layout/Footer.vue'

import { useSystemInfo } from '@/composables/useSystemInfo'
const { systemInfo, isLoading, error } = useSystemInfo()
</script>

<template>
  <main class="w-full mb-96">
    <h1 class="bg-red-700 text-white mt-96 px-96">Test2 46</h1>

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
  <footer class="">
    <!-- <Footer /> -->
  </footer>
</template>

<style></style>
