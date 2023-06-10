<template>
  <div class="code_contain">
    <div class="text_header space-between">
      <span class="right-title">{{ iconAttr.iconComponent?.__name }}</span>
      <span class="code_del" @click.stop="emits('changeVis')">
        <Close width="20px" />
      </span>
    </div>
    <div class="code_codes" @click="handleCopy">
      {{ codeStr }}
    </div>
    <div class="code_ope">
      <span>24px</span>
      <span> <Download width="18px" style="vertical-align: -4px" /><span class="png_txt">PNG</span> </span>
      <span @click="copySvgCode">SVG CODE</span>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useUserStore } from '@/store'
import { toast } from '@/utils/toast'
const store = useUserStore()

const emits = defineEmits(['changeVis'])

// 获取选中组件信息
const iconAttr = computed(() => {
  return store.getIconsAttr
})

const codeStr = ref(``)

//
const handleCopy = () => {
  console.log('开始复制了')
  toast('复制成功!')
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

  .code_codes {
    background: #f5f5f5 none repeat scroll 0 0;
    margin-bottom: 30px;
    overflow: auto;
    white-space: nowrap;
    padding: 10px;
    border-radius: 8px;

    &:hover {
      cursor: pointer;
      background: #d9eaea;
    }
  }

  .code_ope {
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
  }
}
</style>
