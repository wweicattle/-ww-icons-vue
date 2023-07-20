<template>
  <div class="icon-contain">
    <div class="icon_header">
      <Header />
    </div>
    <div class="icon_content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Header from '@/views/Header/index.vue'
// import { Icon } from '@iconify/vue'
</script>
