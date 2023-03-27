import { createApp } from "vue"
import "@/assets/css/theme.less"
import "@wwcattlewei/icons-vue/dist/index.css"
import App from "./main.vue"
import { createPinia } from "pinia"
const app = createApp(App)
app.use(createPinia())
app.mount("#app")

