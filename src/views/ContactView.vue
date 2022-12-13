<template>
     <div class="banner">
    <img src="@/assets/contact/banner.png" alt="new-banner">
    <div class="crumbs container">
      <h1>联系我们<span>/ Contact Us</span></h1>
      <div style="text-align: right;">
        <a href="" class="location-href">查看地图定位</a>
      </div>
    </div>
  </div>

  <main class="container">
    <div class="contact-content">
       <div class="top">
         <div class="txt">
          <p>深圳市富途锐科技发展有限公司</p>
          <p>Shenzhen Fuludi Technology Development Co., Ltd.</p>
          <br>
          <p>一</p>
          <br>
          <p>地址：深圳市南山区桃源街道田寮工业A区田寮大厦西座1113室</p>
          <p>电话：400-8605-616</p>
          <p>手机：188 8888 8888</p>
          <p>邮箱：service1@fortuantt.com</p>
          <p>服务时间：周一至周五9:00-18:00</p>

          <div class="qs-code">
            <img src="@/assets/contact/qs-us.png" alt="qs-us" />
            <p>fortuantt公众号</p>
          </div>
        </div>
        <div class="tels">
            <div class="item">
                <p>售后服务部经理</p>
                <strong>罗 明</strong>
                手机：135 9015 2626 <br/>
                邮箱：englneer_lm@fortuantt.com 
            </div>
             <div class="item">
               售前资讯经理<br>
                <b>刘一浩</b>
                手机：188 8888 8888<br>
                邮箱：lyhao@fortuantt.com 
            </div>
            <div class="item">
                售前资讯经理<br>
                <b>刘一浩</b>
                手机：188 8888 8888<br>
                邮箱：lyhao@fortuantt.com 
            </div>
        </div>
       </div>


      <div class="form-wrap container">
        <div class="crumbs ">
            <h1>意向咨询<span>/ Consultation</span></h1>
            <ContactForm txt="请填写您的信息，我们将尽快与您取得联系" />
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
       b, strong{
        font-size: 18px;
        padding-top: 20px;
        display: block;
       }
       .item:not(:first-child){
        margin-top: 80px;
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
    }
  }
  .form-wrap{
        padding: 0!important;
      }
}
</style>

<script setup>
import ContactForm from '../components/ContactForm.vue';
</script>