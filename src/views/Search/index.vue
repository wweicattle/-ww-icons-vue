<template>
  <div class="input_search_css align-item">
    <div class="input_css  align-item">
      <span class="search_sort_btn align-item" @click="iconModel.clickModelVis = !iconModel.clickModelVis">
        {{ iconModel.iconStatus == 'line' ? '线性' : '实线' }}<arrow-down width="14px" style="margin-left: 2px;" /></span>
      <input type="text" v-model="inputVal" placeholder="Serach..." @mouseout="isShake = false">
      <img src="/logoItem.svg" type="" :class="logoCss" />
      <ul class="absolute-sort" v-if='iconModel.clickModelVis'>
        <template v-for='val in iconModel.model'>
          <li @click="sortTypeChange(val)">{{ val == 'line' ? '线性' : '实线' }}</li>
        </template>
      </ul>
    </div>
    <div class="icons_num">
      <span >图标数</span>
      {{ iconsNums }}/
      <span style="font-size:16px">{{ iconsNum }}</span>
    </div>
    <div class="tool_css align-item">
      <span :class="{ active_model: modelOpe.model == 'left' }" @click="changeModel(1)">
        <Menu width="18px" />
      </span>
      <span :class="{ active_model: modelOpe.model == 'right' }" @click="changeModel(2)">
        <Grid width="18px" />
      </span>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive, watch } from "vue";
import { useModel } from "@/store/model"
import { useUserStore } from "@/store/index"

import {Plus,Apple} from "@wwcattlewei/icons-vue"


const modelOpe = useModel()
const useIcons = useUserStore()

const inputVal = ref<string>('')
// 计算图标总数
const iconsNum = computed(() => {
  let iconsNum = 0
  for (const key in useIcons.copyIconData) {
    const arrChildren = useIcons.copyIconData[key];
    iconsNum += arrChildren.length
  }
  return iconsNum
})
const iconsNums = computed(() => {
  let iconsNum = 0
  for (const key in useIcons.iconData) {
    const arrChildren = useIcons.iconData[key];
    iconsNum += arrChildren.length
  }
  
  return iconsNum
})
// const searchIconsNum = computed(() => {
//   return useIcons.lineNum
// })
const isShake = ref<boolean>(false)

interface IconModel {
  clickModelVis: boolean,
  iconStatus: string,
  model: Array<string>
}
const iconModel = reactive<IconModel>({
  clickModelVis: false,
  iconStatus: 'line',
  model: ['line', 'solid']
})
const logoCss = computed(() => {
  return {
    'animate__animated': true,
    // 'animate__backInDown': true,
    'animate__swing': isShake.value
  }
})


const changeModel = (num: Number) => {
  if (num == 1) {
    modelOpe.editModel('left')
  } else {
    modelOpe.editModel('right')

  }
}
const searchBtn = (str: string) => {
  console.log(str);
  useIcons.selectIconData(str)
  isShake.value = true
}
watch(inputVal, (newVal) => {
  console.log(newVal);
  searchBtn(newVal)
}, { immediate: true }
)


const sortTypeChange = (val: 'solid' | 'line') => {
  iconModel.iconStatus = val;
  iconModel.clickModelVis = false
  // 进行保存状态中
  useIcons.changeIconType(val)
  searchBtn(inputVal.value)
  // useIcons.selectIconData('')


}
</script>

<style lang="less" scoped>
.input_search_css {
  width: 80%;
  margin: 30px auto 0;
  height: 18px;
  line-height: 18px;
  padding: 16px 20px;
  justify-content: center;

  .input_css {
    height: 38px;
    border-radius: 24px;
    width: 60%;
    background: linear-gradient(59deg, #F1FFF8 0%, #F5FFFE 100%);
    position: relative;

    .absolute-sort {
      width: 100px;
      left: 0;
      top: 40px;
      border: 1px solid var(--border);
      position: absolute;
      text-align: center;
      // box-shadow: 0 0 3px 0 #4A54FF;
      border-radius: 5px;
      overflow: hidden;
      z-index: 10;
      background: var(--backgroundTheme);
      color: var(--color);

      li {
        padding: 10px 0;

        &:hover {
          cursor: pointer;
          background: var(--background-linear);
        }
      }
    }

    .search_sort_btn {
      border-radius: 24px;
      font-size: 13px;
      background: var(--background-linear);
      color: var(--border);
      padding: 7px 22px;
      margin-left: 3px;
      font-weight: 600;

      // border: 1px solid #c3c3c3;
      &:hover {
        cursor: pointer;
        opacity: .7;
      }
    }

    &:hover {
      border: 1px solid #c3c3c3;
      background: #fff;
    }

    input {
      flex: 1;
      font-size: 16px;
      height: 100%;
      padding-left: 10px;
      background: transparent;
    }

    &>img {
      position: absolute;
      right: 0;
      top: -28px;
      width: 36px;
      // z-index: 10;
    }

  }

  .icons_num {
    margin-left: 16px;
  }

  .tool_css {
    margin-left: 20px;

    &>span {
      border-radius: 6px;
      padding: 8px;
      margin-right: 6px;
      border: 1px solid #D9D9D9;
      color: #D9D9D9;

      &:hover {
        cursor: pointer;
        opacity: .6;
      }

      &.active_model {
        border: 1px solid var(--primary);
        color: var(--primary);
      }
    }
  }

}
</style>