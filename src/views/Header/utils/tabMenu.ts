export interface TabItem {
  name: string
  value: string
  path?: string
}
const tabs: Array<TabItem> = [
  {
    name: '图标库',
    value: 'icons',
    path: '/home'
  },
  {
    name: '插件库',
    value: 'plugins',
    path: '/illustrate-home'
  },
  {
    name: '使用说明',
    value: 'help'
  }
]
export { tabs }
