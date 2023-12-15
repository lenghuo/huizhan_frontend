<template>
  <div class="header whiteBg simple-style">
    <div class="tongfa_box notHomeStyle zh-cn" :class="blackClass ? 'blankStyle' : ''">
      <div class="head_content">
        <div class="head_icon">
          <img
            src="https://cultureexpo-prod-1302844417.cos.ap-guangzhou.myqcloud.com//module/img/20230424/f668ed8d81dd4fb1b6541d7c532f77ba.png"
            alt=""
            height="42"
          />
        </div>

        <ul class="ul_class simple-style blue">
          <li class="item_name_li active">首页</li>
          <li class="item_name_li">新闻</li>
          <li class="item_name_li" style="">展馆</li>
          <li class="item_name_li">展商</li>
          <li class="item_name_li">展品</li>
          <li class="item_name_li">
            <div class="langs_drop el-dropdown">
              <span
                class="about-us-tab el-dropdown-selfdefine"
                aria-haspopup="list"
                aria-controls="dropdown-menu-5570"
                role="button"
                tabindex="0"
                >活动</span
              >
              <ul
                class="el-dropdown-menu el-popper"
                id="dropdown-menu-5570"
                style="display: none"
              >
                <li
                  tabindex="-1"
                  class="el-dropdown-menu__item simple-style blue"
                >
                  <!---->官方直播
                </li>
                <li
                  tabindex="-1"
                  class="el-dropdown-menu__item simple-style blue"
                >
                  <!---->展商直播
                </li>
                <li
                  tabindex="-1"
                  class="el-dropdown-menu__item simple-style blue"
                >
                  <!---->票证大厅
                </li>
                <li
                  tabindex="-1"
                  class="el-dropdown-menu__item simple-style blue"
                >
                  <!---->展会服务
                </li>
              </ul>
            </div>
          </li>
          <li class="division">
            <img src="" width="28" height="18" alt="" /><span>VR展馆</span>
          </li>
        </ul>
        <div class="opera">
          <div class="opera-item langs">
            <div class="langs_drop el-dropdown">
              <span class="langTxet_box"> EN</span>
            </div>
          </div>
          <div class="opera-item">登录</div>
          <div class="opera-item" style="padding-right: 10px">
            <div class="rightBox el-dropdown">
              <div
                class="right el-dropdown-selfdefine"
                aria-haspopup="list"
                aria-controls="dropdown-menu-7324"
                role="button"
                tabindex="0"
              >
                报名
              </div>
              <ul
                class="el-dropdown-menu el-popper dropdown"
                id="dropdown-menu-7324"
                style="display: none"
              >
                <li tabindex="-1" class="el-dropdown-menu__item">
                  <!---->
                  <div>报名</div>
                </li>
                <li tabindex="-1" class="el-dropdown-menu__item">
                  <!---->
                  <div>报名查询</div>
                </li>
              </ul>
            </div>
          </div>
          <div class="opera-item" style="padding-left: 10px">
            <div class="rightBox el-dropdown">
              <div
                class="right el-dropdown-selfdefine"
                aria-controls="dropdown-menu-8381"
                role="button"
                tabindex="0"
              >
                注册
              </div>
              <ul
                class="el-dropdown-menu el-popper dropdown"
                id="dropdown-menu-8381"
                style="display: none"
              >
                <li tabindex="-1" class="el-dropdown-menu__item">
                  <!---->
                  <div>注册</div>
                </li>
                <li tabindex="-1" class="el-dropdown-menu__item">
                  <!---->
                  <div>注册查询</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";

const blackClass = ref<boolean>(false)
function handleScroll() {
  const scroll = document.body.scrollTop || window.scrollY || document.documentElement.scrollTop
  blackClass.value = scroll > 600
  console.log(blackClass.value)
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  z-index: 98;
  width: 100%;
  background: hsla(0, 0%, 100%, 0);
  backdrop-filter: blur(.625rem)
}

