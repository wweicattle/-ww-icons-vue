<template>
  <div>
    <template v-for="(val, index, num) in newIcons" :key="index">
      <div class="items-css">
        <div class="item_name align-item" @click="showDetailIcons(num)">
          {{ index }}
          {{ typeIconsNum(val) }}
          <CaretBottom width="14px" v-if="expandStatus[num]" />
          <CaretTop width="14px" v-else />
        </div>
        <div class="icons_content" v-show="!expandStatus[num]">
          <template v-for="res in val" :key="res">
            <div
              class="icon_items align-item"
              @click="expandIconsDetail(res.component)"
              v-if="res.type == useIcons.selectIconType"
            >
              <component :is="markRaw(res.component)"></component>
              <div class="item_spe_name" v-show="useModels.model != 'right'">
                <div>
                  {{ res.name }}
                </div>
                <div>
                  {{ res.engliashName }}
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, markRaw } from 'vue'
import { useModel } from '@/store/model'
import { useUserStore } from '@/store/index'

const useModels = useModel()
const useIcons = useUserStore()
const newIcons = computed(() => {
  return useIcons.iconData
})

// 图标展示的宽度
const modelWidth = computed(() => {
  return useModels.model === 'left' ? '140px' : '60px'
})

const typeIconsNum = (val: Record<string, any>) => {
  let iconNums = 0
  iconNums += val.reduce((acc: number, val: Record<string, any>) => {
    if (val.type == useIcons.selectIconType) {
      acc += 1
      return acc
    } else {
      return acc
    }
  }, 0)
  return iconNums
}
const expandStatus = ref<Array<boolean>>([])
const emits = defineEmits(['update:visble', 'selecIcon'])

defineProps({
  visble: {
    type: Boolean,
    default: false
  },
  testNum: {
    type: Number
  }
})
const expandIconsDetail = (val: Record<string, any>) => {
  emits('update:visble', true)
  emits('selecIcon', val)
}

// 显示具体类别的icons
const showDetailIcons = (index: number) => {
  expandStatus.value[index] = !expandStatus.value[index]
}
</script>

<style lang="less" scoped>
.items-css {
  user-select: none;

  .item_name {
    margin: 20px 0 40px 0;
    cursor: pointer;
  }

  .icons_content {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(v-bind(modelWidth), 1fr));
    .icon_items {
      font-size: 20px;
      border: 1px solid var(--border);
      text-align: center;
      padding: 10px;
      box-sizing: border-box;
      margin-bottom: 20px;
      justify-content: center;

      svg {
        width: 30px;
        padding: 4px;
        box-sizing: border-box;
      }

      &:hover {
        cursor: pointer;
        border-radius: 4px;
        box-shadow: var(--boxShdow);

        svg {
          transform: scale(1.3);
        }
      }

      .item_spe_name {
        flex: 1;
        width: 120px;
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
      }
    }

    // .icon_items:nth-child(9n) {
    //   margin-right: 0;
    // }
  }
}
</style>
