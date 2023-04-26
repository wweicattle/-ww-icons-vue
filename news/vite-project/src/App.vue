<script setup lang="ts">
import { assertScopable } from '@babel/types'
import { ref, reactive, shallowRef } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

import { Plus } from '@wwcattlewei/icons-vue'
console.log(Plus)

window.pluswei = Plus
console.log(pluswei)
const g = ref(window.pluswei)

const ass: any = 'TqPlus'
const a = {
  as: shallowRef(null),
  ass: shallowRef(null)
}
let componentId: any = shallowRef(null)
// import('@wwcattlewei/icons-vue/es/plus/index.js').then((da) => {
//   console.log(da)
//   coms.value = da.default
// })
// const as: any = 'TqPlus'

// const as = reactive({ name: null })
// eslint-disable-next-line no-debugger
// debugger
let str = '@wwcattlewei/icons-vue/es/add-location/index.js'
const libName = 'lodash'
import(libName).then((da) => {
  console.log(da.default)
  // a.as.value = da.default
  // console.log(da.default.icons)
  // let { AddLocation } = da.default.icons
  // componentId.value = AddLocation
})
const add = () => {
  var head = document.getElementsByTagName('head')[0]
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = '@wwcattlewei/icons-vue/es/add-location/index.js'
  head.appendChild(script)
}
add()
// console.log(require)

// const as = require('./App.vue')
// console.log(as)

// let aa = () => import(str)
// aa().then(da => {
//   console.log(da);

// })
// console.log(as);
</script>

<template>
  111{{ g }}
  <component :is="g"></component>
  <pluswei />
  <div>
    <!-- 121323 <component :is="TqPlus" spin color="red" width="30px"></component> -->
    <!-- <as.name /> -->
    <!-- <TqPlus /> -->
    <!-- 111 -->
    <!-- <as /> -->
    <!-- {{ coms }} -->
    <!-- <coms /> -->
    <!-- <tq-plus color="red" spin /> -->
    <!-- <component :is="a"></component> -->
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
