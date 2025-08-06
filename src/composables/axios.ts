import axios from 'axios'
import type { AxiosInstance } from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string

export const csrfAxios: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Needed for Sanctum to send/receive cookies
})

export const api: AxiosInstance = axios.create({
  baseURL: `${API_BASE_URL}/api/v1`,
  withCredentials: true,
})
