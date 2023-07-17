<template>
  <div class="ope_tool">
    <template v-for="(val, index) in toolItem">
      <div v-if="val == 'color'" @input="changeColor" class="color_item" :key="val">
        <span
          class="color_select_css"
          :style="{
            background: store.iconAttr.color
          }"
        ></span>
        <input type="color" style="opacity: 0" class="input_color" />
      </div>
      <div v-else @click="changeAttrBtn(val)" :key="+index">
        <component :is="val == 'refresh' ? Promotion : RefreshRight" width="20px"></component>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { RefreshRight, Promotion } from '@wwcattlewei/icons-vue'
import toolItem from './utils/util'
import { useUserStore } from '@/store'
const store = useUserStore()

interface toolOpe {
  color?: string
  refresh?: string
  width?: string
  spin: boolean
}

const styleAttr = reactive<toolOpe>({
  color: '#1a1a1a',
  width: '',
  spin: false
})

const changeColor = (event: HTMLInputElement | any) => {
  if (event.target) {
    styleAttr.color = event.target.value
    // 通知状态
    store.editIcons({ color: styleAttr.color })
  }
}
const changeAttrBtn = (val: string) => {
  // 开始处理收集操作
  switch (val) {
    case 'refresh':
      //重置选中图标
      store.resetIcon()
      break
    case 'spin':
      styleAttr.spin = !styleAttr.spin
      store.editIcons({ spin: styleAttr.spin })
      break
  }
}
</script>

<style lang="less" scoped>
.ope_tool {
  padding: 10px 0;
  color: #1a1a1a;

  .color_item {
    border: 1px solid rgb(228, 224, 224);
    width: 20px;
    height: 20px;
    overflow: hidden;
    position: relative;
    border-radius: 50%;

    .color_select_css {
      display: inline-block;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      width: 14px;
      height: 14px;
      border-radius: 50%;
    }

    .input_color {
      cursor: pointer;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }

  & > img {
    margin-bottom: 6px;
  }

  & > div {
    display: flex;
    align-items: center;
    margin-bottom: 6px;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
