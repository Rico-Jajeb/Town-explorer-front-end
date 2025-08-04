<script setup>
import Divider from 'primevue/divider'
import Dialog from 'primevue/dialog'
</script>

<template>
  <main class="flex items-center justify-center">
    <footer class="bg-black m-3 text-white rounded-lg h-96 mt-96 w-[1920px]">
      <section class="md:flex md:justify-between h-64 px-24">
        <header class="flex pt-4 md:pt-24">
          <h1 class="text-lg md:text-3xl font-bold">System Slogan</h1>
        </header>

        <section class="h-32 pt-4 md:pt-24">
          <label for="" class="text-sm md:text-lg font-bold">Social:</label>
          <nav class="flex gap-4 mt-4 mb-4">
            <a :href="test" target="_blank" rel="noopener noreferrer"
              ><i class="pi pi-facebook" style="font-size: 1.5rem"></i
            ></a>
            <a :href="test" target="_blank" rel="noopener noreferrer"
              ><i class="pi pi-linkedin" style="font-size: 1.5rem"></i
            ></a>
            <a :href="est" target="_blank" rel="noopener noreferrer"
              ><i class="pi pi-github" style="font-size: 1.5rem"></i
            ></a>
          </nav>
          <div class="">
            <button @click="categoryInfoDisp = true">
              <i class="pi pi-envelope" style="font-size: 1.3rem">: </i>
            </button>
            <span class="text-sm md:text-lg">Fb</span>
          </div>
        </section>
      </section>

      <Divider />
      <section class="flex justify-between px-2 md:px-24">
        <h1 class="text-sm md:text-md">
          © 2025 systename. <br />
          Built with Laravel & Vue.js. <br />
          All rights reserved.
        </h1>
        <h1 class="text-sm md:text-md">Design and developed by: RJC</h1>
      </section>
      <Dialog
        v-model:visible="categoryInfoDisp"
        maximizable
        :header="`Contact  `"
        :style="{ width: '600px' }"
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
      >
        <EmailForm />
      </Dialog>
    </footer>
  </main>
</template>
