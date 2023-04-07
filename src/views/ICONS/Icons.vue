<template>
  <div class="icons_contain">
    <icon-wrapper v-model:visble='iconShowVisbility' @selecIcon="selectIcon.iconComponentBtn" />
    <Tool v-model:visble='iconShowVisbility' :iconComponent="selectIcon.iconComponent" :key="Date.now()"
      />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, markRaw } from 'vue'
import Tool from './tool/index.vue'
import iconWrapper from './icons/index.vue'
import { useUserStore } from '@/store'
const store = useUserStore()
const selectIcon = reactive<Record<string, any>>({
  iconComponentBtn: (val: Record<string, any>) => {
    // selectIcon.iconComponent = toRaw(val)
    store.editIcons({ iconComponent: markRaw(val) })
  },
  iconComponent: null
})
const iconShowVisbility = ref<boolean>(false)
</script>

<style lang="less" scoped>
.icons_contain {
  flex: 1;
  padding:0  40px;
  // margin: 0 0 0 40px;
}
</style>