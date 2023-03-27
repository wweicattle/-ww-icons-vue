### 快速开始

```shell
  $ yarn add @wwcattlewei/icons-vue
```
```shell
  $ npm add @wwcattlewei/icons-vue
```
```html
<div id="app"></div>
<script src="https://cdn.jsdelivr.net/npm/@varlet/ui/umd/varlet.js"></script>
<script>
  const app = Vue.createApp({
    template: '<var-button>按钮</var-button>'
  })
  app.use(Varlet).mount('#app')
</script>
```


###  全局引入 
如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```javascript
//main.ts
  import { AddLocation } from '@wwcattlewei/icons-vue'
  import { createApp } from 'vue'
  import App from './App.vue'
  import { icons as Icons } from '@wwcattlewei/icons-vue';
  import '@wwcattlewei/icons-vue/dist/index.css'

  const app = createApp(App)

  app.use(Icons)
  app.mount('#app')

```



### 手动导入
```javascript
<template>
  <el-button>我是 ElButton</el-button>
</template>
<script>
  import { ElButton } from 'element-plus'
  export default {
    components: { ElButton },
  }
</script>
```
### 自动引入


```javascript
// vite.config.ts
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        // example of importing Vant
        (componentName) => {
          if (componentName.startsWith("Plus"))
            return { name: 'Plus', from: "@wwcattlewei/icons-vue" }
        },
      ],
    }),
  ],
})
```


## 参数

| Name | Describe | Type |
| :----| :---- | :---- |
| color | color | string |
| width | width | string |
| spin | spin rotate | boolean|