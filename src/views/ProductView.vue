<template>
  <div class="banner">
    <!-- :loop="true" -->
      <swiper
        class="product-banner"
        :slides-per-view="1"
        :loop="true"
        :autoplay="true"
        :modules="[Pagination,Autoplay]"
        :pagination="{ clickable: true }"
        >
        <swiper-slide>
          <img src="@/assets/products/banner/banner1.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/products/banner/banner2.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/products/banner/banner3.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/products/banner/banner4.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/products/banner/banner5.jpg" alt="">
        </swiper-slide>
         
        <swiper-slide>
           <video loop muted src="@/assets/products/banner/prodvideo2.mp4" autoplay alt="" />
        </swiper-slide>
        <swiper-slide>
           <video loop muted src="@/assets/products/banner/prodvideo3.mp4" autoplay alt="" />
        </swiper-slide>
        <swiper-slide>
          <video loop muted src="@/assets/products/banner/prodvideo1.mp4" autoplay alt="" />
        </swiper-slide>
      </swiper>
    <div class="crumbs container">
      <h1>产品中心<span>/ Product center</span></h1>
    </div>
  </div>
  <main class="container prod-content">
    <div class="brand">
      <router-link v-for="item in brandList"  :class="`brand-item ${item.brand_id == $route.params.brand? 'active': ''}`" :to="`/product/${item.brand_id}`" :key="item.brand_id">{{ item.brand_name }}</router-link>
    </div>

    <div class="classfiy">
      <router-link :to="{name: 'product', params: {brand: $route.params.brand, classfiy: 0}}" :class="`classfiy_item ${0 == $route.params.classfiy ? 'active' : ''}`">全部</router-link>
      <template v-for="classfiy in classfiyList" :key="classfiy.id">
        <router-link v-if="classfiy.brand_id == $route.params.brand"
        :class="`classfiy_item ${classfiy.id == $route.params.classfiy ? 'active' : ''}`"
        :to="{name: 'product', params: {brand: classfiy.brand_id, classfiy: classfiy.id}}"
        >{{classfiy.classfiy_name}}
        </router-link>
      </template>
      
    </div>

    <div class="product">
      <template v-for="product in productList" :key="product.product_id">
        <ProductItem @click="dialogshow=true;proItem=product" :class="!product.detail_pdf && 'red'" :proItem="product" v-if="$route.params.classfiy == 0 ? product.brand_id == $route.params.brand : product.classfiy_id == $route.params.classfiy" />
      </template>
    </div>

  <productDialog v-model="dialogshow" :proItem="proItem" />
  </main>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
import {ref} from 'vue';
// import {useRoute} from 'vue-router';
import brandList from '@/data/product.brand.json';
import classfiyList from '@/data/product.classfiy.json';
import productList from '@/data/product.list.json';
import ProductItem from '../components/ProductItem.vue';
import productDialog from '../components/productDialog.vue';

const dialogshow = ref(false)
const proItem = ref()
const getImage = (name) => {new URL(`../assets/${name}`, import.meta.url).href}

</script>

<style  lang="scss" scoped>
.product-banner{
  position: absolute;
  height: 100%;
  font-size: 100px;
  width: 100%;
  color: #fff;
  z-index: 0;
  :deep(.swiper-slide){
    overflow: hidden;
    &::after{
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      background: rgba($color: #000000, $alpha: 0.3);
    }
    video, img{
      min-width: 100%;
      min-height: 100%;
      // position: absolute;
      // top: 50%;
      // left: 0;
      // transform: translateY(-50%);
    }
  }
  :deep(.swiper-pagination){
    bottom: 220px;
    width: 1200px;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    justify-content: flex-end;
    z-index: 2;
    .swiper-pagination-bullet{
      width: 74px;
      height: 20px;
      background: transparent !important;
      margin: 0;
      &::after{
        content: "";
        display: block;
        width: 74px;
        height: 2px;
        background: rgba(255, 255, 255, 0.4);
        margin: 0;
        border-radius: 0 !important;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto ;
      }
      &.swiper-pagination-bullet-active{
        background: rgba(255, 255, 255, 0.4);;
      }
    }
  }

}
.crumbs{
  position: relative;
  z-index: 2;
  pointer-events: none;
}
ul, li{
  list-style: none;
}
.prod-content{
  padding: 40px;
}

.brand{
  display: flex;
    margin-left: -24px;
    flex-wrap: wrap;
  .brand-item{
    padding: 14px 20px;
    background: #EFEFEF;
    margin-left: 24px;
    font-size: 16px;
    line-height: 22.4px;
    cursor: pointer;
    color: #000;
    margin-bottom: 20px;
    text-decoration: none;
    border: 1px solid #EFEFEF;
    &.active {
      background: #333;
      color: #fff;
    }
    &:hover{
      border: 1px solid #333;
    }
  }
}
.classfiy{
  display: flex;
  flex-wrap: wrap;
  margin-left: -26px;
  .classfiy_item{
    color: #999;
    margin-left: 26px;
    font-size: 16px;
    margin-bottom: 14px;
    text-decoration: none;
    font-weight: 400;
    &.active{
      color: #333;
      font-weight: 600;
    }
    &:hover{
      color: #333;
    }
  }
}
.product{
   display: flex;
  margin-left: -26px;
  padding-top: 4px;
  flex-wrap: wrap;
}
@media screen and (max-width: 1300px) {
  .prod-content{
    
  }
  :deep(.swiper-pagination){
    bottom: 50px !important;
    justify-content: center !important;
  }
}

@media screen and (max-width: 900px) {
  .prod-content{
    padding: 30px 20px;
  }
  :deep(.swiper-pagination){
    display: none !important;
  }
  
}

:deep(.red){
  background: red;
}


</style>