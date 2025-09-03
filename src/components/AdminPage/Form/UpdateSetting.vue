<script setup lang="ts">
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import FileUpload from 'primevue/fileupload'
import Image from 'primevue/image'
import { useSystemSettings } from '@/composables/Settings/useSystemUpdate'

const { form, srcLogo, errors, onFileSelectLogo, updateSystemInfo } = useSystemSettings()
const loading = ref(false)

const handleUpdate = async () => {
  if (loading.value) return
  loading.value = true
  try {
    await updateSystemInfo()
  } finally {
    loading.value = false
  }
}
</script>
<template>
  <main class="pb-96">
    <form @submit.prevent="handleUpdate" class="space-y-4">
      <section class="py-4">
        <label for="Web Name" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white"
          >System Name</label
        >
        <InputText
          class="!w-full"
          type="text"
          v-model="form.system_name"
          name="category_name"
          placeholder="Insert Category Name, e.g (laravel, django, codeigniter..)"
        />
        <div v-if="errors.system_name" class="text-red-500 text-sm mt-2">
          {{ errors.system_name[0] }}
        </div>
      </section>

      <section class="pb-4">
        <label for="Web Name" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white"
          >Slogan/Tagline</label
        >
        <InputText
          class="!w-full"
          type="text"
          v-model="form.system_slogan1"
          name="system_slogan"
          placeholder="Insert System Slogan..)"
        />
        <div v-if="errors.system_slogan1" class="text-red-500 text-sm mt-2">
          {{ errors.system_slogan1[0] }}
        </div>
      </section>

      <section class="pb-4">
        <label for="Web Name" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white"
          >Slogan/Tagline 2</label
        >
        <InputText
          class="!w-full"
          type="text"
          v-model="form.system_slogan2"
          name="system_slogan2"
          placeholder="Insert System Slogan2..)"
        />
        <div v-if="errors.system_slogan2" class="text-red-500 text-sm mt-2">
          {{ errors.system_slogan2[0] }}
        </div>
      </section>

      <section class="pb-4">
        <label for="Web Name" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white"
          >Email</label
        >
        <InputText
          class="!w-full"
          type="email"
          v-model="form.email_link"
          name="email"
          placeholder="Insert System email..)"
        />
        <div v-if="errors.email_link" class="text-red-500 text-sm mt-2">
          {{ errors.email_link[0] }}
        </div>
      </section>

      <section class="pb-4">
        <label for="Web Name" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white"
          >Phone No.</label
        >
        <InputText
          class="!w-full"
          type="text"
          v-model="form.number"
          name="email"
          placeholder="Insert System number..)"
        />
        <div v-if="errors.number" class="text-red-500 text-sm mt-2">
          {{ errors.number[0] }}
        </div>
      </section>
      <section class="pb-4">
        <label for="Web Name" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white"
          >Facebook Link:</label
        >
        <InputText
          class="!w-full"
          type="text"
          v-model="form.facebook_link"
          name="email"
          placeholder="Insert facebook link..)"
        />
        <div v-if="errors.facebook_link" class="text-red-500 text-sm mt-2">
          {{ errors.facebook_link[0] }}
        </div>
      </section>

      <section class="pb-4">
        <label for="Web Name" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white"
          >System Background</label
        >
        <InputText
          class="!w-full"
          type="text"
          v-model="form.background_img"
          name="email"
          placeholder="Insert system background..)"
        />
        <div v-if="errors.background_img" class="text-red-500 text-sm mt-2">
          {{ errors.background_img[0] }}
        </div>
      </section>

      <div class="xl:basis-1/2 md:basis-1/2">
        <label for="email" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
          >Logo</label
        >
        <div class="block sm:flex">
          <Image
            v-if="srcLogo"
            :src="srcLogo"
            alt="Image"
            preview
            imageClass="shadow-md rounded-xl w-full md:w-40 md:h-40 h-64 "
          />
          <FileUpload
            mode="basic"
            @select="onFileSelectLogo"
            customUpload
            auto
            severity="secondary"
            class="md:mt-0 mt-4 p-button-outlined ml-2 sm:ml-8 md:ml-2"
          />
        </div>
      </div>
      <br />
      <button
        type="submit"
        class="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
        :disabled="loading"
      >
        {{ loading ? 'Updating System info....' : 'System Update' }}
      </button>
    </form>

    <!-- amo ini an kanan pop up notif pag nag submit msg -->
    <Toast />
  </main>
</template>
