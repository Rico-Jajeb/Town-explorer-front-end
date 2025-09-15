<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'

import ResortsForm from '@/components/AdminPage/Form/Resorts/ResortsForm.vue'

const visible = ref(false)
</script>
<template>
  <h1>This is Resorts</h1>

  <Button label="Show" @click="visible = true" />
  <Dialog
    v-model:visible="visible"
    modal
    header="Resorts Information Form"
    :style="{ width: '55rem' }"
  >
    <ResortsForm />
  </Dialog>
</template>
