/// <reference types="vite/client" />
declare module 'App.vue'
declare module '*.vue' {
  import { App, defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void
  }
  export default component
}
declare module '*.md' {
  import type { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}
declare module 'axios'
declare module '*.json' {
  return any
}

declare module 'wwcattleitem'
declare module '@wwcattlewei/icons-vue/global'

declare module '@kangc/v-md-editor'
declare module 'prismjs'
declare module '@kangc/v-md-editor/lib/theme/vuepress.js'
declare module 'marked'
// declare module '@wwcattlewei/icons-vue'
