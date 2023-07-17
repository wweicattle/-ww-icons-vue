import { createApp } from 'vue'
import '@/assets/css/theme.less'
import WwIcons from '@wwcattlewei/icons-vue'
import { setupRouter } from '@/router'

import '@wwcattlewei/icons-vue/dist/index.css'
import App from './main.vue'
import { createPinia } from 'pinia'
const app = createApp(App)
app.use(WwIcons)
console.log('测试本地能否提交11~')

app.use(createPinia())
const update = async () => {
  await setupRouter(app)
}
update()
app.mount('#app')
