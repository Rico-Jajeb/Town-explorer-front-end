<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useToast } from 'primevue/usetoast'
import Header1 from '@/components/Layout/Header.vue'
import Footer2 from '@/components/Layout/Footer.vue'
const toast = useToast()
</script>
<template>
  <main>
    <!-- <Header1 /> -->
    <h1>THis is the Dashboard Layout</h1>
    <section>
      <RouterView />
    </section>
    <!-- <Footer2 /> -->
  </main>
  <Toast />
</template>
