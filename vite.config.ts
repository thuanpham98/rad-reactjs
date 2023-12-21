import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
  build: {
    lib: {
      entry: "src/index.ts",
      fileName: "radts-reactjs",
      formats: ["cjs", "es"],
      name: "radts-reactjs",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
    emptyOutDir: true,
    outDir: "dist",
    minify: true,
    cssMinify: false,
    sourcemap: true,
    cssCodeSplit: false,
  },
});