.header:after {
  content: "";
  position: absolute;
  z-index: 2;
  display: inline-block;
  width: 100%;
  height: .0625rem;
  background: #fff;
  opacity: .3
}

.header.chinese-style,
.header.dark-style {
  background: transparent
}

.header .el-container {
  margin: 0 auto
}

.header .tongfa_box {
  padding: 0 6.25rem;
  width: 100%
}

.header .tongfa_box .head_content {
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 99
}

.header .tongfa_box .head_content .head_icon {
  min-width: 17.75rem;
  margin-right: auto;
  display: flex;
  align-items: center;
  cursor: pointer
}

.header .tongfa_box .head_content .head_icon>p {
  font-size: 1.25rem;
  color: #1d1f25;
  line-height: 1.5rem;
  font-style: oblique;
  margin-left: .25rem
}

.header .tongfa_box .head_content .about-us-tab {
  font-size: 1rem;
  font-family: PingFangSC-Medium, PingFang SC
}

.header .tongfa_box .head_content.isSupplyHall {
  margin-left: auto !important;
  margin-right: auto !important
}

.header .tongfa_box .head_content.isSupplyHall .rigth_box {
  text-align: right
}

.header .tongfa_box .head_content.isSupplyHall .rigth_box .ul_class {
  margin-right: 0
}

.header .tongfa_box .rigth_box {
  display: flex;
  margin-left: auto;
  height: 100%
}

.header .tongfa_box .ul_class {
  display: flex;
  align-items: center
}

.header .tongfa_box .ul_class .item_name_li {
  position: relative;
  z-index: 1
}

.header .tongfa_box .ul_class .item_name_li:hover {
  border-bottom: .125rem solid #fff
}

.header .tongfa_box .ul_class .item_name_li:hover:before {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, hsla(0, 0%, 100%, 0), #fff);
  opacity: .2
}

.header .tongfa_box .ul_class li {
  font-size: 1rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #fff;
  white-space: nowrap;
  cursor: pointer;
  padding: 2.5625rem 1.125rem 2.25rem 1.0625rem
}

.header .tongfa_box .ul_class li a {
  font-size: 1.125rem;
  color: #fff;
  text-decoration: none
}

.header .tongfa_box .ul_class li:last-child {
  margin-right: 0
}

.header .tongfa_box .ul_class .active {
  border-bottom: .125rem solid #fff
}

.header .tongfa_box .ul_class .active:before {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, hsla(0, 0%, 100%, 0), #fff);
  opacity: .2
}

.header .tongfa_box .ul_class .division,
.header .tongfa_box .ul_class .el-icon-caret-bottom {
  margin-left: .25rem;
  color: #d8d8d8
}

.header .tongfa_box .ul_class .division img,
.header .tongfa_box .ul_class .el-icon-caret-bottom img {
  position: relative;
  top: .25rem;
  left: -.25rem
}

.header .tongfa_box .ul_class .division span,
.header .tongfa_box .ul_class .el-icon-caret-bottom span {
  font-size: 1rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 400;
  color: #efbf4f;
  line-height: 1.375rem
}

.header .tongfa_box .ul_class .division {
  margin-left: 0;
  margin-right: 0
}

.header .tongfa_box .ul_class .login_class {
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.5rem
}

.header .tongfa_box .ul_class .register_class {
  height: 2.25rem;
  background: #fff;
  border-radius: .25rem;
  border: .0625rem solid #1678d9;
  font-size: 1.125rem;
  font-weight: 400;
  color: #1678d9;
  line-height: 1.125rem;
  text-align: center;
  margin: 0
}

.header .tongfa_box .ul_class .register_class:hover {
  color: #4095ea;
  border: .0625rem solid #4095ea
}

.header .tongfa_box .ul_class .langs {
  position: relative;
  margin-right: 0
}

.header .tongfa_box .ul_class .langs .langs_drop {
  width: 100%;
  height: 100%
}

