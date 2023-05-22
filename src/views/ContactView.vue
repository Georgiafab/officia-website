<template>
  <div class="banner">
    <img :src="siteData?.banner?.contact" alt="new-banner" />
    <div class="crumbs container">
      <h1>联系我们<span>/ Contact Us</span></h1>
      <div style="text-align: right">
        <a
          target="_blank"
          :href="siteData?.company?.mapUrl"
          class="location-href"
          >查看地图定位</a
        >
      </div>
    </div>
  </div>

  <main class="container">
    <div class="contact-content">
      <div class="top">
        <div class="txt">
          <p>{{ siteData.company?.name }}</p>
          <p>{{ siteData.company?.englishName }}</p>
          <br />
          <p>一</p>
          <br />
          <p>地址：{{ siteData.company?.address }}</p>
          <p>电话：{{ siteData.company?.tel }}</p>
          <p>手机：{{ siteData.company?.phone }}</p>
          <p>邮箱：{{ siteData.company?.email }}</p>
          <p>服务时间：{{ siteData.company?.serverTime }}</p>

          <div class="qs-code">
            <img src="@/assets/contact/qs-us.jpg" alt="qs-us" />
            <p>fortuantt公众号</p>
          </div>
        </div>
        <div class="tels">
          <div class="item">
            售前资询经理<br />
            <b>{{ siteData.company?.presale }}</b>
            <!-- 手机：188 8888 8888<br>
                邮箱：lyhao@fortuantt.com  -->
          </div>
          <div class="item">
            售后服务热线：<br />
            <b>{{ siteData.company?.aftersale }}</b>
          </div>
        </div>
      </div>

      <div class="form-wrap container">
        <div class="crumbs">
          <h1>意向咨询<span>/ Consultation</span></h1>
          <ContactForm
            sumbitBtnText="提交信息"
            txt="请填写您的信息，我们将尽快与您取得联系"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.location-href {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: right;
  text-decoration-line: underline;

  color: #ececec;
  margin-top: 388px;
}
main {
  background: none;
}
.top {
  background: #fff;
  display: flex;
  font-size: 16px;
  line-height: 32px;
  color: #666;
  justify-content: space-between;
  .txt {
    padding: 52px 90px;
    .qs-code {
      margin-top: 75px;
      text-align: center;
      width: 96px;
      color: #999;
      font-size: 0;
      height: 130px;
      p {
        font-size: 12px;
        line-height: 200%;
        margin-top: -6px;
      }
    }
  }
  .tels {
    width: 400px;
    background: #4ea270;
    font-size: 16px;
    padding: 56px;
    color: #fff;
    font-weight: 400;
    line-height: 22.5px;
    position: relative;
    b,
    strong {
      font-size: 24px;
      // padding-top: 20px;
      font-weight: 600;
      display: block;
      margin-top: 10px;
    }
    ::after {
      content: "";
      display: block;
      width: 40px;
      height: 4px;
      background: #fff;
      position: absolute;
      bottom: 58px;
      left: 50px;
    }
    .item:not(:first-child) {
      margin-top: 94px;
    }
  }
}

.form-wrap {
  margin: 100px 0 0;
  .crumbs {
    color: #333;
    margin-top: 0;
    span {
      color: #999;
    }
  }
}

@media screen and (max-width: 800px) {
  .top {
    flex-direction: column;
    .txt,
    .tels {
      width: 100%;
      padding: 40px;
      ::after {
        display: none;
      }
      .item:not(:first-child) {
        margin-top: 50px;
      }
    }
  }
  .form-wrap {
    padding: 0 !important;
  }
  .location-href {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    text-align: center;
  }
}
</style>

<script setup>
import { inject } from "vue";
import ContactForm from "../components/ContactForm.vue";
const siteData = inject("siteData");
</script>
