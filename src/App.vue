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
  </div>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/header/index.vue'
</script>

<style>
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

#app .head-kv-banner /deep/ .el-carousel__container .is-active:after {
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
</style>
