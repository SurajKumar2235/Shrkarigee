import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allow access from external IP
    port: 8080, // Change to your desired port
    watch: {
      usePolling: true // Useful for Docker or WSL environments
    }
  }
})

