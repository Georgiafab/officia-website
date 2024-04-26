<template>
  <div>
    <div class="banner">
      <!-- :loop="true" -->
      <swiper
        class="product-banner"
        :slides-per-view="1"
        :loop="true"
        :autoplay="true"
        :modules="[Pagination, Autoplay]"
        :pagination="{ clickable: true }"
      >
        <swiper-slide v-for="item in siteData.banner.products" :key="item.key">
          <!-- <el-image
            :key="item.value"
            :src="item.value"
            lazy
            v-if="item.isImage"
          ></el-image> -->
          <img :src="item.value" alt="" v-if="item.isImage" />
          <video loop muted :src="item.value" autoplay v-else alt="" />
        </swiper-slide>
      </swiper>
      <div class="crumbs container">
        <h1>产品中心<span>/ Product center</span></h1>
      </div>
    </div>
    <main class="container prod-content">
      <div class="brand">
        <router-link
          v-for="item in brandList"
          :class="`brand-item ${item.enTitle == brand ? 'active' : ''}`"
          :to="`/product/${item.enTitle}`"
          :key="item.enTitle"
          >{{ item.brand_name }}</router-link
        >
      </div>

      <div class="classfiy">
        <router-link
          :to="{
            name: 'product',
            params: { brand: brand, classfiy: '' },
          }"
          :class="`classfiy_item ${0 == classfiy ? 'active' : ''}`"
          >全部</router-link
        >
        <template
          v-for="classfiyItem in classfiyList"
          :key="classfiyItem.enTitle"
        >
          <router-link
            :class="`classfiy_item ${
              classfiyItem.enTitle == classfiy ? 'active' : ''
            }`"
            :to="{
              name: 'product',
              params: {
                brand: classfiyItem.brand_id.enTitle,
                classfiy: classfiyItem.enTitle,
              },
            }"
            >{{ classfiyItem.classfiy_name }}
          </router-link>
        </template>
      </div>

      <div class="product">
        <template v-for="product in productList" :key="product._id">
          <ProductItem
            @click="
              dialogshow = true;
              proItem = product;
            "
            :class="!product.detail_pdf && 'red'"
            :proItem="product"
          />
        </template>
      </div>

      <productDialog v-model="dialogshow" :proItem="proItem" />
    </main>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import { inject, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getBrandList, getClassifyList, getProductList } from "@/utils/api";
import ProductItem from "../components/ProductItem.vue";
import productDialog from "../components/productDialog.vue";
const route = useRoute();
const router = useRouter();
const siteData = inject("siteData");
const { brand, classfiy } = route.params;
const brandList = ref([]);
const classfiyList = ref([]);
const productList = ref([]);
const dialogshow = ref(false);
const proItem = ref();
const reload = inject("reload");
const loading = inject("loading");
const size = 1000;

loading.value = true;
getBrandList({ size })
  .then((res) => {
    brandList.value = res.data.list;
    if (!brand) {
      router.replace({
        name: "product",
        params: {
          brand: res.data.list[0].enTitle,
        },
      });
    }
  })
  .finally(() => {
    loading.value = false;
  });

getClassifyList({ size, brand_id: brand })
  .then((res) => {
    classfiyList.value = res.data.list;
  })
  .finally(() => {
    loading.value = false;
  });

getProductList({ size, brand_id: brand, classfiy_id: classfiy })
  .then((res) => {
    productList.value = res.data.list;
    document.title = `${productList.value[0].brand_id.brand_name}-${productList.value[0].classfiy_id.classfiy_name}-深圳市富途锐科技发展有限公司`;
  })
  .finally(() => {
    loading.value = false;
  });

watch(
  () => route.params,
  () => {
    reload();
  }
);
</script>

<style lang="scss" scoped>
.product-banner {
  position: absolute;
  height: 100%;
  font-size: 100px;
  width: 100%;
  color: #fff;
  z-index: 0;
  :deep(.swiper-slide) {
    overflow: hidden;
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      background: rgba($color: #000000, $alpha: 0.3);
    }
    video,
    img {
      min-width: 100%;
      min-height: 100%;
      // position: absolute;
      // top: 50%;
      // left: 0;
      // transform: translateY(-50%);
    }
  }
  :deep(.swiper-pagination) {
    bottom: 220px;
    width: 1200px;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    justify-content: flex-end;
    z-index: 2;
    .swiper-pagination-bullet {
      width: 74px;
      height: 20px;
      background: transparent !important;
      margin: 0;
      &::after {
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
        margin: auto;
      }
      &.swiper-pagination-bullet-active {
        background: rgba(255, 255, 255, 0.4);
      }
    }
  }
}

.crumbs {
  position: relative;
  z-index: 2;
  pointer-events: none;
}
ul,
li {
  list-style: none;
}
.prod-content {
  padding: 40px;
}

.brand {
  display: flex;
  margin-left: -24px;
  flex-wrap: wrap;
  .brand-item {
    padding: 14px 20px;
    background: #efefef;
    margin-left: 24px;
    font-size: 16px;
    line-height: 22.4px;
    cursor: pointer;
    color: #000;
    margin-bottom: 20px;
    text-decoration: none;
    border: 1px solid #efefef;
    &.active {
      background: #333;
      color: #fff;
    }
    &:hover {
      border: 1px solid #333;
    }
  }
}
.classfiy {
  display: flex;
  flex-wrap: wrap;
  margin-left: -26px;
  .classfiy_item {
    color: #999;
    margin-left: 26px;
    font-size: 16px;
    margin-bottom: 14px;
    text-decoration: none;
    font-weight: 400;
    &.active {
      color: #333;
      font-weight: 600;
    }
    &:hover {
      color: #333;
    }
  }
}
.product {
  display: flex;
  margin-left: -26px;
  padding-top: 4px;
  flex-wrap: wrap;
}
@media screen and (max-width: 1300px) {
  .prod-content {
  }
  :deep(.swiper-pagination) {
    bottom: 50px !important;
    justify-content: center !important;
  }
}

@media screen and (max-width: 900px) {
  .prod-content {
    padding: 30px 20px;
  }
  :deep(.swiper-pagination) {
    display: none !important;
  }
}

:deep(.red) {
  background: red;
}
</style>
