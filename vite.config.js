import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
  base: '/',
  preview: {
    allowedHosts: ['nurseme.magical.africa'],
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
  },
})
