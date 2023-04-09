<template>
  <div class="left-menu_icon">
    <template v-for="(val, index, num) in useIcons.iconData" :key="index">
      <div
        @click="editActiveMenuBtn(num)"
        :class="{
          active_css: activeMenuIndex == num ? true : false
        }"
      >
        <span class="text_item"> {{ index }}</span>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { useUserStore } from '@/store/index'
const emits = defineEmits(['changeActiveMenu'])
const useIcons = useUserStore()
const activeMenuIndex = ref<number>(0)
console.log(useIcons.iconData)
const menuDom = ref<Array<HTMLDivElement> | any>([])
nextTick(() => {
  menuDom.value = Array.from(document.querySelectorAll('.items_css'))
})

const editActiveMenuBtn = async (index: number) => {
  activeMenuIndex.value = index
  emits('changeActiveMenu', index)
  console.log(menuDom.value, index)
  menuDom.value[index].scrollIntoView({
    behavior: 'smooth'
  })
  // menuDom.value[index]()
  // console.log(document.querySelectorAll('.items_css'));
}
</script>

<style lang="less" scoped>
.left-menu_icon {
  width: 168px;
  border-right: 1px solid var(--border);
  height: 100%;
  overflow-y: auto;

  &:hover {
    cursor: pointer;
  }

  & > div {
    &.active_css {
      background: linear-gradient(59deg, #edf2f2 0%, #cef7f3 100%);
      font-size: 14px;
      position: relative;
      color: var(--primary);
    }

    .text_item {
      display: inline-block;
      font-size: 15px;
      font-weight: 600;
      padding: 14px 0 14px 14px;
    }
  }
}
</style>
