import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({insertTypesEntry:true})],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
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
      },
    },
    emptyOutDir:true,
    outDir:"./dist",
    minify:true,
    cssMinify:true,
    sourcemap:true,
  }
})
