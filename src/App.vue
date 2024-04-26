<script setup>
import { provide, ref } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import { getCompanyDetail, getBannerList } from "@/utils/api";
// import HelloWorld from './components/HelloWorld.vue'
// import VConsole from "vconsole";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
const getImage = (name) => new URL(`../assets/${name}`, import.meta.url).href;

const routerKey = ref(1);
const loading = ref(false);

const siteData = ref({});

getCompanyDetail().then((res) => {
  siteData.value.company = res.data;
});
getBannerList().then((res) => {
  siteData.value.banner = res.data;
});
const reload = () => {
  routerKey.value++;
  // location.reload();
};
provide("getImage", getImage);
provide("reload", reload);
provide("loading", loading);
provide("siteData", siteData);
// const vConsole = new VConsole();
</script>

<template>
  <Header :key="$route.params.key" />
  <div class="loading" v-show="loading">
    <img src="@/assets/loading.png" alt="" />
    <p style="margin-top: 10px">加载中</p>
  </div>
  <div>
    <router-view v-slot="{ Component }">
      <!-- <transition mode="in-out"> -->
      <component :is="Component" :key="routerKey" />
      <!-- </transition> -->
    </router-view>
  </div>
  <Footer />
</template>

<style scoped lang="scss">
header + header {
  display: none;
}
.loading {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  flex-direction: column;
  font-size: 20px;
  img {
    animation: 1s linear infinite reverse both running xuz;
  }
}
@keyframes xuz {
  // 0% {
  //   transform: rotate(-360deg);
  // }
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-360deg);
  }
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
