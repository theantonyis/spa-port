import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import viteImagemin from 'vite-plugin-imagemin';
import imageOptimizer from '@vitejs/plugin-image-optimizer';

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      quality: 80, // Компресія зображень
    }),
    imageOptimizer({
      include: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'],
      svgoOptions: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false, // Залишає viewBox в SVG для коректного рендеру
          },
        ],
      },
      mozjpeg: {
        quality: 75, // Якість JPEG
      },
      optipng: {
        optimizationLevel: 3, // Рівень оптимізації PNG
      },
    }),
  ],
  server: {
    port: 3000,
    open: true,
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
    chunkSizeWarningLimit: 500,
  },
});
