<template>
<div class="home-banner">
 <div class="banner-item">
  <div class="text">
    <h2>AX /AX R</h2>
    <p>智能 深度 清晰的显微镜</p>
    <div class="more-link">
      <a href="javascript:;">进一步了解  ></a>
      <a href="/product/1">  更多尼康产品  ></a>
    </div>
  </div>
  <img src="@/assets/home/prod1.png" alt="">
 </div>

  <div class="banner-item">
  <div class="text">
    <h2>1500 A2 XY</h2>
    <p>智能物联生物安全柜 ，APP实时监控</p>
    <div class="more-link">
      <a href="javascript:;">进一步了解  ></a>
      <a href="/product/2"> 更多海尔产品  ></a>
    </div>
  </div>
  <img src="@/assets/home/prod2.png" alt="">
 </div>
  <div class="banner-item">
  <div class="text">
    <h2>QuantStudioTM</h2>
    <p>前所未有的简易性，卓尔不群的灵活性</p>
    <div class="more-link">
      <a href="javascript:;">进一步了解  ></a>
      <a href="/product/3"> 更多ThermoFisher产品  ></a>
    </div>
  </div>
  <img src="@/assets/home/prod3.png" alt="">
 </div>
</div>

<div class="products">
  <div class="product-item" v-for="(item, index) in productMsg" :key="index">
      <div class="text">
        <h2>{{item.title}}</h2>
        <p>{{item.msg}}</p>
        <div class="more-link">
          <a href="javascript:;">进一步了解  ></a>
          <a :href="item.typeId">  {{item.type}}</a>
        </div>
      </div>

     <div class="img-box">
       <img :src="getImage(`home/prod${index+4}.png`)" :alt="item.title">
     </div>
  </div>
</div>

<div class="team">
 <div class="container">
   <a :href="teamlinks[index]" target="_blank" class="team-item" v-for="(item, index) in 8" :key="index">
    <img :src="getImage(`home/team${index+1}.png`)" alt="">
   </a>
 </div>
</div>

<div class="news">
  
  <div class="container">
    <div class="top">
    <h2>新闻</h2>
    <router-link to="/news">
    更多资讯 
    <svg width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 7H22L16.4127 1" stroke="#999999"/>
    </svg>

    </router-link>
  </div>
    <template v-for="(item, index) in news" :key="item.id">
    <router-link v-if="index < 3" :to="`/news/detail/${item.id}`" class="news-item">
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
  </template>
  </div>
</div>
</template>

<script setup>
import news from '@/data/news.json';
const getImage = (name) => new URL(`../assets/${name}`, import.meta.url).href
const getContent = (content) => content.replace(/%([^%]*)%/g, (c, v) => getImage(`news/${v}`))

const productMsg = [
  {
    title: '微量热泳动仪',
    msg: '轻松，快速，精准检测最具挑战的分子间相互作用',
    type:'更多NanoTemper产品  >',
    typeId: '/product/4',
    prosuctId: 75
  },
  {
    title: 'KINETIX',
    msg: '新一代大视野超高速 sCMOS 相机',
    type:'更多Teledyne Photometrics产品  > ',
    typeId: '/product/5',
    prosuctId: 83
  },
  {
    title: 'DEPArray',
    msg: '数字细胞分选平台',
    type:'更多Teledyne Photometrics产品  >',
    typeId: '/product/5',
    prosuctId: 97
  },
  {
    title: '世界级超薄切片机',
    msg: '为包括材料科学和细胞生物学在内的广泛领域提供纳米级研究设计样品制备解决方案',
    type:'更多NanoTemper产品  >',
    typeId: '/product/4',
    prosuctId: 1
  }
]

const teamlinks = [
'https://www.microscope.healthcare.nikon.com/zh_CN/products',
'http://www.imgccd.cn/',
'http://www.haier.bioon.com.cn/',
'https://nanotempertech.com/zh_cn/',
'https://www.thermofisher.cn/',
'https://www.photometrics.com/products'
]

