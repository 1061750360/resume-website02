<template>
  <div class="contact-me">
    <img src="../../assets/static/images/bg5.png" class="bg5">
    <div class="contact-me-wrapper">
      <div class="headIMG-wrapper">
        <div class="headIMG-mask"></div>
        <img class="headIMG" src="../../assets/static/images/headIMG.png" alt="">
      </div>
      <p class="title">联系我</p>
      <img src="../../assets/static/images/bg6.png" class="bg6">
      <p class="text">学习是一个充实愉悦的过程</p>
      <p class="text">喜欢尝试，期待新鲜事物</p>
      <p class="text">前端即兴趣，兴趣即未来</p>
      <p class="text">行路有良友，便是捷径</p>
      <p class="text">期待有机会与您共事！</p>
      <ul class="icons">
        <li class="icon">
          <a href="https://github.com/1061750360" target="_blank" title="前往Github" class="iconfont icon-github"></a>
        </li>
        <li class="icon">
          <a href="https://blog.csdn.net/qq_16687863" target="_blank" title="前往CSDN博客" class="iconfont icon-csdn"></a>
        </li>
        <li class="icon">
          <a href="javascript:void(0);" title="微信" class="iconfont icon-weixin"></a>
          <div class="qrcode">
            <img src="../../assets/static/images/wechat_qrcode.png" alt="">
          </div>
        </li>
        <li class="icon">
          <a href="javascript:void(0);" title="QQ" class="iconfont icon-QQ"></a>
          <div class="qrcode">
            <img src="../../assets/static/images/qq_qrcode.png" alt="">
          </div>
        </li>
        <li class="icon">
          <a href="javascript:void(0);" title="点我发送邮件" class="iconfont icon-email" @click="sendEmail"></a>
        </li>
      </ul>
    </div>
    <footer class="footer">
      <a href="http://www.beian.miit.gov.cn/" target="_blank" class="beian">&copy;xmzd&nbsp;|&nbsp;鄂ICP备19027819号</a>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "ContactMe",
    methods: {
      sendEmail () {
        this.$emit('sendEmail')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/static/css/main";

  .contact-me {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .bg5 {
      position: absolute;
      left: 0;
      bottom: 0;
      width: px2rem(548);
      height: px2rem(797);
    }
    .contact-me-wrapper {
      position: absolute;
      top: 50%;
      left: 50%;
      @include translate(-50%, -50%, 0);
      width: px2rem(500);
      color: #fff;
      text-align: center;
      .headIMG-wrapper {
        position: relative;
        width: px2rem(246);
        height: px2rem(246);
        margin: 0 auto;
        .headIMG-mask{
          width: px2rem(208);
          height: px2rem(208);
          overflow: hidden;
          background: #fff;
          border-radius: 50%;
          @include position-center;
        }
        .headIMG {
          width: px2rem(246);
          height: px2rem(246);
          @include position-center;
        }
      }
      .title {
        font-size: px2rem(30);
        color: $title-color;
      }
      .bg6 {
        width: px2rem(163);
        height: px2rem(9);
        margin: px2rem(20) 0;
      }
      .text {
        font-size: $fontSize-big;
        margin-bottom: px2rem(25);
      }
      .icons{
        padding-top: px2rem(20);
        display: flex;
        justify-content: space-around;
        .icon{
          position: relative;
          .iconfont{
            display: flex;
            justify-content: center;
            align-items: center;
            width: px2rem(40);
            height: px2rem(40);
            background: black;
            border-radius: 50%;
            color: #fff;
            font-size: px2rem(24);
            cursor: pointer;
            @include transition;
            &:hover{
              color: black;
              background: #fff;
              @include scale(1.1);
            }
          }
          .icon-QQ:hover,.icon-weixin:hover{
            &+.qrcode{
              display: block;
            }
          }
          .qrcode{
            display: none;
            position: absolute;
            top: px2rem(-220);
            left: 50%;
            @include translate(-50%, 0, 0);
            width: 200px;
            height: 200px;
            img{
              width: 100%;
              height: 100%;
            }
            &::after{
              content: "";
              position: absolute;
              left: 50%;
              bottom: px2rem(-9);
              @include translate(-50%, 0, 0);
              width: 0;
              height: 0;
              border-left: px2rem(10) solid transparent;
              border-top: px2rem(10) solid #fff;
              border-right: px2rem(10) solid transparent;
            }
          }
        }
      }
    }
    .footer {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: px2rem(40);
      font-size: px2rem(14);
      text-align: center;
      .beian {
        color: #999AAA;
      }
    }
  }
</style>
