import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // expose on the local network so ngrok can reach it
    allowedHosts: [
      '.ngrok-free.app', // allow any ngrok-free.app tunnel subdomain
      '.ngrok.io',
      '.ngrok.app',
    ],
  },
})
