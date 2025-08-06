<template>
  <main class="max-w-md mx-auto mt-10">
    <RegisterForm />
  </main>

  <!-- amo ini an kanan pop up notif pag nag submit msg -->
  <Toast />
</template>

<script setup>
import RegisterForm from '@/components/Auth/RegisterForm.vue'
import { useToast } from 'primevue/usetoast'

const toast = useToast()
</script>
