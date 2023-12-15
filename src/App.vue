<template>
  <div class="containerComponent"><!---->
    <Header />
    <div class="handleBox">
      <div>
        <div class="head-kv-banner">
          <el-carousel :interval="5000" arrow="always" height="830px">
            <el-carousel-item v-for="item in 4" :key="item">
              <template #default>
                <img src="https://cultureexpo-prod-1302844417.cos.ap-guangzhou.myqcloud.com//module/img/20230517/9bec0b6678cf43709ba66f1181014393.png">
              </template>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <el-container class="topContainer" style="min-height: calc(100vh - 306px);">
      <el-main style="padding: 0px; width: 100%;color: black;">
        <div class="content">
          <el-container>
            <el-main class="page-component__scroll" style="padding: 0px;">
              <div class="myHome">
                <header>
                  <div class="header">
                    <div class="live-list-wrap">
                      <div class="live-header"></div>
                      <div class="live-content">
                        <block style="display: flex;">
                          <div class="left">
                            <div style="height: 100%;">
                              <h2 class="title">深圳今年前10月数字贸易进出口额超400亿美元</h2>
                              <img src="https://cultureexpo-prod-1302844417.cos.ap-guangzhou.myqcloud.com//module/img/20231213/e984b2266d0048d2a99428c1d9ac698e.png" alt class="coverImage">
                              <img src="./img/play_icon.png" width="66px" height="66px" class="icon">
                              <div class="title-mask"></div>
                            </div>
                          </div>
                          <ul class="right">
                            <li>
                              <img src="https://cultureexpo-prod-1302844417.cos.ap-guangzhou.myqcloud.com//module/img/20231213/e984b2266d0048d2a99428c1d9ac698e.png" height="98px" class="coverImg" style="width: 176px; flex-shrink: 0;">
                              <div class="info-box">
                                <span>深圳今年前10月数字贸易进出口额超400亿美元</span>
                                <i class="playing_icon"></i>
                              </div>
                            </li>
                            <li>
                              <img src="https://cultureexpo-prod-1302844417.cos.ap-guangzhou.myqcloud.com//module/img/20231213/e984b2266d0048d2a99428c1d9ac698e.png" height="98px" class="coverImg" style="width: 176px; flex-shrink: 0;">
                              <div class="info-box">
                                <span>深圳今年前10月数字贸易进出口额超400亿美元</span>
                                <i class="playing_icon"></i>
                              </div>
                            </li>
                            <li>
                              <img src="https://cultureexpo-prod-1302844417.cos.ap-guangzhou.myqcloud.com//module/img/20231213/e984b2266d0048d2a99428c1d9ac698e.png" height="98px" class="coverImg" style="width: 176px; flex-shrink: 0;">
                              <div class="info-box">
                                <span>深圳今年前10月数字贸易进出口额超400亿美元</span>
                                <i class="playing_icon"></i>
                              </div>
                            </li>
                            <li>
                              <img src="https://cultureexpo-prod-1302844417.cos.ap-guangzhou.myqcloud.com//module/img/20231213/e984b2266d0048d2a99428c1d9ac698e.png" height="98px" class="coverImg" style="width: 176px; flex-shrink: 0;">
                              <div class="info-box">
                                <span>深圳今年前10月数字贸易进出口额超400亿美元</span>
                                <i class="playing_icon"></i>
                              </div>
                            </li>
                          </ul>
                        </block>
                      </div>
                    </div>
                  </div>
                </header>
                <section>
                  <div class="dynamic module">
                    <div class="header w1200">
                      <div class="title">
                        <h2>新闻资讯</h2>
                        <p style="margin-bottom: 7px;">News</p>
                      </div>
                      <div class="header-opera">
                        <p class="more">
                          更多动态
                          <img src="./img/arrow-right_icon.png">
                        </p>
                      </div>
                    </div>
                    <div class="dynamic-content">
                      <div class="dynamic-content-box w1200">
                        <!-- <div class="bannerSwiper1"></div> -->
                        <Swiper id="bannerSwiper1" :loop="true">
                          <swiper-slide>
                            <img src="https://cultureexpo-prod-1302844417.cos.ap-guangzhou.myqcloud.com//module/img/20231127/f0db4cf14f234d85994b9b30fdef324b.png" >
                          </swiper-slide>
                          <swiper-slide>
                            <img src="https://cultureexpo-prod-1302844417.cos.ap-guangzhou.myqcloud.com//module/img/20231127/f0db4cf14f234d85994b9b30fdef324b.png" >
                          </swiper-slide>
                          <swiper-slide>
                            <img src="https://cultureexpo-prod-1302844417.cos.ap-guangzhou.myqcloud.com//module/img/20231127/f0db4cf14f234d85994b9b30fdef324b.png" >
                          </swiper-slide>
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </el-main>
          </el-container>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
  import HelloWorld from './components/HelloWorld.vue'
  import Header from './components/header/index.vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
</script>

<style scoped>
@media screen and (min-width: 1300px) {
    .handleBox {
        min-height:6.3125rem!important
    }
}

