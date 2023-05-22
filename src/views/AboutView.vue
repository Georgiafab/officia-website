<template>
  <div class="banner">
    <img :src="siteData?.banner?.abouts" alt="new-banner" />
    <div class="crumbs container">
      <h1>关于我们<span>/ ABPUT</span></h1>
    </div>
  </div>

  <main class="container">
    <div class="about-content">
      <div class="top">
        <div class="txt" v-html="siteData.company.aboutusMsg"></div>
      </div>
    </div>
  </main>
  <div class="bottom gallery">
    <img :src="siteData.company?.aboutImg" alt="" />
    <img :src="siteData.company?.aboutImg" alt="" />
  </div>
  <a
    href="https://www.zhipin.com/gongsir/f1d923d5f24e67ed03d729i5FA~~.html?ka=all-jobs-hot"
    target="_blank"
    class="to-cantact"
    >加入我们</a
  >
</template>

<style lang="scss" scoped>
main {
  background: none;
}
.banner {
  height: auto;
  width: 100%;
  img {
    position: relative;
    transform: none;
    max-width: 100%;
    left: 0;
  }
}
.crumbs {
  display: none;
}
main.container {
  padding-bottom: 0;
  margin-top: 0;
}
.top {
  background: #fff;
  padding: 90px;
  display: flex;
  font-size: 16px;
  line-height: 32px;
  ::v-deep(p) {
    text-indent: 30px;
    margin-bottom: 22px;
  }
  .img {
    position: relative;
    margin-left: 82px;
    ::after {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      top: -14px;
      right: -14px;
    }
  }
}
.fort {
  margin-top: 51px;
  .msg {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: -43px;
    align-items: flex-end;
  }
  .left {
    max-width: 256px;
    font-size: 32px;
    line-height: 44.8px;
    flex-shrink: 0;
    font-weight: 600;
  }
  .right {
    font-size: 16px;
    line-height: 32px;
    max-width: 720px;
    font-weight: 300;
  }
}
.bottom {
  margin-top: 60px;
  text-align: center;
  .content {
    background: #fff;
    padding: 0 20px 100px;
  }
  .graid {
    display: flex;
    // margin: 0 5px;
    .rlt {
      display: flex;
      flex-wrap: wrap;
    }
    img {
      margin: 9.5px;
    }
  }
}
.to-cantact {
  display: block;
  width: 180px;
  margin: 0 auto 200px;
  height: 60px;
  background: #333;
  font-size: 18px;
  color: #fff;
  font-weight: 400;
  text-align: center;
  line-height: 60px;
  margin-top: 67px;
  text-decoration: none;
  &:hover {
    background: #000;
  }
}

@keyframes moveSlideshow {
  to {
    transform: translateX(-100%);
  }
}

.gallery {
  font-size: 0;
  margin: 50px auto 60px;
  max-width: 3840px;
  overflow: hidden;
  transform: translateZ(0);
  white-space: nowrap;
}

.gallery img {
  animation: moveSlideshow 40s linear infinite;
  display: inline-block;
  transform: translateZ(0);
  vertical-align: middle;
  max-width: unset;
  & + img {
    margin-left: 32px;
  }
}
@media screen and (max-width: 1000px) {
  .top {
    padding: 40px;
    flex-direction: column;
    .img {
      margin-left: 0;
      text-align: center;
    }
  }
  .fort .right {
    margin-left: 30px;
  }
  .gallery {
  }
}

@media screen and (max-width: 600px) {
  .fort .msg {
    flex-direction: column;
    .right {
      margin-left: 0;
      margin-top: 20px;
    }
  }
}
</style>

<script setup>
import { inject } from "vue";
const siteData = inject("siteData");
</script>
