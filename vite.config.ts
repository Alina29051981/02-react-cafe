import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: import.meta.env.VERCEL ? './' : '/02-react-cafe/', 
  build: {
    sourcemap: true,
  },
})
