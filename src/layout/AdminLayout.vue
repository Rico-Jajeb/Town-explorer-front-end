<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useToast } from 'primevue/usetoast'

import Sidebar from '@/components/AdminPage/Layout/Sidebar.vue'
import Header from '@/components/AdminPage/Layout/Header.vue'

const toast = useToast()

const hid = ref(false)

const hamburg = {
  show() {
    hid.value = true
  },
  hide() {
    hid.value = false
  },
  toggle() {
    hid.value = !hid.value
  },
}
</script>
<template>
  <main class="bg-red-300 flex fle-row relative">
    <aside class="basis-1/8 bg-blue-100" :class="{ hidden: hid }">
      <Sidebar />
    </aside>
    <section class="basis-full bg-amber-300 min-h-screen">
      <button type="button" @click="hamburg.toggle" class="p-4 bg-red-600 text-white rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <Header />
      <RouterView />
    </section>
  </main>

  <Toast />
</template>
