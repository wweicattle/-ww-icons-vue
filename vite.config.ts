import { defineConfig } from "vite"
import path from "path"
import vue from "@vitejs/plugin-vue"
import Markdown from "vite-plugin-md"
// import { code, link } from "@yankeeinlondon/code-builder"
// import { code, link } from 'md-powerpack'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/], //
    }),
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
