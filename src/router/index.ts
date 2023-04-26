import 'nprogress' // 进度条样式
import { type App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Main from '@/Index.vue'
import Index from '@/Home/Home.vue'
import illustrateHome from '@/Home/illustrateHome.vue'
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layouts',
    component: Main,
    redirect: '/illustrate-home',
    children: [
      {
        path: '/home',
        component: Index,
        name: 'home'
      },
      {
        path: '/illustrate-home',
        component: illustrateHome,
        name: 'illustrate'
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHashHistory(''),
  routes
})

export async function setupRouter(app: App) {
  // 创建路由守卫
  app.use(router)

  // 路由准备就绪后挂载APP实例
  await router.isReady()
}
export default router