@media screen and (max-width: 1299px) {
    .handleBox {
        min-height:9.375rem!important
    }
}
#app .head-kv-banner {
    position: absolute;
    top: 0;
    z-index: 1;
    cursor: default;
    width: 100%;
    height: 51.875rem
}

#app .head-kv-banner .el-carousel__indicators--horizontal {
    position: absolute;
    bottom: 15.625rem!important;
    left: inherit;
    right: 22.5rem;
    transform: inherit
}

@media screen and (max-width: 1440px) {
    #app .head-kv-banner .el-carousel__indicators--horizontal {
        right:7.3125rem
    }
}

#app .head-kv-banner:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 9.375rem;
    bottom: 0;
    left: 0;
    z-index: 9;
    background-image: linear-gradient(transparent,#fff)
}

#app .head-kv-banner img {
    width: 100%;
    height: 100%;
    object-fit: cover
}

#app .head-kv-banner :deep() .el-carousel__container .is-active:after {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 11.3125rem;
    background: linear-gradient(180deg,hsla(0,0%,100%,0),#fff)
}
.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.containerComponent .el-container {
    margin: 0 auto;
}

.containerComponent .content {
    height: 100%
}

.containerComponent .content .title {
    font-size: 1.875rem;
    font-weight: 400;
    color: #0a1822;
    padding: 1.5625rem 0;
    border-bottom: .0625rem solid #ddd
}

.containerComponent .breadcrumb {
    width: 75rem;
    line-height: 1.375rem;
    margin: 1.5rem auto 1.25rem;
    font-size: .875rem;
    color: #343434
}

.containerComponent .breadcrumb a {
    font-size: .875rem;
    color: #343434;
    text-decoration: none
}
.myHome header .head-kv-banner img {
    width: 100%;
    height: 100%
}

.myHome header .header {
    position: relative;
    left: calc(50% - 37.5rem);
    z-index: 1;
    margin-top: 31rem;
    width: 75rem;
    height: 28.75rem
}

.myHome header .header-title {
    height: 3.5rem
}

.myHome header .header-title .icon {
    position: absolute;
    z-index: 1;
    top: -2.5rem;
    left: -2.0625rem
}

.myHome header .header-title .title-content {
    position: relative;
    width: 32.5rem;
    height: 100%;
    padding: 0 0 0 5.875rem
}

.myHome header .header-title .title-content .title-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(../img/tran-rectangle.b4e22618.png) no-repeat 50%/cover;
    backdrop-filter: blur(.125rem)
}

.myHome header .header-title .title-content .content {
    white-space: nowrap;
    position: absolute;
    font-size: 1.125rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: 1.5625rem;
    min-height: 3.75rem;
    display: flex;
    align-items: center
}

.myHome header .header-title .title-content .content .countNum {
    font-size: 2.25rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: 3.125rem;
    margin: 0 .625rem .4375rem
}

.myHome header .header .live-content {
    display: flex;
    justify-content: center;
    padding: .75rem .875rem 0 .875rem;
    background: #fff;
    box-shadow: 0 .375rem 1.25rem 0 rgba(34,47,71,.12)
}

.myHome header .header .live-content .left {
    position: relative;
    width: 47.489375rem;
    height: 27.1875rem
}

.myHome header .header .live-content .left .title-mask {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 4rem;
    background: rgba(0,0,0,.2);
    backdrop-filter: blur(.5rem)
}

.myHome header .header .live-content .left .title {
    position: absolute;
    bottom: 1.25rem;
    left: 1.5rem;
    right: 1.5rem;
    font-size: 1rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: 1.5rem;
    z-index: 5;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-all
}

.myHome header .header .live-content .left img.coverImage {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
}

.myHome header .header .live-content .left img.icon {
    position: absolute;
    bottom: 1.9375rem;
    right: 1.9375rem;
    width: 4.125rem;
    height: 4.125rem;
    z-index: 5;
    cursor: pointer
}

.myHome header .header .live-content .right {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: .75rem
}

.myHome header .header .live-content .right li {
    display: flex;
    font-size: 1rem;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    color: #333;
    line-height: 1.5rem;
    margin-bottom: .75rem;
    border: .0625rem solid transparent
}

.myHome header .header .live-content .right li .playing_icon {
    height: 1.25rem
}

.myHome header .header .live-content .right li .info-box {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 1rem;
    width: 12.875rem
}

.myHome header .header .live-content .right li .info-box span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all
}

.myHome header .header .live-content .right li .info-box img {
    width: 1.25rem;
    height: 1.25rem
}

.myHome header .header .live-content .right li:hover {
    color: #236dd4;
    background: linear-gradient(135deg,#f7faff,#f2f7ff);
    box-shadow: 0 .25rem .625rem 0 rgba(26,115,238,.24);
    border: .0625rem solid #1a73ee;
    cursor: pointer
}

.myHome header .header .live-content .right li:hover .playing_icon {
    display: inline-block;
    width: 1.25rem;
    height: 1.25rem;
    background: url(../img/playing_icon@2x.568acb45.png) 50%/100% 100%
}

.myHome header .header .live-content .right li:hover .info-box span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all
}

