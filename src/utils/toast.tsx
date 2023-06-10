import { CircleCheck } from '@wwcattlewei/icons-vue'
import { createVNode, render } from 'vue'
const body = document.body
const toast = (content?: string) => {
  // 我们先写一个弹窗组件
  const message = {
    render() {
      return (
        <div class="toast-content">
          <CircleCheck color="#faad14" width="20"></CircleCheck>
          <span class="text">{content}</span>
        </div>
      )
    }
  }
  // 初始化组件生成vdom
  const vm = createVNode(message)
  console.log(vm)

  // 创建容器，也可以用已经存在的
  const container = document.createElement('div')
  container.classList.add('toast-container')
  //render通过patch 变成dom
  render(vm, container)
  // 弹窗挂到任何你想去的地方
  body.appendChild(container)
  // 5s后取消提示
  setTimeout(() => {
    Array.from(body.children).find((res) => {
      console.log(res)
      if (res.classList.contains('toast-container')) {
        res.innerHTML = ''
      }
    })
  }, 2000)
}

export { toast }
