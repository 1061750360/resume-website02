<template>
  <div class="content">
    <!--侧边导航栏-->
    <div id="menu" :class="playingStateCls">
      <span class="active" data-menuanchor='/home'>
        <p class="nav-hidden-text">首页</p>
        <a href="#/home"></a>
      </span>
      <span data-menuanchor='/aboutMe'>
        <p class="nav-hidden-text">关于我</p>
        <a href="#/aboutMe"></a>
      </span>
      <span data-menuanchor='/skills'>
        <p class="nav-hidden-text">技能掌握</p>
        <a href="#/skills"></a>
      </span>
      <span data-menuanchor='/experience'>
        <p class="nav-hidden-text">我的作品</p>
        <a href="#/experience"></a>
      </span>
      <span data-menuanchor='/projects'>
        <p class="nav-hidden-text">我的经历</p>
        <a href="#/projects"></a>
      </span>
      <span data-menuanchor='/contactMe'>
        <p class="nav-hidden-text">联系我</p>
        <a href="#/contactMe"></a>
      </span>
      <div class="play-btn" @click.stop="togglePlay" >
        <i class="iconfont icon-play" v-show="!playingState"></i>
        <i class="iconfont icon-pause" v-show="playingState"></i>
      </div>
      <audio loop ref="audio" src="../assets/static/audio/563388747.mp3"></audio>
    </div>
    <full-page :options="options" ref="fullpage">
      <div class="section">
        <home @moveSectionDown="moveSectionDown"></home>
      </div>
      <div class="section">
        <about-me></about-me>
      </div>
      <div class="section">
        <skills></skills>
      </div>
      <div class="section">
        <projects></projects>
      </div>
      <div class="section">
        <experience></experience>
      </div>
      <div class="section">
        <contact-me @sendEmail="sendEmail"></contact-me>
      </div>
    </full-page>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Home from '../components/fullage/Home'
  import AboutMe from '../components/fullage/AboutMe'
  import Experience from '../components/fullage/Experience'
  import Skills from '../components/fullage/Skills'
  import Projects from '../components/fullage/Projects'
  import ContactMe from '../components/fullage/ContactMe'

  export default {
    name: "Fullpage",
    data () {
      return {
        curIndex: 1, // (未用到)该参数暂时保留，以便后期添加其他需求
        playingState: false,
        options: {
          scrollOverflow: false,
          scrollBar: false,
          navigation: true,
          anchors: ['/home', '/aboutMe', '/skills', '/experience', '/projects', '/contactMe'],
          menu: '#menu',
          sectionsColor: ['#8CD3C8', '#292A34', '#F4986F', '#94CCC3', '#9ACD68', '#234956']
        }
      }
    },
    methods: {
      ...mapActions(["setTvStatus", "setCurrentScreen"]),
      sendEmail () {
        // 跳转到"关于我"页面并切换到发送邮件的screen
        this.$refs.fullpage.api.moveTo(2)
        setTimeout(() => {
          this.setTvStatus(false)
          this.setCurrentScreen(3)
        }, 1000)
      },
      moveSectionDown () {
        this.$refs.fullpage.api.moveSectionDown()
      },
      refreshPath () {
        // 在页面刷新的时候，判断当前路径，并刷新 this.curIndex 的值
        const path = this.$route.path
        let index
        if (path === '/' || path === '/home') {
          index = 0
        } else {
          index = this.options.anchors.findIndex((item) => {
            return item === path
          })
        }
        this.curIndex = index + 1
      },
      togglePlay () {
        // 切换歌曲播放状态
        if (!this.playingState) {
          this.$refs.audio.play()
        } else {
          this.$refs.audio.pause()
        }
        this.playingState = !this.playingState
      }
    },
    watch: {
      $route (newVal) {
        // 这个只有在页面路由变化时才触发，页面刷新时不触发，所以需要为页面刷新写一个处理函数  refreshPath()
        // 路由变化时，也即滚动fullpage页面时，让大导航菜单跟着刷新到对应的导航菜单项
        // 至于为什么要这样处理，主要是fullpage的事件回调函数有bug
        const index = this.options.anchors.findIndex((item) => {
          return item === newVal.path
        })
        this.curIndex = index + 1
      }
    },
    created () {
      this.refreshPath()
    },
    computed: {
      ...mapGetters(["TV_status", "currentScreen"]),
      playingStateCls () {
        // 播放状态不同决定了音乐的背景图片是否处于旋转状态
        if (this.playingState) {
          return 'running'
        } else {
          return 'paused'
        }
      }
    },
    components: {
      Home,
      AboutMe,
      Experience,
      Skills,
      Projects,
      ContactMe
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/static/css/main";

  // 小nav圆点呼吸动画
  @keyframes breath {
    0%{
      box-shadow: 0 0 0 0 rgba(37, 143, 184, 1);
      background: #fff;
    }
    100%{
      box-shadow: 0 0 0 10px rgba(37, 143, 184, 0.1);
      background: #dddedc;
    }
  }
  // 背景音乐的背景图片旋转动画
  @keyframes imgRotate {
    0%{
      transform: rotateZ(0);
    }
    100%{
      transform: rotateZ(360deg);
    }
  }

  .content{
    #menu{
      position: fixed;
      top: 50%;
      right: 2%;
      @include translate(0, -50%, 0);
      z-index: 99;
      &.running{
        &::after{
          animation-play-state: running;
        }
      }
      &.paused{
        &::after{
          animation-play-state: paused;
        }
      }
      &::after{
        position: absolute;
        bottom: px2rem(-40);
        right: px2rem(-13);
        width: px2rem(40);
        height: px2rem(40);
        background: url("../assets/static/images/music.jpeg") no-repeat;
        background-size: contain;
        border-radius: 50%;
        transition: background 0.3s ease-in;
        content: '';
        animation: imgRotate 6s infinite linear;
      }
      &::before{
        position: absolute;
        top: px2rem(24);
        left: 0;
        width: px2rem(6);
        height: px2rem(230);
        display: block;
        border-right: px2rem(1) dashed #8c7576;
        content: '';
      }
      span{
        display: block;
        position: relative;
        width: px2rem(14);
        height: px2rem(14);
        border-radius: 50%;
        background: #dddedc;
        margin: px2rem(24) auto!important;
        cursor: pointer;
        z-index: 999;
        &.active{
          background: #fff;
          animation: breath 2s infinite;
        }
        &::before{
          width: px2rem(6);
          height: px2rem(6);
          content: '';
          border-radius: 50%;
          background: $color-slide-nav-color;
          display: block;
          position: absolute;
          left: 50%;
          margin-left: px2rem(-3);
          top: 50%;
          margin-top: px2rem(-3);
        }
        &:hover {
          .nav-hidden-text {
            @include translate(0, 0, 0);
            opacity: 1;
          }
        }
        .nav-hidden-text {
          position: absolute;
          top: px2rem(-3);
          left: px2rem(-100);
          width: px2rem(80);
          @include translate(-40px, 0, 0);
          text-align: center;
          font-size: $fontSize-small;
          background: $color-slide-nav-color;
          color: #fff;
          opacity: 0;
          padding: px2rem(4) 0;
          @include transition;
          &::before {
            content: "";
            position: absolute;
            right: 0;
            top: px2rem(1);
            @include translate(100%, 0, 0);
            width: 0;
            height: 0;
            border-top: px2rem(10) solid transparent;
            border-left: px2rem(10) solid $color-slide-nav-color;
            border-bottom: px2rem(10) solid transparent;
          }
        }
        a{
          position: relative;
          display: block;
          width: 100%;
          height: 100%;
          z-index: 1000;
        }
      }
      .play-btn{
        position: absolute;
        bottom: px2rem(-40);
        right: px2rem(-13);
        width: px2rem(40);
        height: px2rem(40);
        z-index: 100;
        background: transparent;
        border-radius: 50%;
        cursor: pointer;
        .iconfont{
          width: px2rem(40);
          height: px2rem(40);
          font-size: px2rem(28);
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          opacity: 0;
          &:hover{
            opacity: 1;
            background: rgba(255,255,255,0.5);
          }
        }
      }
    }
  }
</style>
