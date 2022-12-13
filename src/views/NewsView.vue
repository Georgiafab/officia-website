<template>
  <div class="banner">
    <img src="@/assets/news/banner.png" alt="new-banner">
    <div class="crumbs container">
      <h1>新闻资讯<span>/ News Center</span></h1>
    </div>
  </div>

  

  <main class="container">
    <div class="news-content">
      <router-link v-for="item in news" :key="item.id" :to="`/news/detail/${item.id}`" class="news-item">
        <div class="time">
          {{item.time}}
        </div>
        <div class="img">
          <img :src="getImage(`news/new${item.id}/img${item.id}-1.jpg`)" :alt="item.title">
        </div>
        <div class="content">
          <h2>{{item.title}}</h2>
          <p class="mx" v-html="getContent(item.content)"></p>
        </div>
    </router-link>
    </div>

   <el-pagination class="pagination" layout="prev, pager, next" :total="news.length" :pager-count="3" />
  </main>
</template>


<script setup>
import news from '@/data/news.json';
// import { inject } from 'vue';
// const getImage=inject('getImage')
const getImage = (name) => new URL(`../assets/${name}`, import.meta.url).href

const getContent = (content) => content.replace(/%([^%]*)%/g, (c, v) => getImage(`news/${v}`))
</script>
<style lang="scss" scoped>

.news-content{
  padding:60px;  
}
.news-item{
  display: flex;
  padding-bottom: 40px;
  border-bottom: 1px solid #d9d9d9;
  cursor: pointer;
  text-decoration: none;
  color: #333;
  &:not(:first-child){
    padding-top: 40px;
  }
  &:hover{
    border-color: #333;
    h2{
      text-decoration: underline;
    }
  }
  .time{
  font-size: 22px;
  font-weight: 200;
  width: 110px;
  flex-shrink: 0;
}
.img{
  margin: 0 30px 0 112px;
  width: 220px;
  flex-shrink: 0;
  max-height: 138px;
  overflow: hidden;
  img{
    width: 100%;
    max-width: unset;
  }
}
.content{
  h2{
    font-size: 22px;
  }
  :deep(.mx){
    *{
      display: none;
    }
    p:first-child{
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

@media screen and (max-width: 900px) {
  .news-content{
    padding: 40px 0 ;
    .news-item{
      flex-wrap: wrap;
      .time{
        flex: 1;
      }
      .img{
        margin: 0 30px 0 0;
      }
      .content{
        width: 100%;
        margin-top: 20px;
      }
    }
  }
}
</style>

<script>
</script>