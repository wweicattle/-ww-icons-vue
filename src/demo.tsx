import { defineComponent } from 'vue'
const a: number = 32323
console.log(a)

export default defineComponent({
  setup(props) {
    console.log(props)
    const clickBox = () => {
      console.log(1111)
    }
    return () => (
      <div>
        <span>我是box4341</span>
        <div classNmae="active" style={{ color: 'red' }} onClick={() => clickBox()}>
          <span>我是box2</span>
          <div>我是box3</div>
        </div>
      </div>
    )
  }
})
