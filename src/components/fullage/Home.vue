<template>
  <div class="home">
    <div class="nav">
      <div class="nav-content">
        <img class="logo" src="../../assets/static/images/logo.jpg"/>
        <ul class="nav-list">
          <li class="nav-item"><a href="#/home">首页</a></li>
          <li class="nav-item"><a href="#/aboutMe">基本资料</a></li>
          <li class="nav-item"><a href="#/skills">技能掌握</a></li>
          <li class="nav-item"><a href="#/experience">我的作品</a></li>
          <li class="nav-item"><a href="#/projects">我的经历</a></li>
          <li class="nav-item"><a href="#/contactMe">联系我</a></li>
        </ul>
      </div>
    </div>
    <div class="home-content">
      <img class="cloud1" src="../../assets/static/images/cloud.png"/>
      <img class="cloud2" src="../../assets/static/images/cloud.png"/>
      <div class="bg-wrapper">
        <img src="../../assets/static/images/bgCat.png" alt="" class="bg-cat">
        <div class="dot dot01" v-show="dotShowFlag0"></div>
        <div class="dot dot02" v-show="dotShowFlag1"></div>
        <div class="dot dot03" v-show="dotShowFlag2"></div>
      </div>
      <div class="center-box">
        <div class="headIMG-wrapper">
          <div class="headIMG-mask"></div>
          <img class="headIMG" src="../../assets/static/images/headIMG.png" alt="">
        </div>
        <img src="../../assets/static/images/netName.png" alt="" class="net-name">
        <img src="../../assets/static/images/home-text.png" alt="" class="text">
        <button class="get-satrt-btn" @click="getStart">开始</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data () {
      return {
        dotShowFlag0: false,
        dotShowFlag1: false,
        dotShowFlag2: false,
        interval: null
      }
    },
    methods: {
      // 点击开始按钮，自动滚动到下一页
      getStart () {
        this.$emit('moveSectionDown')
      },
      dotAnimation () {
        this.interval = setInterval(() => {
          setTimeout(() => {
            this.dotShowFlag0 = true
            this.dotShowFlag1 = false
            this.dotShowFlag2 = false
          }, 500)
          setTimeout(() => {
            this.dotShowFlag0 = true
            this.dotShowFlag1 = true
            this.dotShowFlag2 = false
          }, 1000)
          setTimeout(() => {
            this.dotShowFlag0 = true
            this.dotShowFlag1 = true
            this.dotShowFlag2 = true
          }, 1500)
        }, 1500)
      }
    },
    mounted () {
      this.dotAnimation()
    },
    destroyed () {
      clearInterval(this.interval)
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/static/css/main";

  .home {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .nav {
      width: 100%;
      height: px2rem(100);
      background: #fff;
      @include box-shadow(0, 8px, 8px, 0, rgba(0, 0, 0, 0.1));
      .nav-content {
        position: relative;
        margin: 0 auto;
        width: 100%;
        height: 100%;
        @include flex-center;
        .logo {
          position: absolute;
          left: px2rem(150);
          width: px2rem(276);
          height: px2rem(82);
        }
        .nav-list {
          position: absolute;
          right: px2rem(120);
          @include flex-row;
          .nav-item {
            position: relative;
            font-size: $font-size-nav;
            padding: 0 px2rem(45);
            a {
              color: $color-nav;
            }
            &:nth-child(1) {
              a {
                color: $color-hover-nav;
              }
              &:before {
                width: 35%;
              }
            }
            &:hover {
              a {
                color: $color-hover-nav;
              }
              &:before {
                width: 35%;
              }
            }
            &:before {
              position: absolute;
              content: '';
              width: 0;
              height: px2rem(4);
              background: $color-hover-nav;
              left: 50%;
              bottom: px2rem(-20);
              @include translate(-50%);
              @include transition;
            }
          }
        }
      }
    }
    .home-content {
      position: absolute;
      top: px2rem(100);
      bottom: 0;
      width: 100%;
      @include flex-center-h;
      .cloud1 {
        position: absolute;
        top: px2rem(69);
        left: px2rem(218);
        width: px2rem(312);
        height: px2rem(102);
        @include move(move1, 70px);
      }
      .cloud2 {
        position: absolute;
        top: px2rem(231);
        left: px2rem(-20);
        width: px2rem(156);
        height: px2rem(51);
        @include move(move2, -80px);
      }
      .bg-wrapper {
        position: absolute;
        right: px2rem(42);
        bottom: 0;
        width: px2rem(625);
        height: px2rem(556);
        .bg-cat {
          width: px2rem(625);
          height: px2rem(556);
        }
        .dot {
          position: absolute;
          top: px2rem(125);
          width: px2rem(10);
          height: px2rem(10);
          background: #72554D;
          &.dot01 {
            right: px2rem(235);
          }
          &.dot02 {
            right: px2rem(210);
          }
          &.dot03 {
            right: px2rem(185);
          }
        }
      }
      .center-box {
        position: absolute;
        top: px2rem(22);
        width: px2rem(850);
        height: px2rem(700);
        @include flex-center-h;
        .headIMG-wrapper {
          position: relative;
          width: px2rem(308);
          height: px2rem(308);
          .headIMG-mask{
            width: px2rem(260);
            height: px2rem(260);
            overflow: hidden;
            background: #fff;
            border-radius: 50%;
            @include position-center;
          }
          .headIMG {
            width: px2rem(308);
            height: px2rem(308);
            @include position-center;
          }
        }
        .net-name {
          position: absolute;
          top: px2rem(295);
          width: px2rem(825);
          height: px2rem(175);
        }
        .text {
          position: absolute;
          bottom: px2rem(155);
          width: px2rem(538);
          height: px2rem(32);
        }
        .get-satrt-btn {
          position: absolute;
          bottom: px2rem(44);
          width: px2rem(170);
          height: px2rem(52);
          background: #FFE3B1;
          border-color: #FFE3B1;
          outline: none;
          border-radius: px2rem(10);
          color: #fff;
          font-size: px2rem(20);
          letter-spacing: 4px;
        }
      }
    }
  }
</style>
