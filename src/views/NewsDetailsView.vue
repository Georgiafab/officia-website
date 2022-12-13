<template>
  <div class="banner">
    <img src="@/assets/news/banner.png" alt="new-banner">
    <div class="crumbs container">
      <h1>新闻资讯<span>/ News Center</span></h1>
    </div>
  </div>


  <main class="container new-container">
   <div class="top">
     <h1>{{detail?.title}}</h1>
    <p class="time">{{detail?.time}}</p>
   </div>
    <div class="content" v-html="content">
       
    </div>
  </main>
  <!-- @/assets/news/new2/img2-4.jpg -->
  <div class="container">
    <div class="guidance ">
        <router-link :to="toMsg(index-1).link">
            {{toMsg(index-1, '上').title}}
        </router-link>
        <router-link :to="toMsg(index+1).link">
            {{toMsg(index+1, '下').title}}
        </router-link>
    </div>
  </div>
  
</template>

<script setup>
import news from '@/data/news.json';
import {useRoute} from 'vue-router';
import { inject, watch } from 'vue';
const route = useRoute()
const id = route.params.id
const getImage = (name) => new URL(`../assets/${name}`, import.meta.url).href
const index = news.findIndex(item => item.id == id)
const detail = news[index]
const content = detail.content.replace(/%([^%]*)%/g, (c, v) => getImage(`news/${v}`))
const reload = inject('reload')
const toMsg = (i, t) => {
    return {
        link: news[i] ? `/news/detail/${news[i]?.id}` : '/news',
        title: news[i]?.title? `${t}一篇：${news[i].title}` : '返回新闻资讯'
    }
}
watch(() => route.params.id, () => {
    reload()
})
</script>

<style lang="scss" scoped>
.new-container{
    padding: 50px 100px 100px;
    font-size: 18px;
    color: #333;
    box-sizing: border-box;
    .top{
        border-bottom: 1px solid #D9D9D9;
        text-align: center;
        margin-bottom: 60px;
    }
    h1{
        font-size: 22px;
        font-weight: 600;
    }
    .time{
        font-size: 18px;
        font-weight: 200;
        padding: 20px 0 32px;
    }
    :deep(.content){
        img{
            display: block;
            margin: 0 auto 50px;
        }
        p{
            margin-bottom: 20px;
            text-indent: 36px;
            font-weight: 400;
            line-height: 36px;
        }
        h3{
            margin: 50px 0 20px;
            font-size: 24px;
            font-weight: 500;
            text-align: center;
        }
    }
    
}
.guidance{
    display: flex;
    margin-top: 40px;
    margin-bottom: 100px;
    justify-content: space-between;
    a{
        color: #999;

        font-size: 16px;
    }
}

@media screen and (max-width: 800px) {
    .new-container{
        padding: 50px 20px;
        .top{
            margin-bottom: 30px;
        }
    }

}
</style>