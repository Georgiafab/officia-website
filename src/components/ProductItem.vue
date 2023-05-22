<template>
  <div :class="`product-item`" v-bind="$attrs">
    <div class="img-box">
      <img :src="proItem.product_image" :alt="proItem.product_name" />
    </div>
    <p>{{ proItem.product_name }}</p>
  </div>
</template>

<script setup>
defineProps({
  proItem: Object,
});
</script>

<style lang="scss" scoped>
.product-item {
  width: 260px;
  height: 260px;
  margin: 0 0 26px 26px;
  border: 1px solid #efefef;
  padding: 26px 40px;
  text-align: center;
  cursor: pointer;
  &:hover {
    // border: none;
    // filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.18));
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.18);
    transition: all 0.2s ease;
  }

  .img-box {
    height: 180px;
    width: 180px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-height: 100%;
    }
  }
  p {
    font-size: 16px;
    margin-top: 10px;
    white-space: nowrap;
  }
}

.my-header {
  text-align: center;
  position: relative;
  padding-top: 6px;
  h4 {
    font-size: 32px;
    font-weight: 600;
    line-height: 46px;
  }
  .down {
    position: absolute;
    width: 146px;
    height: 46px;
    border: 1px solid #ccc;
    text-align: center;
    line-height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ccc;
    text-decoration: none;
    cursor: url(../assets/cur.svg), auto;
    transition: all 0.3s ease;
    svg {
      margin-right: 16px;
    }
    &:hover {
      color: #333;
      border-color: #333;
    }
  }
}
img {
  max-width: 100%;
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
.pdf-loading {
  position: absolute;
  text-align: center;
  width: 100%;
  top: 170px;
  svg {
    animation: 1s linear infinite reverse both running xuz;
  }
}

.vue-pdf {
  position: relative;
  z-index: 2;
}
.form {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  text-align: center;
  .el-form {
    padding-top: 4px;
  }
}

@media screen and (max-width: 600px) {
  .product-item {
    width: calc(50% - 26px);
    padding: 20px;
    p {
      white-space: normal;
    }
  }
  .my-header {
    display: flex;
    flex-direction: column-reverse;
    .down {
      position: relative;
      margin-top: 10px;
    }
    h4 {
      font-size: 24px;
    }
  }
}

@media screen and (max-width: 460px) {
  .product-item {
    width: 100%;
  }
}
</style>
