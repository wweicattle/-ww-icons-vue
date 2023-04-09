import lStorage from '@/utils/storage'
import pinia from '@/store/module'
import { useTheme } from '@/store/theme'
const theme = useTheme(pinia)
console.log(theme)

// 改变主题 ,黑色~ 保存本地
const changeTheme = () => {
  const htmlDom = document.querySelector('html')
  if (htmlDom?.classList.contains('dark')) {
    htmlDom.classList.remove('dark')

    //修改store和本地的主题
    lStorage(
      'theme',
      {
        theme: 'light',
        status: 1
      },
      'add'
    )
  } else {
    htmlDom?.classList.add('dark')
    lStorage(
      'theme',
      {
        theme: 'dark',
        status: 2
      },
      'add'
    )
  }
}
export default changeTheme
