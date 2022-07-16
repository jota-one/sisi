import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib'),
      name: 'SisiAdminApp',
      fileName: 'index'
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ['vue']
    },
    outDir: resolve(__dirname, '../dist/ui')
  },
  plugins: [vue()]
})
