// composables/useSystemUpdate.ts
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useToast } from 'primevue/usetoast'

export interface FormData {
  system_name: string
  system_slogan1: string
  system_slogan2: string
  facebook_link: string
  email_link: string
  number: string
  system_logo: File | null
  background_img: string
}

export function useSystemSettings() {
  const form = ref<FormData>({
    system_name: '',
    system_slogan1: '',
    system_slogan2: '',
    facebook_link: '',
    email_link: '',
    number: '',
    system_logo: null,
    background_img: '',
  })

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

  const message = ref('')
  const srcLogo = ref<string | null>(null)
  const errors = ref<{ [key: string]: string[] }>({})
  const toast = useToast()

  const onFileSelectLogo = (event: { files: File[] }) => {
    const file = event.files[0]
    const reader = new FileReader()

    reader.onload = () => {
      srcLogo.value = reader.result as string
      form.value.system_logo = file
    }

    if (file) {
      reader.readAsDataURL(file)
    }
  }

  const fetchSystemInfo = async () => {
    try {
      const { data } = await axios.get(`${API_BASE_URL}/system-info`)
      form.value = { ...form.value, ...data }
    } catch (err) {
      console.error('Failed to fetch system info:', err)
    }
  }

  const updateSystemInfo = async () => {
    try {
      errors.value = {}
      await axios.put(`${API_BASE_URL}/system-update`, form.value)

      message.value = 'System information updated successfully!'
      toast.add({
        severity: 'success',
        summary: 'Update message',
        detail: 'System Updated Successfully!',
        life: 10000,
      })
    } catch (err: any) {
      console.error('Failed to update:', err)
      toast.add({
        severity: 'error',
        summary: 'Update message',
        detail: 'Update Failed!',
        life: 10000,
      })

      if (err.response?.data?.errors) {
        errors.value = err.response.data.errors
      }
    }
  }

  onMounted(fetchSystemInfo)

  return {
    form,
    srcLogo,
    message,
    errors,
    onFileSelectLogo,
    fetchSystemInfo,
    updateSystemInfo,
  }
}
