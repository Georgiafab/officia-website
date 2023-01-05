<template>
     <div class="banner">
    <img src="@/assets/contact/banner.png" alt="new-banner">
    <div class="crumbs container">
      <h1>联系我们<span>/ Contact Us</span></h1>
      <div style="text-align: right;">
        <a target="_blank" href="https://map.baidu.com/search/%E5%9C%B0%E5%9D%80%3A%E6%B7%B1%E5%9C%B3%E5%B8%82%E5%8D%97%E5%B1%B1%E5%8C%BA%E5%AD%A6%E8%8B%91%E5%A4%A7%E9%81%931133%E5%8F%B7/@12690610.125,2566935,19z?querytype=s&da_src=shareurl&wd=%E5%9C%B0%E5%9D%80%EF%BC%9A%E6%B7%B1%E5%9C%B3%E5%B8%82%E5%8D%97%E5%B1%B1%E5%8C%BA%E5%AD%A6%E8%8B%91%E5%A4%A7%E9%81%931133%E5%8F%B7&c=340&src=0&pn=0&sug=0&l=13&b=(12657752,2557828;12703832,2583076)&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&device_ratio=2" class="location-href">查看地图定位</a>
      </div>
    </div>
  </div>

  <main class="container">
    <div class="contact-content">
       <div class="top">
         <div class="txt">
          <p>深圳市富途锐科技发展有限公司</p>
          <p>Shenzhen Fortunatt Science & Technology Development Co., Ltd.</p>
          <br>
          <p>一</p>
          <br>
          <p>地址：深圳市南山区学苑大道1133号</p>
          <p>电话：400-8605-616</p>
          <p>手机：135 9015 2626</p>
          <p>邮箱：service1@fortunatt.com</p>
          <p>服务时间：周一至周五9:00-18:00</p>

          <div class="qs-code">
            <img src="@/assets/contact/qs-us.png" alt="qs-us" />
            <p>fortuantt公众号</p>
          </div>
        </div>
        <div class="tels">
             <div class="item">
               售前资询经理<br>
                <b>0755-8670 3513</b>
                <!-- 手机：188 8888 8888<br>
                邮箱：lyhao@fortuantt.com  -->
            </div>
            <div class="item">
                售后服务热线：<br>
                <b>135 9015 2626</b>
            </div>
        </div>
       </div>


      <div class="form-wrap container">
        <div class="crumbs ">
            <h1>意向咨询<span>/ Consultation</span></h1>
            <ContactForm sumbitBtnText="提交信息" txt="请填写您的信息，我们将尽快与您取得联系" />
        </div>
      </div>
    </div>
  </main>
</template>



<style lang="scss" scoped>
.location-href{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-align: right;
    text-decoration-line: underline;

    color: #ECECEC;
    margin-top: 388px;
}
main{
    background: none;
    
}
.top{
    background: #fff;
    display: flex;
    font-size: 16px;
    line-height: 32px;
    color: #666;
    justify-content: space-between;
    .txt{
        padding: 52px 90px;
        .qs-code{
            margin-top: 75px;
            text-align: center;
            width: 96px;
            color: #999;
            font-size: 0;
            height: 130px;
            p{
                font-size: 12px;
                line-height: 200%;
                margin-top: -6px;
            }
        }
    }
    .tels{
       width: 400px;
       background: #4EA270;
       font-size: 16px;
       padding: 56px;
       color: #fff;
       font-weight: 400;
       line-height: 22.5px;
       position: relative;
       b, strong{
        font-size: 24px;
        // padding-top: 20px;
        font-weight: 600;
        display: block;
        margin-top: 10px;
       }
       ::after{
        content: "";
        display: block;
        width: 40px;
        height: 4px;
        background: #fff;
        position: absolute;
        bottom: 58px;
        left: 50px;
       }
       .item:not(:first-child){
        margin-top: 94px;
       }
    }
}

.form-wrap{
    margin: 100px 0 0;
    .crumbs{
        color: #333;
        margin-top: 0;
        span{
            color: #999;
        }
    }

}

@media screen and (max-width: 800px) {
  .top{
    flex-direction: column;
    .txt, .tels{
      width: 100%;
      padding: 40px;
      ::after{
        display: none;
      }
      .item:not(:first-child){
        margin-top: 50px;
      }
    }
  }
  .form-wrap{
        padding: 0!important;
      }
      .location-href{
        position: absolute;
        bottom: 20px;
        left: 0;
        right: 0;
        text-align: center;
      }
      
}
</style>

<script setup>
import ContactForm from '../components/ContactForm.vue';
</script>