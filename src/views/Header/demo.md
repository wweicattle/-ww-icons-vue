### 快速开始

```shell
  $ yarn add @wwcattlewei/icons-vue
```

```shell
  $ npm add @wwcattlewei/icons-vue
```

### 全局引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```javascript
//main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { icons as Icons } from '@wwcattlewei/icons-vue'
//样式引入
import '@wwcattlewei/icons-vue/dist/index.css'
const app = createApp(App)
app.use(Icons)
app.mount('#app')
```

### 手动导入

```javascript
<template>
    <add-location />
</template>
<script lang='ts'>
  import { AddlLocation } from '@wwcattlewei/icons-vue'
  export default {
    components: { AddlLocation },
  }
</script>
```

### 自动引入

```shell
  $ yarn add unplugin-vue-components
```
```javascript
// vite.config.ts
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        (componentName) => {
          if (componentName.startsWith('Tq'))
            return {
              name: componentName.split('Tq')[1],
              from: '@wwcattlewei/icons-vue'
            }
        }
      ]
    })
  ]
})
```

## 参数

| 参数          | 说明                                                                                          | 类型               | 默认值     |
| ------------- | --------------------------------------------------------------------------------------------- | ------------------ | ---------- |
| color          | 颜色                                    | _string_           | `default`  |
| size          | 尺寸                                                       | _number_           | `normal`   |
| spin          | 旋转动画                                                                                     | _boolean_           | false          |