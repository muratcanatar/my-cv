import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-cv/',  // 👈 buraya senin GitHub repo adın gelecek
  plugins: [react()]
})
