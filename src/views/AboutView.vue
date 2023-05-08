<template>
    <div class="banner">
    <img src="@/assets/about/banner.jpg" alt="new-banner">
    <div class="crumbs container">
      <h1>关于我们<span>/ ABPUT</span></h1>
      
    </div>
  </div>

  <main class="container">
    <div class="about-content">
       <div class="top">
         <div class="txt">
                  
     

                  <p>深圳市富途锐科技发展有限公司于2013年成立，在这十个年头里，搭着深圳的科研、教育、医疗事业高速发展的顺风车，富途锐也一路发展壮大。销售产品原来主要集中在显微成像设备，到现在成为了实验室整体设备供应商、进出口贸易商。 </p>
      <p> 我们向用户提供专业的产品和技术咨询，还有接近零差评的售后服务态度，以此获得用户的信任； 我们以伙伴心态与同行们合作，我们相信这种伙伴心态可以让用户、同行及我们实现“三赢”。  </p>

      <p>对客户的每一次垂询，我们都在我们知识技术能及的范围提供最合理的方案，让客户对方案能起到的帮助可以预期； 每一次技术支持，我们都尽力解决用户的困扰，让设备能发挥最大的功效； 每一次售后服务，都力争这些问题不再影响用户的实验，这是我们的工作态度。</p>
      <p>我们相信每一个加入富途锐的年青人都是可以被塑造的。我们希望每一个在富途锐工作的年青人都能在工作中树立正确的人生观，学会用正确的方式处理问题和把握机会。我们不能浪费这些年青人，这是我们的社会责任。</p>
      <p>因为国家在科研和医疗事业的不断投入，水平不断提高，富途锐需要不断引入更高精尖的科研设备来满足中国科学家的需求。中国的科学家手中有了更趁手的工具，再推动国家的科研、医疗和制造水平不断提高，这是我们对祖国的愿景。
</p>
      <!-- <p>
      

      </p>
      <p>
      因为国家在科研和医疗事业的不断投入，水平不断提高，富途锐需要不断引入更高精尖的科研设备来满足中国科学家的需求。中国的科学家手中有了更趁手的工具，再推动国家的科研、医疗和制造水平不断提高，这是我们对祖国的愿景。

      </p> -->
        </div>
        <!-- <div class="img">
            <img src="@/assets/about/company.png" alt="company">
        </div> -->
       </div>

       <!-- <div class="fort">
        <img src="@/assets/about/FORTUNATT.svg" alt="FORTUNATT">
        <div class="msg">
            <div class="left">以人为本，人赢天<br>
            超强企业文化建设
        </div >
        <p class="right">行业内亦首屈一指的企业文化建设。公司的目标是与员工共同成长,为员工提供行业内有吸引力的薪酬待遇和福利条件,并为员工提供良好的办公环境和完善的岗位技术培训及销售培训。</p>
       </div>
        </div> -->

        
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

            <img src="@/assets/about/all.jpg" alt="">
            <img src="@/assets/about/all.jpg" alt="">
            
        </div>
        <a href="https://www.zhipin.com/gongsir/f1d923d5f24e67ed03d729i5FA~~.html?ka=all-jobs-hot" target="_blank" class="to-cantact">加入我们</a>
</template>



<style lang="scss" scoped>
main{
    background: none;
}
.banner{
    height: auto;
    width: 100%;
    img{
        position: relative;
    transform: none;
    max-width: 100%;
    left: 0;
    }
}
.crumbs{
    display: none;
}
main.container{
    padding-bottom: 0;
    margin-top: 0;
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
        align-items: flex-end;
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
        text-decoration: none;
        &:hover{
            background: #000;
        }

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