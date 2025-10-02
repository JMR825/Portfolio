import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
  base: 'windsurf-project/Portfolio/', // Replace REPO_NAME with your actual repo name
})
