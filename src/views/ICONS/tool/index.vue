<template>
  <div class="mask-contain_detail align-item" v-if="visble">
    <div class="ope_item">
      <left-tool />
    </div>
    <div class="ope_icon">
      <icon-show />
    </div>
    <div class="ope_code_text">
      <right-code @changeVis="changeVis" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import leftTool from './section/leftTool.vue'
import iconShow from './section/iconShow.vue'
import rightCode from './section/rightCode.vue'

let emits = defineEmits(['update:visble'])
//

const props = defineProps({
  visble: {
    type: Boolean,
    default: false
  }
})

const changeVis = () => {
  emits('update:visble', !props.visble)
}
</script>

<style lang="less" scoped>
.mask-contain_detail {
  width: 600px;
  height: 200px;
  background: #fff;
  box-shadow: 0 15px 35px 0 rgb(60 66 87 / 8%), 0 5px 15px 0 rgb(0 0 0 / 12%);
  border-radius: 20px;
  padding: 20px;
  position: fixed;
  right: 20px;
  bottom: 20px;

  & > div {
    height: 100%;
  }

  .ope_item {
    width: 30px;
    overflow: hidden;
  }

  .ope_icon {
    width: 200px;
    margin: 0 10px;
  }

  .ope_code_text {
    width: 360px;
  }
}
</style>
