<template>
  <div class="home-banner">
    <div
      class="banner-item"
      v-for="item in indexData.productindex"
      :key="item.prosuctId"
    >
      <div class="text">
        <h2>{{ item.product_name }}</h2>
        <p>{{ item.msg }}</p>
        <div class="more-link">
          <a
            href="javascript:;"
            @click="
              dialogshow = true;
              proItem = item;
            "
            >进一步了解&nbsp;&nbsp;></a
          >
          <a :href="item.typeId" v-html="item.type"> </a>
        </div>
      </div>
      <img :src="item.prod_img" alt="" />
    </div>
  </div>

  <div class="products">
    <div
      class="product-item"
      v-for="(item, index) in indexData.productmsg"
      :key="index"
    >
      <div class="text">
        <h2>{{ item.product_name }}</h2>
        <p>{{ item.msg }}</p>
        <div class="more-link">
          <a
            @click="
              dialogshow = true;
              proItem = item;
            "
            href="javascript:;"
            >进一步了解&nbsp;&nbsp; ></a
          >
          <a :href="item.typeId" v-html="item.type"></a>
        </div>
      </div>

      <div class="img-box">
        <img :src="item.prod_img" :alt="item.title" />
      </div>
    </div>
  </div>

  <div class="team">
    <div class="container">
      <a
        :href="item.url"
        target="_blank"
        class="team-item"
        v-for="(item, index) in indexData.teamlinks"
        :key="index"
      >
        <img :src="item.src" alt="" />
      </a>
    </div>
  </div>

  <div class="news">
    <div class="container">
      <div class="top">
        <h2>新闻</h2>
        <router-link to="/news">
          更多资讯
          <svg
            width="24"
            height="8"
            viewBox="0 0 24 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 7H22L16.4127 1" stroke="#999999" />
          </svg>
        </router-link>
      </div>
      <template v-for="item in indexData.newsMsg" :key="item._id">
        <router-link :to="`/news/detail/${item.enTitle}`" class="news-item">
          <div class="time">
            {{ item.time }}
          </div>
          <div class="m-time" v-html="item.mtime"></div>
          <div class="img">
            <img :src="item.cover" :alt="item.title" />
          </div>
          <div class="content">
            <h2>{{ item.title }}</h2>
            <p class="mx">
              {{ item.desc }}
            </p>
          </div>
        </router-link>
      </template>
    </div>
  </div>

  <productDialog v-model="dialogshow" :proItem="proItem" />
</template>

<script setup>
import { ref, inject } from "vue";
import productDialog from "../components/productDialog.vue";
import { getHomeIndex } from "@/utils/api";

// import news from '@/data/news.json';
const getImage = (name) => new URL(`../assets/${name}`, import.meta.url).href;
// const getContent = (content) => content.replace(/%([^%]*)%/g, (c, v) => getImage(`news/${v}`))
const dialogshow = ref(false);
const proItem = ref();
const loading = inject("loading");
const indexData = ref({ productindex: [{}, {}, {}, {}] });
loading.value = true;
getHomeIndex()
  .then((res) => {
    indexData.value = res.data;
  })
  .finally(() => {
    loading.value = false;
  });
</script>
<style lang="scss" scoped>
img {
  max-width: 100%;
  transition: all 0.3s ease;
}
.home-banner {
  background-color: #1e1e1e;
  .banner-item {
    width: 100%;
    min-height: 340px;
    background-color: #000;
    position: relative;
    margin-bottom: 10px;
    font-size: 0;
    overflow: hidden;
    text-align: center;
    height: 540px;
    background-position: center center;
    // &:nth-of-type(n+1){
    //   background-image: url(../assets/home/1.jpg);
    // }
    // &:nth-of-type(2) {
    //   background-image: url(../assets/home/2.jpg);
    // }
    img {
      max-width: 100%;
      position: relative;
      z-index: 1;
      transform: translateY(44px);
      max-width: 600px;
      &:hover {
        transform: translateY(44px) scale(1.1);
      }
    }
    .text {
      padding-top: 40px;
    }

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      background: url(../assets/home/1.jpg) center center #000;
      // background: conic-gradient(from 180deg at 50% 50.13%, #933EFF 0deg, rgba(50, 255, 243, 0.33) 360deg);
      filter: blur(50px);
      -webkit-filter: blur(50px);
      -moz-filter: blur(50px);
      -o-filter: blur(50px);
      z-index: 0;
      left: 0;
      right: 0;
      // bottom: -50px;
      top: 0;
      margin: auto;
    }
    &:nth-child(2)::after {
      background-image: url(../assets/home/2.jpg);

      // background: conic-gradient(from 180deg at 50% 50.13%, #413EFF 0deg, rgba(50, 255, 243, 0.33) 360deg);
    }
    // &:nth-child(3)::after{
    //   background: conic-gradient(from 180deg at 50% 50.13%, #F03EFF 0deg, rgba(50, 107, 255, 0.33) 360deg);
    // }
  }
}

.text {
  // position: absolute;
  color: #fff;
  text-align: center;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  padding-left: 50px;
  padding-right: 50px;
  h2 {
    font-size: 52px;
  }
  p {
    font-size: 18px;
  }

  .more-link {
    margin-top: 20px;
  }
  a {
    color: #fff;
    font-size: 16px;
    // margin-top: 20px;
    margin: 20px;
    transition: all 0.3s;
    &:hover {
      text-decoration: none;
      color: #21a2ff;
    }
  }
}

