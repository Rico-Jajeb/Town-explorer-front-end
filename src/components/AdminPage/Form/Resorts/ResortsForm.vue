<script setup lang="ts">
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import FileUpload from 'primevue/fileupload'
import Select from 'primevue/select'

import Textarea from 'primevue/textarea'

import Rating from 'primevue/rating'

import Divider from 'primevue/divider'

import Checkbox from 'primevue/checkbox'
import CheckboxGroup from 'primevue/checkboxgroup'

import Image from 'primevue/image'
import { useSystemSettings } from '@/composables/Settings/useSystemUpdate'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const { form, srcLogo, errors, onFileSelectLogo, updateSystemInfo } = useSystemSettings()
const loading = ref(false)

const files = ref([])

const onUpload = (event) => {
  files.value = event.files
  console.log('Uploaded files:', files.value)
}

const selectedCity = ref()
const cities = ref([
  { name: 'Resort', code: 'Resort' },
  { name: 'Restaurant', code: 'Restaurant' },
  { name: 'Hotel', code: 'Hotel' },
  { name: 'Attraction', code: 'Attraction' },
  { name: 'Park', code: 'Park' },
])

//kanan checkbox han amenities
const amenities1 = ref([
  { name: 'Wi-Fi', key: 'Wi-Fi' },
  { name: 'Swimming Pool', key: 'Swimming Pool' },
  { name: 'Bar', key: 'Bar' },
  { name: 'Spa', key: 'Spa' },
  { name: 'Pet Friendly', key: 'Pet Friendly' },
])
const amenities2 = ref([
  { name: 'Parking', key: 'Parking' },
  { name: 'Restaurant', key: 'Restaurant' },
  { name: 'Gym', key: 'Gym' },
  { name: 'Conference Room', key: 'Conference Room' },
  { name: 'Wheelchair Accessible', key: 'Wheelchair Accessible' },
])
const selectedamenities1 = ref(['Marketing'])
const selectedamenities2 = ref(['Marketing'])

//kanan activities checkbox
const activity1 = ref([
  { name: 'Hiking', key: 'Hiking' },
  { name: 'Fishing', key: 'Fishing' },
  { name: 'Cycling', key: 'Cycling' },
  { name: 'Kayaking', key: 'Kayaking' },
  { name: 'Camping', key: 'Camping' },
])
const activity2 = ref([
  { name: 'Swimming', key: 'Swimming' },
  { name: 'Boating', key: 'Boating' },
  { name: 'Bird Watching', key: 'Bird Watching' },
  { name: 'Wellness & Yoga', key: 'Wellness & Yoga' },
  { name: 'Photography', key: 'Photography' },
])

