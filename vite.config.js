import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(),
    // viteImagemin({
    //   quality: 80
    // })
  ],
  server: {
    port: 3000,
    open: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
    },
  },
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 500
  }
})