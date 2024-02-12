import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  server:{
    proxy:{
      '/api':'http://localhost:1200'
    }
  },
=======
  // server:{
  //   proxy:{
  //     '/api':'rpaic-backend.vercel.app:1200'
  //   }
  // },
>>>>>>> af4f9651ddea0ffe3ea012d7cc16c6847d23fc25
  plugins: [react()],
})
