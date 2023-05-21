import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      fileName: 'rad-ts',
      formats: ['cjs', 'es'],
      name: 'rad-ts',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React'
        }
      }
    },
    emptyOutDir:true,
    outDir:"./dist",
    minify:true,
    cssMinify:true,
    sourcemap:true,
  }
})
