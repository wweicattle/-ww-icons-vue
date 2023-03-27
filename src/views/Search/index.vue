<template>
  <div class="input_search_css align-item">
    <div class="input_css  align-item">
      <span class="search_sort_btn align-item" @click="iconModel.clickModelVis = !iconModel.clickModelVis">{{
        iconModel.iconStatus }}<arrow-down width="14px" style="margin-left: 2px;" /></span>
      <input type="text" placeholder="Serach..." @click="isShake = true" @mouseout="isShake = false">
      <img src="/logoItem.svg" type="" :class="logoCss" />
      <ul class="absolute-sort" v-if='iconModel.clickModelVis'>
        <template v-for='val in iconModel.model'>
          <li @click="iconModel.iconStatus = val;iconModel.clickModelVis=false">{{ val }}</li>
        </template>
      </ul>
    </div>
    <div class="icons_num">
      <span>图标数:</span>
      10200/
      <span style="font-size:16px">10200</span>
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
import { ref, computed, reactive } from "vue";
import { ArrowDown, Menu, Grid, QuestionFilled } from "@wwcattlewei/icons-vue";
import { useModel } from "@/store/model"



const modelOpe = useModel()
const isShake = ref<boolean>(false)

interface IconModel {
  clickModelVis: boolean,
  iconStatus: string,
  model: Array<string>
}
const iconModel = reactive<IconModel>({
  clickModelVis: false,
  iconStatus: '线性',
  model: ['线性', '实性']
})
const logoCss = computed(() => {
  return {
    'animate__animated': true,
    // 'animate__backInDown': true,
    'animate__swing': isShake.value
  }
})


const changeModel = (num: Number) => {
  console.log(num);
  if (num == 1) {
    modelOpe.editModel('left')
  } else {
    modelOpe.editModel('right')

  }
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