const selectedactivities1 = ref(['Hiking'])
const selectedactivities2 = ref(['Hiking'])
</script>
<template>
  <form @submit.prevent="" class="space-y-4">
    <h1 class="text-xl font-bold text-gray-900">Basic Information</h1>
    <Divider />
    <section class="flex flex-row gap-4">
      <div class="basis-1/2">
        <label for="Web Name" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white"
          >Name <span class="text-red-500">*</span></label
        >
        <InputText
          class="!w-full"
          type="text"
          v-model="form.resort_name"
          name="resort_name"
          placeholder="Enter Resort Name.."
        />
        <div v-if="errors.resort_name" class="text-red-500 text-sm mt-2">
          {{ errors.resort_name[0] }}
        </div>
      </div>
      <div class="basis-1/2">
        <label for="Web Name" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white"
          >Type <span class="text-red-500">*</span></label
        >

        <Select
          v-model="selectedCity"
          variant="filled"
          :options="cities"
          optionLabel="name"
          placeholder="Select type"
          class="w-full"
        />
      </div>
    </section>

    <section class="pt-4">
      <label for="Web Name" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white"
        >Description <span class="text-red-500">*</span></label
      >
      <Textarea placeholder="Enter description" rows="4" class="w-full" />
    </section>

    <section class="">
      <label for="Web Name" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white"
        >Rating <span class="text-red-500">*</span></label
      >
      <Rating v-model="value" :cancel="false" class="!text-yellow-500" pt:root="text-4xl" />
    </section>

    <h1 class="text-xl font-bold text-gray-900 pt-10">Location</h1>
    <Divider />

    <section class="flex flex-row gap-4">
      <div class="basis-1/2">
        <label for="Web Name" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white"
          >Address <span class="text-red-500">*</span></label
        >
        <InputText
          class="!w-full"
          type="text"
          v-model="form.address"
          name="address"
          placeholder="Insert Resort Address.."
        />
        <div v-if="errors.address" class="text-red-500 text-sm mt-2">
          {{ errors.address[0] }}
        </div>
      </div>

      <div class="basis-1/2">
        <label for="Web Name" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white"
          >Province <span class="text-red-500">*</span></label
        >
        <InputText
          class="!w-full"
          type="text"
          v-model="form.province"
          name="province"
          placeholder="Insert Resort Province.."
        />
        <div v-if="errors.province" class="text-red-500 text-sm mt-2">
          {{ errors.province[0] }}
        </div>
      </div>
    </section>

    <section class="flex flex-row gap-4">
      <div class="basis-1/2">
        <label for="Web Name" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white"
          >City <span class="text-red-500">*</span></label
        >
        <InputText
          class="!w-full"
          type="text"
          v-model="form.city"
          name="city"
          placeholder="Insert Resort City.."
        />
        <div v-if="errors.city" class="text-red-500 text-sm mt-2">
          {{ errors.city[0] }}
        </div>
      </div>

      <div class="basis-1/2">
        <label for="Web Name" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white"
          >Barangay <span class="text-red-500">*</span></label
        >
        <InputText
          class="!w-full"
          type="text"
          v-model="form.barangay"
          name="barangay"
          placeholder="Insert Resort Barangay.."
        />
        <div v-if="errors.barangay" class="text-red-500 text-sm mt-2">
          {{ errors.barangay[0] }}
        </div>
      </div>
    </section>

    <section class="flex flex-row gap-4">
      <div class="basis-1/2">
        <label for="Web Name" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white"
          >latitude <span class="text-red-500">*</span></label
        >
        <InputText
          class="!w-full"
          type="text"
          v-model="form.latitude"
          name="latitude"
          placeholder="Insert Resort Latitude.."
        />
        <div v-if="errors.latitude" class="text-red-500 text-sm mt-2">
          {{ errors.latitude[0] }}
        </div>
      </div>

      <div class="basis-1/2">
        <label for="Web Name" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white"
          >longitude <span class="text-red-500">*</span></label
        >
        <InputText
          class="!w-full"
          type="text"
          v-model="form.longitude"
          name="longitude"
          placeholder="Insert Resort Longitude.."
        />
        <div v-if="errors.longitude" class="text-red-500 text-sm mt-2">
          {{ errors.longitude[0] }}
        </div>
      </div>
    </section>

    <h1 class="text-xl font-bold text-gray-900 pt-10">Media Information</h1>
    <Divider />

    <div class="py-6">
      <label for="Web Name" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white"
        >Thumbnail</label
      >
      <FileUpload
        mode="advanced"
        name="resortFiles[]"
        :multiple="true"
        accept="image/*"
        :maxFileSize="5000000"
        customUpload
        @uploader="onUpload"
        chooseLabel="Browse"
        uploadLabel="Upload"
        cancelLabel="Cancel"
      >
        <template #empty>
          <div class="flex flex-col items-center justify-center text-gray-500">
            <i class="pi pi-cloud-upload text-5xl mb-3"></i>
            <p class="text-center">Drag and drop images here, or click to browse</p>
          </div>
        </template>
      </FileUpload>
    </div>

    <section class="flex flex-row">
      <div class="basis-1/2">
        <label for="Web Name" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white"
          >Amenities <span class="text-red-500">*</span></label
        >
        <article class="flex gap-4">
          <section class="flex flex-col gap-4">
            <div v-for="category of amenities1" :key="category.key" class="flex items-center gap-2">
              <Checkbox
                v-model="selectedamenities1"
                :inputId="category.key"
                name="category"
                :value="category.name"
              />
              <label :for="category.key">{{ category.name }}</label>
            </div>
          </section>
          <section class="flex flex-col gap-4">
            <div v-for="category of amenities2" :key="category.key" class="flex items-center gap-2">
              <Checkbox
                v-model="selectedamenities2"
                :inputId="category.key"
                name="category"
                :value="category.name"
              />
              <label :for="category.key">{{ category.name }}</label>
            </div>
          </section>
        </article>
      </div>
      <div class="basis-1/2">
        <label for="Web Name" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white"
          >Actties <span class="text-red-500">*</span></label
        >
        <article class="flex gap-4">
          <section class="flex flex-col gap-4">
            <div v-for="activity of activity1" :key="activity.key" class="flex items-center gap-2">
              <Checkbox
                v-model="selectedactivities1"
                :inputId="activity.key"
                name="category"
                :value="activity.name"
              />
              <label :for="activity.key">{{ activity.name }}</label>
            </div>
          </section>
          <section class="flex flex-col gap-4">
            <div v-for="activity of activity2" :key="activity.key" class="flex items-center gap-2">
              <Checkbox
                v-model="selectedactivities2"
                :inputId="activity.key"
                name="category"
                :value="activity.name"
              />
              <label :for="activity.key">{{ activity.name }}</label>
            </div>
          </section>
        </article>
      </div>
    </section>

    <h1 class="text-xl font-bold pt-10 text-gray-900">Contact Information</h1>
    <Divider />
    <section class="flex flex-row gap-4">
      <div class="basis-1/2">
        <label for="Web Name" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white"
          >Email <span class="text-red-500">*</span></label
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
      </div>

      <div class="basis-1/2">
        <label for="Web Name" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white"
          >Phone No. <span class="text-red-500">*</span></label
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
      </div>
    </section>

    <section class="flex flex-row gap-4">
      <div class="basis-1/2">
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
      </div>

      <div class="basis-1/2">
        <label for="Web Name" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white"
          >Website</label
        >
        <InputText
          class="!w-full"
          type="text"
          v-model="form.website"
          name="website"
          placeholder="Insert website..)"
        />
        <div v-if="errors.website" class="text-red-500 text-sm mt-2">
          {{ errors.website[0] }}
        </div>
      </div>
    </section>

    <section class="pb-4">
      <label for="Web Name" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white"
        >Social Media</label
      >
      <InputText
        class="!w-full"
        type="text"
        v-model="form.social_media"
        name="social_media"
        placeholder="Insert social media link..)"
      />
      <div v-if="errors.social_media" class="text-red-500 text-sm mt-2">
        {{ errors.social_media[0] }}
      </div>
    </section>

    <section class="pb-4">
      <label for="Web Name" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white"
        >Thumbnail</label
      >
      <InputText
        class="!w-full"
        type="text"
        v-model="form.thumbnail"
        name="thumbnail"
        placeholder="Insert Resort Thumbnail.."
      />
      <div v-if="errors.thumbnail" class="text-red-500 text-sm mt-2">
        {{ errors.thumbnail[0] }}
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
    <section class="flex gap-4">
      <button type="reset" class="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer">
        Reset
      </button>
      <button
        type="submit"
        class="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
        :disabled="loading"
      >
        {{ loading ? 'Submitting....' : 'Submit' }}
      </button>
    </section>
  </form>
</template>