.myHome header .header .live_fade-enter,.myHome header .header .live_fade-leave-to {
    opacity: 0;
    transform: translateY(100%)
}

.myHome header .header .live_fade-enter-active,.myHome header .header .live_fade-leave-active {
    transition: all 2s ease
}

.myHome header .header .live_fade-enter-to,.myHome header .header .live_fade-leave {
    transform: translateY(0);
    opacity: 1
}

 .more {
    cursor: pointer!important
}

.title {
    display: flex
}

.title h2,.title p {
    font-size: 2.75rem;
    line-height: 3.875rem;
    font-family: PingFangSC-Light,PingFang SC;
    font-weight: 300;
    color: #333
}

.title p {
    font-size: 1.5rem;
    line-height: 2.0625rem;
    margin-left: 1.25rem;
    align-self: flex-end
}

section .module {
    margin-top: 5rem;
}

section .module .header>.title {
    position: relative;
    left: -1.75rem;
    padding-left: 1.75rem;
    background: url(../img/real-circle_ic.526202f8.svg) no-repeat 0/3.5rem 3.5rem
}

section .module .header-opera {
    display: flex;
    align-items: center
}

section .module .header-opera .more {
    margin-left: 2.125rem;
    display: flex;
    align-items: center;
    border-bottom: .125rem solid #0d7dfc;
    font-size: 1rem;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    color: #1d1f24;
    line-height: 1.875rem
}

section .module .header-opera .more img {
    width: .6625rem;
    height: .48625rem;
    margin-left: .4375rem
}

section .module .header .slide-btn {
    position: inherit
}

section .module .header .slide-btn span {
    margin-right: 0;
    margin-left: .5rem
}
.dynamic-content {
    background: url(./img/dynamic_bg.png) no-repeat 50%/100% 100%
}

.dynamic-content .swiper {
    position: absolute;
    top: -2.6875rem;
    width: 37.5rem;
    height: 21.125rem;
    cursor: pointer
}

.dynamic-content .swiper img {
    width: 100%;
    height: 100%
}

.dynamic-content .swiper .swiper_ft {
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1.125rem 1.5rem;
    height: 3.75rem
}

.dynamic-content .swiper .swiper_ft .mask {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.2);
    backdrop-filter: blur(.625rem)
}

.dynamic-content .swiper .swiper_ft .title {
    position: absolute;
    left: .875rem;
    width: 80%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-all;
    font-size: 1rem;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    color: #fff;
    letter-spacing: .0625rem;
    box-sizing: border-box
}

.dynamic-content .swiper .swiper-pagination {
    text-align: right;
    bottom: 1.5625rem;
    padding-right: 1.75rem
}

.dynamic-content .swiper .swiper-pagination-bullet {
    border-radius: inherit;
    width: .75rem;
    height: .25rem;
    background: #fff;
    box-shadow: 0 .125rem .25rem 0 rgba(40,40,40,.1);
    opacity: .49
}

.dynamic-content .swiper .swiper-pagination-bullet-active {
    width: 1.25rem;
    height: .25rem;
    background: #fff;
    box-shadow: 0 .125rem .25rem 0 rgba(40,40,40,.1);
    opacity: 1
}

.dynamic-content .dynamic-list-none {
    width: 100%;
    position: absolute;
    height: 100%;
    left: 0!important
}

.dynamic-content .dynamic-list {
    position: absolute;
    height: 100%;
    left: 39.375rem
}

.dynamic-content .dynamic-list li {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 1.75rem;
    cursor: pointer;
    padding-right: 1.25rem
}

.dynamic-content .dynamic-list li:hover p {
    color: #1678d9
}

.dynamic-content .dynamic-list li span {
    margin-left: .625rem;
    font-size: 1.5rem;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    color: #999;
    line-height: 2rem;
    letter-spacing: .0625rem
}

.dynamic-content .dynamic-list li p {
    flex: 1;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-all;
    font-size: 1rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #333;
    line-height: 1.5rem;
    letter-spacing: .0625rem
}

.dynamic-content .dynamic-list li:before {
    content: "";
    display: inline-block;
    width: .25rem;
    height: .25rem;
    margin-right: .625rem;
    background: #333
}

.dynamic-content .dynamic-list li:first-of-type {
    margin-top: 2rem
}

.dynamic-content .time-select {
    margin-bottom: 6.25rem
}

.dynamic-content .more {
    position: absolute;
    bottom: 6.625rem
}

.dynamic-content-box {
    position: relative;
    display: flex;
    height: 24.75rem
}

.dynamic_fade-enter {
    opacity: 0;
    transform: translateX(-100%)
}

.dynamic_fade-enter-active,.dynamic_fade-leave-active {
    transition: all 2s ease
}

.dynamic_fade-enter-to {
    transform: translateX(0);
    opacity: 1
}
</style>
