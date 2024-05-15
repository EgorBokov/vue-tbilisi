import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath} from 'url';
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), tsconfigPaths()],
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  },
  define: {
    'process.env': process.env
  },
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@pinia', replacement: fileURLToPath(new URL('./src/pinia', import.meta.url)) }
    ]
  }
})
