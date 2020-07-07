<template>
  <div class="projects">
    <div class="title">
      <p class="text">我的作品</p>
      <img src="../../assets/static/images/bg4.png" class="bg4">
    </div>
    <img src="../../assets/static/images/bg3.png" class="bg3">
    <div class="projects-wrapper">
      <div class="right-nav">
        <a class="nav-item" :class="{'activated': projectIndex === 1}" href="javascript:void(0);" @click="changeProjectIndex(1)"></a>
        <a class="nav-item" :class="{'activated': projectIndex === 2}" href="javascript:void(0);" @click="changeProjectIndex(2)"></a>
        <a class="nav-item" :class="{'activated': projectIndex === 3}" href="javascript:void(0);" @click="changeProjectIndex(3)"></a>
      </div>
      <transition name="left-fade" mode="out-in">
        <div class="project-wrapper" v-if="projectIndex === 1" :key="'project1'">
          <div class="img-wrapper">
            <img class="img-h" src="../../assets/static/images/p31.png" alt="">
            <img class="img-h" src="../../assets/static/images/p33.png" alt="">
            <img class="img-h" src="../../assets/static/images/p32.png" alt="">
          </div>
          <div class="project-desc">
            <div class="project-title">项目名称：开发者社区(来自私单平台)</div>
            <div class="project-skills">
              <p class="summary">主要技术栈：</p>
              <p>Vue全家桶、axios、element-ui、echarts、scss</p>
              <p class="summary">主要工作：</p>
              <p class="text"><span class="dot"></span>使用element-ui以及原有样式表对部分页面进行重构</p>
              <p class="text"><span class="dot"></span>通过axios与后端进行数据交互，并对异常情况进行捕捉和提示</p>
              <p class="text"><span class="dot"></span>能进行搜索、分类、筛选、排序等操作并显示在表格上</p>
              <p class="text"><span class="dot"></span>对原有登陆注册样式及部分功能进行修改</p>
            </div>
          </div>
        </div>
        <div class="project-wrapper" v-if="projectIndex === 2" :key="'project2'">
          <div class="img-wrapper">
            <img src="../../assets/static/images/p11.png" alt="">
            <img src="../../assets/static/images/p13.png" alt="">
            <img src="../../assets/static/images/p12.png" alt="">
          </div>
          <div class="project-desc">
            <div class="project-title">项目名称：FunnyDay Music</div>
            <div class="project-skills">
              <p class="summary">技术栈：</p>
              <p>Vue全家桶、axios、better-scroll、less</p>
              <p class="summary">主要工作：</p>
              <p class="text"><span class="dot"></span>使用Vue+Vuex+Less等技术实现前台页面</p>
              <p class="text"><span class="dot"></span>通过封装组件、使用mixin、提取通用方法等方式提高代码的复用率</p>
              <p class="text"><span class="dot"></span>通过后端代理的方式进行跨域，使用axios与后端进行数据交互</p>
              <p class="text"><span class="dot"></span>使用localstorage缓存部分数据（搜索记录），提高页面的友好度</p>
              <p class="summary">项目地址：<a href="http://www.funnyday.site" target="_blank">http://www.funnyday.site</a></p>
              <p class="summary">移动端请扫描下方二维码：</p>
              <p class="MA-qrcode"><img src="../../assets/static/images/musicApp_qrcode.png" alt="二维码"></p>
            </div>
          </div>
        </div>
        <div class="project-wrapper" v-if="projectIndex === 3" :key="'project3'">
          <div class="img-wrapper">
            <img src="../../assets/static/images/p21.png" alt="">
            <img src="../../assets/static/images/p23.png" alt="">
            <img src="../../assets/static/images/p22.png" alt="">
          </div>
          <div class="project-desc">
            <div class="project-title">项目名称：布克书馆</div>
            <div class="project-skills">
              <p class="summary">技术栈：</p>
              <p>Vue全家桶、axios、i18n、mock.js、scss</p>
              <p class="summary">主要工作：</p>
              <p class="text"><span class="dot"></span>针对使用场景，兼容PC端鼠标操作、移动端手势操作</p>
              <p class="text"><span class="dot"></span>通过封装组件、使用mixin、提取通用方法等方式提高代码的复用率</p>
              <p class="text"><span class="dot"></span>使用mock.js对请求进行拦截，返回模拟的数据</p>
              <p class="text"><span class="dot"></span>配置eslint代码检查工具，降低代码的错误率和提高代码的一致性</p>
              <p class="text"><span class="dot"></span>使用i18n实现页面的国际化（中英语言的切换）</p>
              <p class="summary">项目地址：<a href="javascript:void(0);">暂无</a></p>
              <p class="summary">移动端请扫描下方二维码：</p>
              <p class="MA-qrcode">暂无</p>
            </div>
          </div>
        </div>
      </transition>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Projects",
    data () {
      return {
        projectIndex: 1
      }
    },
    methods: {
      changeProjectIndex (index) {
        this.projectIndex = index
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/static/css/main";

  .projects {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    @include flex-center;
    .bg3 {
      position: absolute;
      bottom: 0;
      right: 0;
      width: px2rem(772);
      height: px2rem(865);
      z-index: 9;
    }
    .title {
      position: absolute;
      top: px2rem(83);
      width: px2rem(298);
      height: px2rem(48);
      .text {
        position: absolute;
        bottom: px2rem(45);
        text-align: center;
        width: 100%;
        letter-spacing: $letter-spacing;
        font-size: $font-size-title;
        color: $title-color;
      }
      .bg4 {
        width: px2rem(298);
        height: px2rem(48);
      }
    }
    .projects-wrapper {
      position: absolute;
      top: px2rem(200);
      height: px2rem(600);
      width: px2rem(1120);
      background: #fff;
      border-radius: px2rem(10);
      overflow: hidden;
      z-index: 99;
      .right-nav {
        position: absolute;
        bottom: px2rem(20);
        left: 50%;
        @include translate(-50%, 0, 0);
        width: px2rem(400);
        height: px2rem(15);
        @include flex-row;
        z-index: 999;
        .nav-item {
          width: px2rem(15);
          height: px2rem(15);
          border-radius: 50%;
          background: #C6E8E3;
        }
        .activated {
          background: #83BCB4;
        }
      }
      .project-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        .img-wrapper {
          position: absolute;
          top: 50%;
          left: px2rem(40);
          @include translate(0, -50%, 0);
          width: px2rem(500);
          height: px2rem(373.5);
          img {
            display: inline-block;
            position: relative;
            height: px2rem(373.5);
            width: px2rem(210);
            @include skew(0, 20deg);
            margin-right: px2rem(-80);
            border: 1px solid rgba(0,0,0,0.3);
            transition: all 0.3s ease;
            &:nth-child(1) {
              z-index: 999;
            }
            &:nth-child(2) {
              z-index: 998;
            }
            &:nth-child(3) {
              z-index: 997;
            }
            &:hover {
              z-index: 1000;
              @include skew(0, 0);
              @include scale(1.1);
            }
          }
          .img-h {
            height: px2rem(210);
            width: px2rem(373.5);
            display: inline-block;
            position: relative;
            @include skew(0, 20deg);
            margin-right: px2rem(-300);
            margin-top: px2rem(70);
            border: 1px solid rgba(0,0,0,0.3);
            transition: all 0.3s ease;
          }
        }
        .project-desc {
          position: absolute;
          top: 50%;
          right: px2rem(40);
          @include translate(0, -50%, 0);
          width: px2rem(500);
          height: px2rem(500);
          .project-title {
            font-size: px2rem(22);
            font-weight: bold;
          }
          .project-skills {
            margin: px2rem(24) 0;
            font-size: px2rem(16);
            .summary {
              margin: px2rem(20) 0 px2rem(10);
              font-size: px2rem(18);
              font-weight: bold;
            }
            .text {
              margin: px2rem(8) 0;
            }
            p {
              .dot {
                display: inline-block;
                width: px2rem(8);
                height: px2rem(8);
                border-radius: 50%;
                background: black;
                margin-right: px2rem(10);
              }
            }
            .MA-qrcode {
              img {
                width: px2rem(160);
                height: px2rem(160);
              }
            }
          }
        }
      }
    }
  }
</style>
