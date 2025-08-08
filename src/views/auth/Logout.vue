<template>
  <div class="p-4">
    <h1 class="text-xl font-bold mb-4">You are logged in</h1>
    <div class="" v-if="authenticated">
      <button @click="logout" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
        Logout
      </button>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import Cookies from 'js-cookie'
import { useRouter } from 'vue-router'

import { useLogout } from '@/composables/auth/useLogout'
import { useAuthState } from '@/composables/auth/useAuthState'

const router = useRouter()
const { logout } = useLogout()
const { authenticated } = useAuthState()
</script>
