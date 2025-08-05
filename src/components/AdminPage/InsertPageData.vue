<script setup lang="ts">
import InputText from 'primevue/inputtext'

import { ref, onMounted } from 'vue'
import axios from 'axios'

import UpdateSetting from '@/components/AdminPage/Form/UpdateSetting.vue'

import { useToast } from 'primevue/usetoast'
const form = ref({
  system_name: '',
  system_slogan1: '',
  system_slogan2: '',
  facebook_link: '',
  email_link: '',
  number: '',
  system_logo: '',
  background_img: '',
})

const message = ref('')

const toast = useToast()

const fetchSystemInfo = async () => {
  try {
    const { data } = await axios.get('http://192.168.254.169:8000/api/v1/system-info')
    form.value = { ...form.value, ...data }
  } catch (err) {
    console.error('Failed to fetch system info:', err)
  }
}

const updateSystemInfo = async () => {
  try {
    await axios.put('http://192.168.254.169:8000/api/v1/system-update', form.value)
    message.value = 'System information updated successfully!'
  } catch (err) {
    console.error('Failed to update:', err)
    message.value = 'Update failed.'
  }
}

onMounted(fetchSystemInfo)
</script>
<template>
  <main class="pb-96">
    <h1>This is the page for inserting data</h1>

    <section class="flex justify-center">
      <div class="w-96">
        <UpdateSetting />
      </div>
    </section>

    <!-- <div class="p-4">
      <form @submit.prevent="updateSystemInfo" class="space-y-4">
        <div v-for="(value, key) in form" :key="key" class="flex flex-col">
          <label :for="key" class="font-semibold capitalize">{{ key.replace('_', ' ') }}</label>
          <input v-model="form[key]" :id="key" type="text" class="border p-2 rounded" />
        </div>

        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Update</button>
      </form>

      <p v-if="message" class="mt-4 text-green-600">{{ message }}</p>
    </div> -->

    <div>
      <!-- amo ini an kanan pop up notif pag nag submit msg -->
      <Toast />
    </div>
  </main>
</template>
