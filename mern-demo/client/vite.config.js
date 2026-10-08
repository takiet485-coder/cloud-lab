import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://humble-capybara-69qjv6q975r9fx4r-5000.app.github.dev',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})