
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
    optimizeDeps: {
       include: ['@emotion/styled'],
  },
  }

  if (command !== 'serve') {
    config.base = '/CamionesRepo/'
  }

  return config
})