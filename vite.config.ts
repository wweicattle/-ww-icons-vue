import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import Components from 'unplugin-vue-components/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/] //
    }),
    // visualizer(),
    vueJsx(),
    Components({
      resolvers: [
        (componentName) => {
          if (componentName.startsWith('tq'))
            return {
              name: componentName.split('tq')[1],
              from: '@wwcattlewei/icons-vue'
            }
        }
      ]
    })
  ],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  }
})
