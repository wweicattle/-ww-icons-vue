import { defineConfig } from "vite"
import path from "path"
import vue from "@vitejs/plugin-vue"
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/], //
    }),
    visualizer()
    // Markdown({
    //   builders: [link(), code()],
    // }),
  ],
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
  },
})
