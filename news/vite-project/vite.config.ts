import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

import requireTransform from 'vite-plugin-require-transform'
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    Components({
      resolvers: [
        (componentName) => {
          console.log(componentName)
          if (componentName.startsWith('Tq'))
            return {
              name: componentName.split('Tq')[1],
              from: '@wwcattlewei/icons-vue'
            }
        }
      ]
    })
    // requireTransform({
    //   fileRegex: /.ts$|.tsx$|.vue$/
    // })
  ]
})
