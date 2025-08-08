// import { computed, reactive, ref } from 'vue'
// import axios, { AxiosError } from 'axios'

// import { useRouter } from 'vue-router'

// interface User {
//   id?: number
//   name?: string
//   email?: string
//   [key: string]: any
// }

// interface Credentials {
//   email: string
//   password: string
// }

// interface State {
//   authenticated: boolean
//   user: User
// }

// const state = reactive<State>({
//   authenticated: false,
//   user: {},
// })

// export default function useAuth() {
//   const router = useRouter()
//   const authenticated = computed<boolean>(() => state.authenticated)
//   const user = computed<User>(() => state.user)

//   const setAuthenticated = (authenticated: boolean): void => {
//     state.authenticated = authenticated
//   }

//   const setUser = (user: User): void => {
//     state.user = user
//   }

//   const login = async (credentials: Credentials): Promise<void> => {
//     await axios.get('/sanctum/csrf-cookie')

//     try {
//       await axios.post('/login', credentials)
//       console.log('go here')

//       router.push('/dashboard')
//       return attempt()
//     } catch (err) {
//       const error = err as AxiosError<{ errors?: Record<string, string[]> }>
//       return Promise.reject(error.response?.data?.errors || error.message)
//     }
//   }

//   const attempt = async (): Promise<void> => {
//     try {
//       const response = await axios.get<User>('/api/user')

//       setAuthenticated(true)
//       setUser(response.data)
//     } catch (err) {
//       setAuthenticated(false)
//       setUser({})
//     }
//   }

//   const logout = async (): Promise<void> => {
//     await axios.get('/sanctum/csrf-cookie') // ensure CSRF token is set
//     try {
//       await axios.post('/logout')

//       router.push('/Home')
//     } finally {
//       // Whether request succeeds or fails, clear state
//       setAuthenticated(false)
//       setUser({})
//     }
//   }

//   return {
//     authenticated,
//     user,
//     login,
//     attempt,
//     logout,
//   }
// }
