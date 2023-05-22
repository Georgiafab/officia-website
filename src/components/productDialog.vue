<template>
  <el-dialog
    width="1200px"
    v-model="dialogTableVisible"
    lock-scroll
    destroy-on-close
    :show-close="!formShow"
    @close="formShow = false"
  >
    <template #header="{ titleId, titleClass }">
      <div class="my-header" v-show="!formShow">
        <div class="down" @click="formShow = true">
          <svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.6857 8.14273L13.4 6.94273L8.85717 11.4856V0.51416H7.14289V11.4856L2.60003 6.94273L1.31431 8.14273L8.00003 14.8284L14.6857 8.14273ZM0.885742 15.7713H15.0286V17.4856H0.885742V15.7713Z"
              fill="currentColor"
            />
          </svg>
          下载资料
        </div>
        <h4 :id="titleId" :class="titleClass">{{ proItem.product_name }}</h4>
      </div>
    </template>
    <div class="prod" v-show="!formShow">
      <div class="pdf-loading">
        <img src="@/assets/loading.png" alt="" />

        <p style="margin-top: 10px">加载中</p>
      </div>
      <template v-for="item in proItem.detail_pdf" :key="item._id">
        <vue-pdf-embed :source="item.url" class="vue-pdf" />
        <img :src="item.url" alt="" class="vue-pdf" />
      </template>
    </div>
    <div class="form" v-show="formShow">
      <h2>试试让我们帮助您详细了解该产品？</h2>
      <ContactForm
        sumbitBtnText="提交并下载"
        txt="我们注重客户隐私保密，且希望能帮助您了解该产品！"
        :sumbit="sumbit"
      />

      <a
        ref="downRef"
        :href="proItem.detail_pdf[0].url"
        :download="proItem.product_name"
      ></a>
    </div>
  </el-dialog>
</template>

<script setup>
import { computed, ref, defineEmits, defineProps } from "vue";
import VuePdfEmbed from "vue-pdf-embed";
import ContactForm from "./ContactForm.vue";
const props = defineProps({
  modelValue: Boolean,
  proItem: Object,
});
const emits = defineEmits(["update:modelValue"]);
const dialogTableVisible = computed({
  set(val) {
    emits("update:modelValue", val);
  },
  get() {
    return props.modelValue;
  },
});
const formShow = ref(false);
const downRef = ref();
const sumbit = () => {
  downRef.value.click();
};

const getImage = (name) => new URL(`../assets/${name}`, import.meta.url).href;
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
    img {
      height: 100%;
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
  // width: 100%;
  right: 0;
  left: 0;
  top: 170px;
  img {
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

<style>
.el-dialog__body {
  position: relative;
  min-height: 500px;
}
canvas {
  height: auto !important;
}
.el-dialog__close {
  width: 23px !important;
  height: 23px !important;
  font-size: 23px !important;
  color: #333 !important;
}
</style>
