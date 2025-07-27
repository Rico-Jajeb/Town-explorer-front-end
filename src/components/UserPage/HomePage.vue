<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

interface SystemInfo {
  system_name: string
  system_slogan1: string
  system_slogan2: string
  facebook_link: string
  email_link: string
  number: string
  system_logo: string
  background_img: string
}

const systemInfo = ref<SystemInfo | null>(null) // ✅ Declare it here

onMounted(async () => {
  try {
    const response = await axios.get('http://192.168.254.169:8000/api/v1/system-info')
    systemInfo.value = response.data
  } catch (error) {
    console.error('Failed to load system info:', error)
  }
})
</script>

<template>
  <h1 class="bg-red-700 text-white">Test2 46</h1>
  <div class="bg-black" v-if="systemInfo">
    <h1 class="bg-black">{{ systemInfo.system_name }}</h1>
    <p>{{ systemInfo.system_slogan1 }}</p>
    <p>{{ systemInfo.system_slogan2 }}</p>
    <p>{{ systemInfo.facebook_link }}</p>
    <p>{{ systemInfo.email_link }}</p>
    <!-- Add more fields if needed -->
  </div>
</template>

<style></style>
