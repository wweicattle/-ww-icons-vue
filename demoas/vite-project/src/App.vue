<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

// import  {AddLocation}  from '@wwcattlewei/icons-vue/es';
</script>

<template>
  <div>
  <!-- <Button size="mini" type="dashed">sadasd</Button> -->
  <tq-add-location width="30px" spin color="#008c8c"/> 
  <tq-plus width="20px" spin/>
  <sas>323</sas>
    <!-- <avatar color="red" spin width="30px" />
      <Plus width="20px" spin/>
      <Aim />
      <AddLocation />
      <Ass />
      <AddLocation width="30px" spin color="#008c8c"/> -->
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