.header .tongfa_box .ul_class .langs .langs_box {
  position: absolute;
  right: 0;
  width: 6.25rem;
  padding: .625rem;
  background-color: wheat
}

.header .tongfa_box .ul_class .langs .langs_box p {
  margin-bottom: .625rem
}

.header .tongfa_box .ul_class .langs .langs_box p:hover {
  background-color: #d8bfd8
}

.header .tongfa_box .ul_class .right {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  line-height: normal
}

.header .tongfa_box .ul_class .right div {
  display: inline-block;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  top: .125rem
}

.header .tongfa_box .ul_class .right div img {
  width: 1.0625rem;
  height: 1.0625rem
}

.header .tongfa_box .ul_class .right p {
  display: inline-block;
  font-size: 1.125rem;
  padding-left: .4375rem;
  color: #1d1f24;
  flex: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 5rem
}

.header .tongfa_box .ul_class .right span {
  margin-left: .3125rem;
  width: 0;
  height: 0;
  border-width: .3125rem;
  border-style: solid;
  border-color: #d8d8d8 transparent transparent transparent;
  margin-top: .5rem;
  margin-right: .3125rem
}

.header .tongfa_box .opera {
  display: flex;
  align-items: center;
  padding: 0;
  margin-left: 5rem;
  font-weight: 500;
  color: #fff;
  line-height: 1.125rem;
  cursor: pointer
}

.header .tongfa_box .opera-item {
  text-align: center;
  min-height: 1.125rem
}

.header .tongfa_box .opera-item:first-child,
.header .tongfa_box .opera-item:nth-child(2) {
  padding: 0 .9375rem
}

.header .tongfa_box .opera-item:nth-child(3) {
  padding-left: .9375rem
}

.header .tongfa_box .opera-item:nth-child(n+2) {
  border-left: .0625rem solid hsla(0, 0%, 100%, .7)
}

.header .tongfa_box .opera a {
  color: #fff;
  text-decoration: none
}

.header .tongfa_box .ul_class.simple-style.orange .black-font:hover,
.header .tongfa_box .ul_class.simple-style.orange .division:hover,
.header .tongfa_box .ul_class.simple-style.orange .item_name_li:hover,
.header .tongfa_box .ul_class.simple-style.orange .langs:hover {
  color: #e8963b
}

.header .tongfa_box .ul_class.simple-style.orange li {
  color: #1d1f24
}

.header .tongfa_box .ul_class.simple-style.orange .active {
  color: #e8963b;
  border-bottom: .25rem solid
}

.header .tongfa_box .ul_class.simple-style.orange .about-us-tab,
.header .tongfa_box .ul_class.simple-style.orange .langs_drop {
  color: #1d1f24
}

.header .tongfa_box .ul_class.simple-style.orange .langTxet_box:hover {
  color: #e8963b
}

.header .tongfa_box .ul_class.simple-style.orange .el-icon-caret-bottom {
  color: #1d1f24
}

.header .tongfa_box .ul_class.simple-style.orange .register_class,
.header .tongfa_box .ul_class.simple-style.orange .register_class:hover {
  background: transparent;
  color: #e8963b;
  border-color: #e8963b
}

.header .tongfa_box .ul_class.simple-style.red .black-font:hover,
.header .tongfa_box .ul_class.simple-style.red .division:hover,
.header .tongfa_box .ul_class.simple-style.red .item_name_li:hover,
.header .tongfa_box .ul_class.simple-style.red .langs:hover {
  color: #d71e26
}

.header .tongfa_box .ul_class.simple-style.red li {
  color: #1d1f24
}

.header .tongfa_box .ul_class.simple-style.red .active {
  color: #d71e26;
  border-bottom: .25rem solid
}

.header .tongfa_box .ul_class.simple-style.red .about-us-tab,
.header .tongfa_box .ul_class.simple-style.red .langs_drop {
  color: #1d1f24
}

.header .tongfa_box .ul_class.simple-style.red .langTxet_box:hover {
  color: #d71e26
}

