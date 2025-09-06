<script setup>
import UpdateSetting from '@/components/AdminPage/Form/UpdateSetting.vue'
import { useToast } from 'primevue/usetoast'

const toast = useToast()
</script>
<template>
  <main class="pb-96">
    <h1>This is the system setting page</h1>

    <section class="flex justify-center">
      <div class="w-96">
        <UpdateSetting />
      </div>
    </section>

    <!-- amo ini an kanan pop up notif pag nag submit msg -->
    <Toast />
  </main>
</template>
