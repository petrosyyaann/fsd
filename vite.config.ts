import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react-swc'
import eslint from 'vite-plugin-eslint'
import viteSvgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), viteSvgr()],
  base: '/',
  server: {
    port: 3000,
    open: 'http://localhost:3000/',
  },
  build: {
    outDir: 'build',
    sourcemap: false,
  },
  preview: {
    port: 3000,
  },
})