.header .tongfa_box .ul_class.simple-style.red .el-icon-caret-bottom {
  color: #1d1f24
}

.header .tongfa_box .ul_class.simple-style.red .register_class,
.header .tongfa_box .ul_class.simple-style.red .register_class:hover {
  background: transparent;
  color: #d71e26;
  border-color: #d71e26
}

.header .tongfa_box .ul_class.chinese-style .black-font:hover,
.header .tongfa_box .ul_class.chinese-style .division:hover,
.header .tongfa_box .ul_class.chinese-style .item_name_li:hover,
.header .tongfa_box .ul_class.chinese-style .langs:hover,
.header .tongfa_box .ul_class.chinese-style li,
.header .tongfa_box .ul_class.dark-style .black-font:hover,
.header .tongfa_box .ul_class.dark-style .division:hover,
.header .tongfa_box .ul_class.dark-style .item_name_li:hover,
.header .tongfa_box .ul_class.dark-style .langs:hover,
.header .tongfa_box .ul_class.dark-style li {
  color: #fff
}

.header .tongfa_box .ul_class.chinese-style .active,
.header .tongfa_box .ul_class.dark-style .active {
  color: #fff;
  border-bottom: .25rem solid
}

.header .tongfa_box .ul_class.chinese-style .about-us-tab,
.header .tongfa_box .ul_class.chinese-style .el-icon-caret-bottom,
.header .tongfa_box .ul_class.chinese-style .langs_drop,
.header .tongfa_box .ul_class.chinese-style .langTxet_box:hover,
.header .tongfa_box .ul_class.dark-style .about-us-tab,
.header .tongfa_box .ul_class.dark-style .el-icon-caret-bottom,
.header .tongfa_box .ul_class.dark-style .langs_drop,
.header .tongfa_box .ul_class.dark-style .langTxet_box:hover {
  color: #fff
}

.header .tongfa_box .ul_class.chinese-style .register_class,
.header .tongfa_box .ul_class.chinese-style .register_class:hover,
.header .tongfa_box .ul_class.dark-style .register_class,
.header .tongfa_box .ul_class.dark-style .register_class:hover {
  background: transparent;
  color: #fff;
  border-color: #fff
}
.chinese-style .tongfa_box.blankStyle,.tongfa_box.blankStyle {
  background: #fff;
  box-shadow: 0 .125rem .625rem 0 rgba(0,0,0,.1)
}

.chinese-style .tongfa_box.blankStyle .el-dropdown,.chinese-style .tongfa_box.blankStyle .opera,.chinese-style .tongfa_box.blankStyle .opera a,.chinese-style .tongfa_box.blankStyle .ul_class li,.tongfa_box.blankStyle .el-dropdown,.tongfa_box.blankStyle .opera,.tongfa_box.blankStyle .opera a,.tongfa_box.blankStyle .ul_class li {
  color: #212121
}

.chinese-style .tongfa_box.blankStyle .ul_class li:not(.division).active,.chinese-style .tongfa_box.blankStyle .ul_class li:not(.division):hover,.tongfa_box.blankStyle .ul_class li:not(.division).active,.tongfa_box.blankStyle .ul_class li:not(.division):hover {
  border-bottom: .125rem solid #1a73ee;
  color: #1678d9
}

.chinese-style .tongfa_box.blankStyle .ul_class li:not(.division).active:before,.chinese-style .tongfa_box.blankStyle .ul_class li:not(.division):hover:before,.tongfa_box.blankStyle .ul_class li:not(.division).active:before,.tongfa_box.blankStyle .ul_class li:not(.division):hover:before {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg,rgba(26,115,238,0),#1a73ee);
  box-shadow: 0 .125rem .625rem 0 rgba(0,0,0,.1);
  opacity: .1
}

.chinese-style .tongfa_box.blankStyle .ul_class li:not(.division):hover span,.tongfa_box.blankStyle .ul_class li:not(.division):hover span {
  color: #1678d9
}
</style>
