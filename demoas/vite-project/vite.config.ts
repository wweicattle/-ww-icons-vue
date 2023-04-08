import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import Components from "unplugin-vue-components/vite"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        // example of importing Vant
        (componentName) => {
          console.log(componentName);
          if (componentName.startsWith("Tq"))
            return { name: componentName.split("Tq")[1], from: "@wwcattlewei/icons-vue" }
        },
      ],
    }),
  ],
})
