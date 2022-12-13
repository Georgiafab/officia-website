<template>
<main class="container">
    <div class="search-box">
        <input type="text" v-model="searchkey" @keyup.enter="toSearch">
        <div class="search-btn" @click="toSearch">
            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.84615" cy="7.84615" r="7.09615" stroke="white" stroke-width="1.5"/>
                <path d="M12 13L15.9231 16.9231" stroke="white" stroke-width="1.5"/>
            </svg>
            <span >搜 索</span>

        </div>
    </div>

    <div class="product-box">
        <template v-if="JSON.stringify(searchList) == '{}'">
            <p>很抱歉，未能找寻到符合条件的产品，请到重新填写参数查询！</p>
            <div class="content">
                <div class="item">
                    <div class="item-brand">很抱歉，未能找到符合条件的产品</div>
                    <img class="empty-img" src="@/assets/empty.svg" alt="" >
                </div>
                
            </div>
        </template>
        <template v-else>
            <p >根据您查找的条件以为您找寻到以下符合条件的产品</p>
            <div class="content">
                <div class="item" v-for="(list, b) in searchList" :key="b">
                    <div class="item-brand">{{b}}</div>
                    <div class="item-list" >
                        <ProductItem v-for="item in list" :key="item.product_id" :proItem="item"  />
                        <!-- <div class="product-item" >
                            <img :src="getImage(`products/${item.product_image}`)" :alt="item.product_name">
                            <p class="title">{{item.product_name}}</p>
                        </div> -->
                    </div>
                </div>
            </div>
        </template>
        
    </div>
</main>
</template>

<script setup>
import {ref, watch} from 'vue'
import {useRouter, useRoute} from 'vue-router';
import productList from '@/data/product.list.json';
import ProductItem from '../components/ProductItem.vue';
const router = useRouter();
const route = useRoute()
const searchkey = ref(route.params.key)
const searchList = ref({})
const getImage = (name) => new URL(`../assets/${name}`, import.meta.url).href
const toSearch =() => {
  router.push({name: 'search', params: {key: searchkey.value}})
}
watch(() => route.params.key, key =>{
    searchkey.value = key
    
    searchList.value = {}
    console.log(productList)
    const all = productList.filter(item => item.product_name.includes(searchkey.value))
    all.forEach(el => {
        searchList.value[el.brand_name] ? searchList.value[el.brand_name].push(el) : (searchList.value[el.brand_name] = [el])
    });
}, {
    immediate: true
})
</script>

<style lang="scss" scoped>
main{
    background: transparent;
    margin-top: 0;
}
.search-box{
    width: 100%;
    background: #fff;
    padding: 30px;
    margin-top: 52px;
  input{
    border: 1px solid #ccc;
    padding: 0;
    outline: none;
    padding: 0 10px;
    width: 100%;
    height: 54px;
    font-size: 16px;
  }
  .search-btn{
    height: 54px;
    // border-radius: 6px;
    background: #333;
    color: #fff;
    font-size: 16px;
    line-height: 54px;
    text-align: center;
    cursor: pointer;
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
        margin-right: 20px;
    }
  }
}

.product-box{
    margin-top: 60px;
    font-size: 16px;
    .content{
        margin-top: 20px;
        background: #fff;
        padding: 40px;
    }
    .item-brand{
        font-size: 24px;
        padding-bottom: 20px;
        border-bottom: 1px solid #ccc;
    }
    .item-list{
        display: flex;
        margin-left: -26px;
        padding-top: 4px;
        flex-wrap: wrap;
        margin: 40px 0 40px -26px ;
    }
    .product-item{
    width: 260px;
    height: 260px;
     margin: 0 0 26px 26px;
    border: 1px solid #EFEFEF;
    padding: 26px 40px;
    text-align: center;
    cursor: pointer;
    &:hover{
      border: none;
      // filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.18));
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.18);
      transition: all 0.2s ease;
    }
   
    img{
      height: 180px;
      width: 180px;
    }
    p{
      font-size: 16px;
      margin-top: 10px;
    }
  }
}
.empty-img{
    display: block;
    margin: 100px auto;
}
</style>