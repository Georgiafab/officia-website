<script setup>
import { provide, ref } from 'vue';
import { RouterLink, RouterView, useRoute  } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';
const getImage = (name) => new URL(`../assets/${name}`, import.meta.url).href
const routerKey = ref(1)
const reload = () => {
  routerKey.value++
}
provide('getImage', getImage)
provide('reload', reload)
</script>

<template>

  <Header :key="$route.params.key"/>
  <router-view v-slot="{ Component }">
    <!-- <transition mode="in-out"> -->
      <component :is="Component" :key="routerKey" />
    <!-- </transition> -->
  </router-view>
  <Footer />
</template>

<style scoped>
header+header{
  display: none;
}
</style>
