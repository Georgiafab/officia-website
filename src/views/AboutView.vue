<template>
    <div class="banner">
    <img src="@/assets/about/banner.png" alt="new-banner">
    <div class="crumbs container">
      <h1>关于我们<span>/ ABPUT</span></h1>
      
    </div>
  </div>

  <main class="container">
    <div class="about-content">
       <div class="top">
         <div class="txt">
                  <p>深圳市富途锐科技发展有限公司是日本Nikon显微镜、英国Andor成像设备，美国Thermofisher的QPCR，德国Nanotemper蛋白互作设备等品牌授权代理商，用户包括广东省医疗系统，科研单位，高校，市政公共系统等，是集仪器销售及售后服务，进出口业务为一体的综合性公司。</p>
      <p>公司自成立以来，每年的业绩飞速增长，已成为广东最专业的科研及医疗产品供应商之一。在向广大用户提供最顶级的科研仪器的同时，也在行业内树立了标杆性的售后服务体系。</p>
        </div>
        <!-- <div class="img">
            <img src="@/assets/about/company.png" alt="company">
        </div> -->
       </div>

       <div class="fort">
        <img src="@/assets/about/FORTUNATT.svg" alt="FORTUNATT">
        <div class="msg">
            <div class="left">以人为本，人赢天<br>
            超强企业文化建设
        </div >
        <p class="right">行业内亦首屈一指的企业文化建设。公司的目标是与员工共同成长,为员工提供行业内有吸引力的薪酬待遇和福利条件,并为员工提供良好的办公环境和完善的岗位技术培训及销售培训。</p>
       </div>
        </div>

        
    </div>
    
  </main>
  <div class="bottom gallery">
            <!-- <img src="@/assets/about/group1.png" alt="">
            <div class="content">
                <div class="graid">
                <img src="@/assets/about/group2.png" alt="">
                <div class="rlt">
                    <img src="@/assets/about/group3.png" alt="">
                    <img src="@/assets/about/group4.png" alt="">
                    <img src="@/assets/about/group5.png" alt="">
                    <img src="@/assets/about/group6.png" alt="">
                </div>
            </div>
            <div class="graid">
                <img src="@/assets/about/group7.png" alt="">
                <img src="@/assets/about/group8.png" alt="">
            </div>
            <a href="" class="to-cantact">加入我们</a>
            </div> -->

            <img src="@/assets/about/all.png" alt="">
            <img src="@/assets/about/all.png" alt="">
            
        </div>
        <a href="https://www.zhipin.com/gongsir/f1d923d5f24e67ed03d729i5FA~~.html?ka=all-jobs-hot" target="_blank" class="to-cantact">加入我们</a>
</template>



<style lang="scss" scoped>
main{
    background: none;
}
main.container{
    padding-bottom: 0;
}
.top{
    background: #fff;
    padding: 90px;
    display: flex;
    font-size: 16px;
    line-height: 32px;
    p{
        text-indent: 30px;
        margin-bottom: 22px;
    }
    .img{
        position: relative;
        margin-left: 82px;
        ::after{
            content:'';
            display: block;
            width: 100%;
            height: 100%;
            top: -14px;
            right: -14px;
        }
    }
}
.fort{
    margin-top: 51px;
    .msg{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: -43px;
    }
    .left{
        max-width: 256px;
        font-size: 32px;
        line-height: 44.8px;
        flex-shrink: 0;
        font-weight: 600;
    }
    .right{
        font-size: 16px;
        line-height: 32px;
        max-width: 720px;
        font-weight: 300;
    }
}
.bottom{
    margin-top: 60px;
    text-align: center;
    .content{
        background: #fff;
        padding: 0 20px 100px;
    }
    .graid{
        display: flex;
        // margin: 0 5px;
        .rlt{
            display: flex;
            flex-wrap: wrap;
        }
        img{
            margin: 9.5px;
        }
    }
    
}
.to-cantact{
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

    }

@keyframes moveSlideshow {
    to {
        transform: translateX(-100%)
    }
}

.gallery {
    font-size: 0;
    margin: 50px auto 60px;
    max-width: 3840px;
    overflow: hidden;
    transform: translateZ(0);
    white-space: nowrap
}

.gallery img {
    animation: moveSlideshow 40s linear infinite;
    display: inline-block;
    transform: translateZ(0);
    vertical-align: middle;
    max-width: unset;
    &+img{
        margin-left: 32px;
    }
}
@media screen and (max-width: 1000px) {
    .top{
        padding: 40px;
        flex-direction: column;
        .img{
            margin-left: 0;
            text-align: center;
        }
    }
    .fort .right{
        margin-left: 30px;
    }
    .gallery{
        
    }
}

@media screen and (max-width: 600px) {
    .fort .msg{
        flex-direction: column;
        .right{
            margin-left: 0;
            margin-top: 20px;
        }
    }
}
</style>

<script>
</script>