const newsMsg = [
  {
    time: '2022.12.24',
    title: '风雨同舟，感恩九年，迎接十年！',
    img: '',
    content: '时光荏苒，岁月如梭，九年只是历史长河中的一刹那，却是那么的波澜壮阔。九年，给我们留下了宝贵的财富；九年，给我们留下了厚重的责任；九年，见证了昨日的栉风沐雨；九年，守望着明天的灿烂辉煌。富途锐在2013年成立的时候,还很小很小;到202...'
  },
  {
    time: '2022.12.24',
    title: '风雨同舟，感恩九年，迎接十年！',
    img: '',
    content: '时光荏苒，岁月如梭，九年只是历史长河中的一刹那，却是那么的波澜壮阔。九年，给我们留下了宝贵的财富；九年，给我们留下了厚重的责任；九年，见证了昨日的栉风沐雨；九年，守望着明天的灿烂辉煌。富途锐在2013年成立的时候,还很小很小;到202...'
  },
  {
    time: '2022.10.24',
    title: '富途锐祝广东省医学会第七次医院科研实验室建设与管理学...',
    img: '',
    content: ' 那，却是那么的波澜壮阔。九年，给我们留下了宝贵的财富；九年，给我们留下了厚重的责任；九年，见证了昨日的栉风沐雨；九年，守望着明天的灿烂辉煌。富途锐在2013年成立的时候,还很小很小;到202...'
  }
]
</script>
<style lang="scss" scoped>
img{
  max-width: 100%;
}
.home-banner{
  .banner-item{
    width: 100%;
    // height: 540px;
    background: #000;
    position: relative;
    margin-bottom: 10px;
    font-size: 0;
    overflow: hidden;
    text-align: center;
    height: 540px;
    img{
      max-width: 100%;
      position: relative;
      z-index: 1;
      transform: translateY(44px);
    }
    .text{
      padding-top: 40px;
    }

    &::after{
      content: "";
      display: block;
      width: 1148px;
      height: 371px;
      position: absolute;
      background: conic-gradient(from 180deg at 50% 50.13%, #933EFF 0deg, rgba(50, 255, 243, 0.33) 360deg);
      filter: blur(195px);
      z-index:  0;
      left: 0;
      right: 0;
      bottom: -50px;
      margin: auto;
    }
    &:nth-child(2)::after {
      background: conic-gradient(from 180deg at 50% 50.13%, #413EFF 0deg, rgba(50, 255, 243, 0.33) 360deg);
    }
    &:nth-child(3)::after{
      background: conic-gradient(from 180deg at 50% 50.13%, #F03EFF 0deg, rgba(50, 107, 255, 0.33) 360deg);
    }
  }
}

.text{
  // position: absolute;
  color: #fff;
  text-align: center;
  margin:0 auto ;
  position: relative;
  z-index: 1;
  padding-left: 50px;
  padding-right: 50px;
  h2{
    font-size: 52px;
  }
  p{
    font-size: 18px;
  }

  .more-link{
  margin-top: 20px;
}
  a{
  color: #fff;
  font-size: 16px;
  // margin-top: 20px;
  margin: 20px;
  }
}

.products{
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  
  .product-item{
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
    .text{
      padding-top: 60px;
    }
    .img-box{
      height: 280px;
      overflow: hidden;
      text-align: center;
    }
    img{
      position: relative;
      // transform: translateY(100px);
      z-index: 1;
      max-width: 516px;
    }

    &::after{
      content: "";
      display: block;
      width: 298px;
      height: 298px;
      position: absolute;
      background: conic-gradient(from 180deg at 50% 50%, rgba(251, 50, 255, 0.33) 0deg, #3E5DFF 163.12deg, rgba(251, 50, 255, 0.33) 360deg);
      filter: blur(187.5px);
      z-index:  0;
      left: 0;
      right: 0;
      bottom: -50px;
      margin: auto;
    }
  }
}
.team{
  width: 100%;
  background: #eee;
  padding: 86px 0; 
  .container{
    display: flex;
    flex-wrap: wrap;
  }
  .team-item{
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
  }
}
.news{
  background: #fff;
  padding: 123px 0 100px;
  .top{
    display: flex;
  align-items: center;
  justify-content: space-between;
  
    h2{
      font-size: 32px;
      font-weight: 600;
    }
    a{
      color: #999;
    }
  }
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

@media screen and (max-width: 1000px) {
  .products .product-item{
    width: calc(100% - 20px);
  }
  .text{
    h2{
      font-size: 40px;
    }
    p{
      font-size: 16px;
    }
    a{
      font-size: 14px;
    }
  }
  
  .home-banner .banner-item{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
     img{
      max-width: 80%;
    }
  }
}
@media screen and (max-width: 900px) {
.team .team-item{
  width: calc(33% - 28px);
}
.news{
  padding: 80px 0 ;
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
@media screen and (max-width: 500px) {
  .home-banner {
    .banner-item{
      height: auto;
      img{
        transform: unset;
        margin: 20px 0 0;
      }
    }
  }

  .products{
    .product-item{
      height: auto;
      .text{
        padding: 30px 20px 0;
      }
      .img-box{
        height: auto;
        margin-top: 20px;
      }
      img{
      max-width: 80%;
    }
    .more-link{
      a {
        display: block;
        margin: 8px;
      }
    }
    } 
  } 
  .team{
    padding: 30px 0;
    .team-item{
  width: calc(50% - 28px);
}
  }

  .news{

  }
}
</style>