.products {
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;

  .product-item {
    margin: 10px;
    // flex: 1;
    width: calc(50% - 20px);
    box-sizing: border-box;
    background: #000;
    position: relative;
    overflow: hidden;
    height: 540px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .text {
      padding-top: 60px;
    }
    .img-box {
      height: 280px;
      // overflow: hidden;
      text-align: center;
    }
    img {
      position: relative;
      // transform: translateY(100px);
      z-index: 1;
      max-width: 516px;
      &:hover {
        transform: scale(1.1);
      }
    }

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      background: url(../assets/home/4.jpg) center center #000;
      // background: conic-gradient(from 180deg at 50% 50%, rgba(251, 50, 255, 0.33) 0deg, #3E5DFF 163.12deg, rgba(251, 50, 255, 0.33) 360deg);
      filter: blur(50px);
      -webkit-filter: blur(50px);
      -moz-filter: blur(50px);
      -o-filter: blur(50px);
      z-index: 0;
      left: 0;
      right: 0;
      top: 0;
      // bottom: -50px;
      margin: auto;
    }
  }
}
.team {
  width: 100%;
  background: #1e1e1e;
  padding: 86px 0;
  .container {
    display: flex;
    flex-wrap: wrap;
  }
  .team-item {
    width: calc(25% - 28px);
    background: #fff;
    border-radius: 8px;
    margin: 14px;
    height: 120px;
    text-align: center;
    font-size: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
}
.news {
  background: #fff;
  padding: 123px 0 100px;
  .m-time {
    display: none;
  }
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 32px;
      font-weight: 600;
    }
    a {
      color: #999;
      text-decoration: none;
      svg {
        width: 22px;
        height: 6px;
        margin-left: 8px;
        margin-bottom: 3px;
        transition: all 0.3s ease;
      }
      &:hover {
        // text-decoration: underline;
        svg {
          transform: translateX(3px);
        }
      }
    }
  }
}
.news-item {
  display: flex;
  padding-bottom: 40px;
  border-bottom: 1px solid #d9d9d9;
  position: relative;
  cursor: pointer;
  text-decoration: none;
  color: #333;
  &:not(:first-child) {
    padding-top: 40px;
  }
  h2 {
    position: relative;
  }

  &::after {
    content: "";
    position: absolute;
    display: block;
    height: 1px;
    background: #333;
    width: 0;
    transition: all 1s ease;
    bottom: 0;
  }
  &:hover {
    // border-color: #333;
    &::after {
      width: 100%;
    }
    h2 {
      text-decoration: underline;
    }
  }
  .time {
    font-size: 22px;
    font-weight: 200;
    width: 110px;
    flex-shrink: 0;
  }
  .img {
    margin: 0 30px 0 112px;
    width: 220px;
    flex-shrink: 0;
    max-height: 138px;
    overflow: hidden;
    img {
      width: 100%;
      max-width: unset;
    }
  }
  .content {
    h2 {
      font-size: 22px;
    }
    :deep(.mx) {
      * {
        display: none;
      }
      p:first-child {
        display: block;
      }
      margin-top: 17px;
      font-size: 16px;
      color: #666;
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
}

@media screen and (max-width: 1000px) {
  .products .product-item {
    width: calc(100% - 20px);
  }
  .text {
    h2 {
      font-size: 40px;
    }
    p {
      font-size: 16px;
    }
    a {
      font-size: 14px;
    }
  }

  .home-banner .banner-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    img {
      max-width: 80%;
    }
  }
}
@media screen and (max-width: 900px) {
  .team .team-item {
    width: calc(33% - 28px);
  }
  .news {
    padding: 80px 0;
    .news-item {
      flex-wrap: wrap;
      .time {
        flex: 1;
      }
      .img {
        margin: 0 30px 0 0;
      }
      .content {
        width: 100%;
        margin-top: 20px;
      }
    }
  }
}
@media screen and (max-width: 550px) {
  .home-banner {
    .banner-item {
      height: auto;
      img {
        transform: unset;
        margin: 20px 0 0;
      }
    }
  }
  .more-link {
    a {
      display: block;
      margin: 8px;
    }
  }

  .products {
    .product-item {
      height: auto;
      .text {
        padding: 30px 20px 0;
      }
      .img-box {
        height: auto;
        margin-top: 20px;
      }
      img {
        max-width: 80%;
      }
    }
  }
  .team {
    padding: 30px 10px;
    .container {
      padding-left: 10px;
      padding-right: 10px;
    }
    .team-item {
      width: calc(50% - 18px);
      height: 80px;
      // padding: 10px;
      overflow: hidden;
      margin: 9px;
      border-radius: 6px;
    }
  }

  .news {
    .top {
      margin-bottom: 30px;
    }
    :deep(.m-time) {
      display: block;
      span {
        display: block;
        font-size: 14px;
      }
      span:nth-of-type(1) {
        display: block;
        font-size: 18px;
        font-weight: 600;
      }
    }
    .time {
      display: none;
    }
    .news-item {
      background: #efefef;
      padding: 20px 20px 30px;
      margin-bottom: 20px;
      border: none;
      display: flex;
      justify-content: space-between;
      &::after {
        display: none;
      }
      .img {
        margin: 0;
        border-radius: 4px;
      }
    }
  }
}
</style>
<style></style>
