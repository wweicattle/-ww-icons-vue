<template>
  <div>
    <template v-for="(val, index, num) in newIcons" :key="index">
      <div class="items_css">
        <div class="item_name align-item" @click="showDetailIcons(num)">
          {{ index }}
          {{ typeIconsNum(val) }}
          <CaretBottom width="14px" v-if="!expandStatus[num]" />
          <CaretTop width="14px" v-else />
        </div>
        <div class="icons_content" v-show="expandStatus[num]">
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
import { ref, computed, toRaw, markRaw, onBeforeMount } from 'vue'
import { useModel } from '@/store/model'
import { useUserStore } from '@/store/index'

const useModels = useModel()
const useIcons = useUserStore()
console.log(toRaw(useIcons.iconData))

console.log(111, toRaw(useIcons.iconData))
const newIcons = computed(() => {
  return useIcons.iconData
})

// console.log(newIcons.value);

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
  // return useIcons.iconData.filter((val: any) => { return val.type == useIcons.selectIconType }).length || 0
}
const expandStatus = ref<Array<any>>([])
const emits = defineEmits(['update:visble', 'selecIcon'])

// 处理图标分类
// const sortIconsData = shallowRef<Record<string, any>>({})
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

onBeforeMount(() => {
  // dealSortIcons()
})
</script>

<style lang="less" scoped>
.items_css {
  user-select: none;

  .item_name {
    margin: 20px 0 40px 0;
    cursor: pointer;
  }

  .icons_content {
    display: flex;
    flex-wrap: wrap;

    .icon_items {
      font-size: 20px;
      // width: 120px;
      border: 1px solid var(--border);
      // margin: 0 10px 16px 10px;
      text-align: center;
      padding: 10px;
      box-sizing: border-box;
      margin-bottom: 20px;
      // width: calc((100% - 120px) / 9);
      // margin-right: calc(120px / 8);
      margin-right: 10px;

      &:last-child {
        // margin-right: 0;
      }

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
