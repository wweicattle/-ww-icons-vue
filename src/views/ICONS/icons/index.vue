
<template>
  <div>
    <template v-for="(val, index) in categories">
      <div class="items_css">
        <div class="item_name align-item" @click="showDetailIcons(index)">
          {{ val.name }}({{ val.icons?.length || 0 }})
          <CaretBottom width="14px" v-if="!expandStatus[index]"/>
          <CaretTop width="14px" v-else />
        </div>
        <div class="icons_content" v-show="expandStatus[index]">
          <template v-for="res in val.icons">
            <div class="icon_items align-item" @click="expandIconsDetail(res)">
              <component :is="markRaw(res)"></component>
              <div class="item_spe_name" v-show="useModels.model != 'right'">
                <div>中文名</div>
                <div>{{ res.__name }}</div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">

import { icons as Icons } from "@wwcattlewei/icons-vue"
import { CaretBottom, CaretTop } from "@wwcattlewei/icons-vue";
import IconCategories from '@/utils/icons-categories.json'
import IconCategorie from '@/utils/demo.json'

import { ref, shallowRef, markRaw } from "vue";

import { useModel } from "@/store/model"

console.log(Icons);

const useModels = useModel()
const iconMap = new Map(Object.entries(Icons))
const categories = shallowRef<any>([])
const expandStatus = ref<Array<any>>([])

IconCategories.categories.forEach((o: any) => {
  const result: any = {
    name: o.name,
    icons: [],
  }
  o.items.forEach((i: any) => {
    const icon: any = iconMap.get(i)
    if (icon) {
      result.icons.push(icon)
      iconMap.delete(i)
    }
  })
  categories.value.push(result)
})
console.log(categories.value);

const emits = defineEmits(['update:visble', 'selecIcon'])
const props = defineProps({
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
  expandStatus.value[index] = !Boolean(expandStatus.value[index])
}


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
      margin: 0 10px 16px 10px;
      text-align: center;
      padding: 10px 10px;

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
        width: 120px;
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
      }


    }
  }


}
</style>