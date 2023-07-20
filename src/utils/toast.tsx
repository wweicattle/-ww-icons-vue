import { CircleCheck, SuccessFilled, InfoFilled } from '@wwcattlewei/icons-vue'
import { createVNode, render } from 'vue'
const body = document.body
type TypeStatus = 'Success' | 'Info' | 'Error'
const toast = (content?: string, type?: TypeStatus) => {
  // 我们先写一个弹窗组件
  const message = {
    render() {
      return (
        <div class="toast-content">
          {type === 'Success' ? (
            <SuccessFilled color="#faad14" width="20" />
          ) : type === 'Info' ? (
            <InfoFilled color="#1a1a1a" width="20" />
          ) : (
            <CircleCheck color="red" width="20" />
          )}
          <span class="text">{content}</span>
        </div>
      )
    }
  }
  // 初始化组件生成vdom
  const vm = createVNode(message)

  // 创建容器，也可以用已经存在的
  const container = document.createElement('div')
  container.classList.add('toast-container')
  //render通过patch 变成dom
  render(vm, container)
  // 弹窗挂到任何你想去的地方
  body.appendChild(container)
  // 2s后取消提示
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
