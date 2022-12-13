<template>
<header :class="wrapShow &&['wrap-show']">
  <div class="mobile">
    <div class="btn" @click="wrapShow = !wrapShow">
      <span></span>
      <span></span>
    </div>
    <img alt="logo" class="logo" src="@/assets/logo.png" />
  </div>
   <div class="wrap">
     <div class="header-top container"> 
        <img alt="logo" class="logo" src="@/assets/logo.png" />
        <div class="search-box"> 
            <input type="text" v-model="searchkey" @keyup.enter="toSearch">
            <span @click="toSearch">搜索</span>
        </div>
     </div>
     <nav class="nav">
      <div class="container">
        <router-link v-for="item in navlist" :key="item.url" :to="item.url" :class="$route.name?.includes(item.name) && 'active'">{{item.title}}</router-link>
      </div>
        
     </nav>
   </div>

</header>

</template>

<style lang="scss" scoped>  
.mobile{
  display: none;
}
header .wrap{
  display: block;
}
.header-top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 109px;
  // img{
  //   width: 171px;
  //   height: 57px;
  // }
}
.search-box{
  display: flex;
  width: 405px;
  height: 42px;
  border: 1px solid #ccc;
  // border-radius: 8px;
  padding: 3px;
  
  input{
    border: none;
    flex: 1;
    outline: none;
    padding: 0 10px;
  }
  span{
    width: 80px;
    height: 34px;
    // border-radius: 6px;
    background: #333;
    color: #fff;
    font-size: 12px;
    line-height: 34px;
    text-align: center;
    cursor: pointer;
  }
}
.nav{
  padding-top: 2px;
  border-top: 1px solid #E6E6E6;
  &>div{
    display: flex;
    height: 50px;
  }
    
  a{
    height: 20px;
    line-height: 20px;
    padding: 12.5px 28px 15px;
    text-decoration: none;
    font-size: 14px;
    box-sizing: border-box;
    color: #999;
    border-top: 2.5px solid #fff;
    &.router-link-active ,&.active,&:hover{
      background: #fff;
      border-top: 2.5px solid #333;
      color: #333;
      font-weight: 600;
    }
  }
  

}

@media screen and (max-width: 700px) {
  .header-top{
    flex-direction: column;
    .search-box{
      width: 96%;
      margin-bottom: 10px;
    }
  }
  header{
    height: 50px;
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 9;
    .wrap{
      display: none;
    }
    &.wrap-show{
       .wrap{
          display: block;
          
        }
      .btn{
        span{
          &:nth-of-type(1) {
            transform: rotate(-45deg);
          }
          &:nth-of-type(2) {
            transform: rotate(45deg);
          }
        }
      }
    }
  }
  .logo{
    max-height: 30px;
    margin-top: 10px;
  }
  .wrap{
    // position: fixed;
    width: 100%;
    height: calc(100vh - 50px);
    z-index: 9;
    background: #fff;
    .logo{
      display: none;
    }
  }
  .header-top{
    height: auto;
    padding-top: 20px;
  }
  .nav{
    padding-top: 20px;
    margin-top: 10px;
    & > div{
    flex-direction: column;
    a{
      font-size: 16px;
      height: 40px;
      line-height: 40px;
      margin-bottom: 10px;
      border-top: none !important;
      padding: 0 28px 0;
    }
  }
  } 

  .mobile{
    display: block;
    position: relative;
    text-align: center;
    .btn{
      position: absolute;
      right: 22px;
      top: 0;
      bottom: 0;
      margin: auto;
      height: 14px;
    }
    span{
      position: relative;
      display: block;
      width: 22px;
      height: 2px;
      margin: 5px 0;
      border-radius: 2px;
      background: #333;
      transform-origin: 70% 50%;
      transition: all 0.3s ease;

    }
  }
  .wrap{
    display: none;

  }
}


</style>

<script setup>
import { ref, watch } from 'vue';
import {useRouter,useRoute} from 'vue-router';
const router = useRouter()
const route = useRoute()
const navlist = [
  {
    title: '首页',
    url: '/',
    name: 'home'
  },
  {
    title: '产品中心',
    url: '/product/1',
    name: 'product'
  },
  {
    title: '新闻资讯',
    url: '/news',
    name: 'news'
  },
  {
    title: '关于我们',
    url: '/about',
    name: 'about'
  },
  {
    title: '联系我们',
    url: '/contact',
    url: '/contact',
  }
]
const searchkey = ref(route.params.key || '')
const toSearch =() => {
  router.push({name: 'search', params: {key: searchkey.value}})
  wrapShow.value = false
}
const wrapShow = ref(false)
watch(() => route.path,  () => {
  wrapShow.value = false
})
</script>