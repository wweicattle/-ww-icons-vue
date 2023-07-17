<template>
  <div class="code_contain">
    <div class="text_header space-between">
      <span class="right-title">{{ iconAttr.iconComponent?.__name }}</span>
      <span class="code_del" @click.stop="emits('changeVis')">
        <Close width="20px" @click="closeIcons" />
      </span>
    </div>
    <div class="code-codes" @click="handleCopy">
      {{ codeStr }}
    </div>
    <div class="code-ope">
      <input type="text" v-model="iconSize" class="size-input-css" @input="changeIcon" />
      px
      <span> <Download width="18px" style="vertical-align: -4px" /><span class="png_txt">PNG</span> </span>
      <span @click="copySvgCode">SVG CODE</span>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useUserStore } from '@/store'
import { toast } from '@/utils/toast'
import computeCodeName from './utils/computedCodeStr'
import useClipboard from 'vue-clipboard3'

const store = useUserStore()

const emits = defineEmits(['changeVis'])

const { toClipboard } = useClipboard()

// 默认图标的尺寸大小
const iconSize = ref(170)

// 获取选中组件信息
const iconAttr = computed(() => {
  return store.getIconsAttr
})

const codeStr = computed(() => {
  return computeCodeName(store.getIconsAttr)
})

const changeIcon = () => {
  const newInpuVal = iconSize.value || 0
  store.editIcons({ width: (typeof Number(newInpuVal) === 'number' ? iconSize.value : '170') + 'px' })
}
const handleCopy = async () => {
  await toClipboard(codeStr.value)
  toast('复制成功!')
}

const closeIcons = () => {
  store.resetIcon()
}
</script>

<style lang="less" scoped>
.code_contain {
  padding: 0 20px;
  text-align: left;
  color: var(--fontColor);

  &:hover {
    cursor: pointer;
  }

  .text_header {
    height: 30px;
    line-height: 30px;
    margin-bottom: 30px;

    .right-title {
      font-size: 20px;
      font-weight: 600;
    }

    .code_del {
      font-size: 17px;
    }
  }

  .code-codes {
    background: #f5f5f5 none repeat scroll 0 0;
    margin-bottom: 30px;
    overflow: auto;
    white-space: nowrap;
    padding: 14px 10px;
    border-radius: 8px;
    font-weight: 600;

    &:hover {
      cursor: pointer;
      background: #d9eaea;
    }
  }

  .code-ope {
    & > span {
      margin: 0 4px;
      border: 1px solid #eee;
      padding: 6px 15px;
      border-radius: 4px;
      font-size: 12px;

      &:hover {
        font-weight: 600;
        color: var(--primary);
      }

      & .png_txt {
        margin-left: 6px;
      }
    }
    .size-input-css {
      width: 40px;
      border: 1px solid #eee;
      padding: 5px;
      margin-right: 3px;
      border-radius: 2px;
    }
  }
}
</style>
