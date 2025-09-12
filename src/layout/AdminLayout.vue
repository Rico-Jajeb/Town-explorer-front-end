<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useToast } from 'primevue/usetoast'

import Sidebar from '@/components/AdminPage/Layout/Sidebar.vue'
import Header from '@/components/AdminPage/Layout/Header.vue'

const toast = useToast()
</script>
<template>
  <main class="bg-red-300 flex fle-row">
    <aside class="basis-1/6 bg-blue-100">
      <Sidebar />
    </aside>
    <section class="basis-5/6 bg-amber-300">
      <Header />
      <RouterView />
    </section>
  </main>

  <Toast />
</template>
