<script setup>
import { provide, ref } from 'vue';
import { RouterLink, RouterView, useRoute  } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';
const getImage = (name) => new URL(`../assets/${name}`, import.meta.url).href
const routerKey = ref(1)
const loading = ref(false)
const reload = () => {
  routerKey.value++
}
provide('getImage', getImage)
provide('reload', reload)
provide('loading', loading)

</script>

<template>

  <Header :key="$route.params.key"/>
  <div v-loading="loading"   >
    <router-view v-slot="{ Component }">
    <!-- <transition mode="in-out"> -->
      <component :is="Component" :key="routerKey" />
    <!-- </transition> -->
   </router-view>
  </div>
  <Footer />
</template>

<style scoped lang="scss">
header+header{
  display: none;
}

// :deep(.el-loading-spinner) {
//   background: url("@/assets/loading.png") no-repeat;
//   background-size: cover;
//   // animation: 1s linear infinite reverse both running xuz;
//   svg{
//     display: none;
//   }
// }
// @keyframes xuz {
//   0% {
//     transform: rotate(0);
//   }
//   100% {
//     transform: rotate(-360deg);
//   }
// }
</style>
